import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

async function isUsernameAvailable(username) {
  const account = await prisma.accounts.findUnique({
    where: { username },
  });

  return !account; 
}

async function generateUsername(firstName, lastName) {
  let baseUsernames = [
    `${firstName[0].toLowerCase()}${lastName.toLowerCase()}`,
    `${firstName[0].toLowerCase()}_${lastName.toLowerCase()}`,
    `${firstName[0].toLowerCase()}.${lastName.toLowerCase()}`,
    `${firstName.toLowerCase()}${lastName.toLowerCase()}`,
    `${firstName.toLowerCase()}.${lastName.toLowerCase()}`,
    `${firstName.toLowerCase()}_${lastName.toLowerCase()}`,
  ];

  for (let baseUserName of baseUsernames) {
    if (await isUsernameAvailable(baseUserName)) {
      console.log(baseUserName);
      return baseUserName;
    }
  }

  for (let baseUserName of baseUsernames) {
    let newUserName = `${baseUserName}${Math.floor(10 + Math.random() * 90)}`;
    if (await isUsernameAvailable(newUserName)) {
      console.log(newUserName);
      return newUserName;
    }
  }

  console.log("No available username found.");
  return null;
}

export { generateUsername };
