import bcrypt from 'bcryptjs';

const cipher = {
  encrypt: async (password: string) => await bcrypt.hash(password, (await bcrypt.genSalt(5))),
  compare: async (password: string, hashedPassword: string) => await bcrypt.compare(password, hashedPassword)
}

export {
  cipher
}