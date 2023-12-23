"use strict";

function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true


// ! Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.

//* Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
//? Якщо в рядку відсутні заборонені слова, функція повертає буль false