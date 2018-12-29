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

let address2 = createAddress("123 Main St", "Jacksonville", "32065");

console.log(address2);

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode,
    };
}

address2 = Address("123 Main St", "Jacksonville", "32065")

console.log(address2);

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

// Exercise 3 - Object Equality