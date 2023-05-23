'use strict'

// Налаштування
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Змініть код лише під цим рядком
    let id = 'no';
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName == name) id = i;
    }
    if (id == 'no') return 'No such contact';
    if (contacts[id][prop] === undefined) return 'No such property';
    else return contacts[id][prop]

    // Змініть код лише над цим рядком
}


console.log(lookUpProfile("Kristian", "lastName"))