import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { sql, schema } from '@/database'
import { eq } from "drizzle-orm";
import { cipher } from "@/utils";

const auth_secret = process.env.AUTH_SECRET ? process.env.AUTH_SECRET : (() => {throw new Error('AUTH_SECRET environment variable not set!')})()

// export const authOptions: AuthOptions = 

const handler = NextAuth({
  secret: auth_secret,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize (credentials) {
        if (!credentials) {
          return null
        }
        const user = await sql.query.users.findFirst({
          where: eq(schema.users.email, credentials.email)
        }).execute()
        if (user && await cipher.compare(credentials.password, user.password)) {
          return {
            ...user,
            id: user.id.toString()
          }
        } else {
          return null
        }
      }
    })
  ]
});

export { handler as GET, handler as POST }