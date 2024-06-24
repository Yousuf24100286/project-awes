import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const auth_secret = process.env.AUTH_SECRET ? process.env.AUTH_SECRET : (() => {throw new Error('AUTH_SECRET environment variable not set!')})()

export const authOptions: AuthOptions = {
  secret: auth_secret,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize (credentials) {
        const user = { id: "1", email: "johndoe@mail.com" }
        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ]
}

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }