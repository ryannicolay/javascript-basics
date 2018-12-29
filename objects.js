// Exercise 1 - Address Object

let address = {
    street : "123 Main St",
    city : "Jacksonville",
    zipCode : "32065",
};

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);

// Exercise 2 - Factory and Constructor Functions

let address1 = createAddress("123 Main St", "Jacksonville", "32065");

console.log(address1);

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode,
    };
}

let address2 = new Address("123 Main St", "Jacksonville", "32065");

console.log(address2);

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

// Exercise 3 - Object Equality

function areEqual(address1, address2) {
    return address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode;
}

function areSame(address1, address2) {
    return address1 === address2;
}      

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

// Exercise 4 - Blog Post Object

let blogPost = {
    title: "a",
    body: "b",
    author: "c",
    views: 1,
    comments: [
        { author: "d", body: "e"},
        { author: "f", body: "g"}
    ],
    isLive: true
};

// Exercise 5 - Constructor Functions

function BlogPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = fasle;
}

// Exercise 6 - Price Range Object
    
let priceRange = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 }
];

    // Restaurant Object
        // Store Name
        // Address
        // Rating
        // Categories
        // Description
        // Average Price Per Person
