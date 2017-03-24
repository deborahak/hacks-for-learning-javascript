
// 1. A person that has a name of "Sally" a birthday of May 1, 1989 and a favorite color of blue

const person = {
    name: 'Sally',
    birthday: new Date('5/1/1989'),
    favoriteColor: 'blue'
};


// 2. An address that has street, city, state and zip

const address = {
    street: '30 NW 10th Ave.',
    city: 'Portland',
    state: 'OR',
    zip: '97209'
};

// 3. A store named "My Store" that has the address from #2, and owner who is #1

const store = {
    name: 'My Store',
    address: address,
    owner: person
};