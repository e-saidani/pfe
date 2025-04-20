/** @format */
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const saltRounds = Number(process.env.SALT_ROUNDS);

async function hashPassword(password) {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

export { hashPassword };
