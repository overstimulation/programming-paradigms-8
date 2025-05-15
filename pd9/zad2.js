class Book {
  constructor() {
    this.users = [];
    console.log("Utworzono nową książkę.");
  }

  addUser(name, age, phone) {
    const newUser = {
      name: name,
      age: age,
      phone: phone,
    };
    this.users.push(newUser);
    console.log(`Dodano użytkownika: ${name}`);
  }

  showUsers() {
    console.log("Wszyscy użytkownicy w książce:");
    if (this.users.length === 0) {
      console.log("Brak użytkowników do wyświetlenia.");
    } else {
      this.users.forEach((user) => {
        console.log(
          `- Imię: ${user.name}, Wiek: ${user.age}, Telefon: ${user.phone}`
        );
      });
    }
  }

  findByName(name) {
    const foundUser = this.users.find((user) => user.name === name);
    console.log(foundUser || false);
  }

  findByPhone(phone) {
    const foundUser = this.users.find((user) => user.phone === phone);
    console.log(foundUser || false);
  }

  getCount() {
    console.log("Liczba użytkowników:", this.users.length);
  }
}

const myBook = new Book();

myBook.getCount();

myBook.addUser("Anna Nowak", 30, "111-222-333");
myBook.addUser("Piotr Zieliński", 25, "444-555-666");
myBook.addUser("Anna Kowalska", 35, "777-888-999");

myBook.showUsers();

myBook.getCount();

console.log('\nWyszukiwanie po imieniu "Piotr Zieliński":');
myBook.findByName("Piotr Zieliński");

console.log('\nWyszukiwanie po imieniu "Janusz":');
myBook.findByName("Janusz");

console.log('\nWyszukiwanie po imieniu "Anna Nowak":');
myBook.findByName("Anna Nowak");

console.log('\nWyszukiwanie po telefonie "444-555-666":');
myBook.findByPhone("444-555-666");

console.log('\nWyszukiwanie po telefonie "000-000-000":');
myBook.findByPhone("000-000-000");
