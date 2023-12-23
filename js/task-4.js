"use strict";

/*
? Можливо я перемудрив у першому варіанті, тож під ним є ще закоментований другий.
* Формат повідомлення у завданні "Shipping to <country> will cost <price> credits" якби натякає на використання
* шаблонних рядків, хоча заради цього треба прописувати змінну price, та й взагалі можна просто скопіювати
* рядки з виведення у консолі. Втім, навіщо тоді використовувати switch? Та й у реальних проектах таке мабуть
* сприймалося б як поганий тон. Але про всяк випадок хочу перепитати: який з варіантів правильніший згідно
* з поставленим завданням?

? І ще одне питання: використовувати return замість змінної message, як я це зробив у другому варіанті,
? нормальна практика, чи так краще не робити?
*/

function getShippingCost(country) {
    let message;
    let price;
    switch (country) {
        case "China":
            price = 100;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Chile":
            price = 250;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Australia":
            price = 170;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Jamaica":
            price = 120;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        default:
            message = "Sorry, there is no delivery to your country";
    }
    return message;
}

// function getShippingCost(country) {
//     switch (country) {
//         case "China":
//             return "Shipping to China will cost 100 credits";
//         case "Chile":
//             return "Shipping to Chile will cost 250 credits";
//         case "Australia":
//             return "Shipping to Australia will cost 170 credits";
//         case "Jamaica":
//             return "Shipping to Jamaica will cost 120 credits";
//         default:
//             return "Sorry, there is no delivery to your country";
//     }
// }

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"


/* 
!Обов'язково використовуй інструкцію switch.
? Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price> необхідно підставити відповідні значення.

* Список країн і вартість доставки:
China — 100 кредитів
Chile — 250 кредитів
Australia — 170 кредитів
Jamaica — 120 кредитів

* Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок "Sorry, there is no delivery to your country".
*/