/** @format */

import bcrypt from "bcrypt";

async function comparePassword(password, hashedPassword) {
  const match = await bcrypt.compare(password, hashedPassword);
  return match;
}

export { comparePassword };
