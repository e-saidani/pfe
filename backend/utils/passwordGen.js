/** @format */

function generatePassword(firstName, lastName) {
  const firstInitial = firstName[0].toLowerCase();
  const lastInitial = lastName[0].toUpperCase();
  const companyAbbreviation = "aSa";
  const currentYear = new Date().getFullYear();
  const randomNumber = Math.floor(Math.random() * 900) + 100;

  const password = `${firstInitial}${lastInitial}@${companyAbbreviation}_${currentYear}#${randomNumber}`;
  return password;
}

export { generatePassword };
