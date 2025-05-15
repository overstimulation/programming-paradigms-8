const currentUser = {
  name: "Jan",
  surname: "Kowalski",
  email: "jan.kowalski@example.com",
  www: "jankowalski.pl",
  userType: "Admin",
  isActive: true,

  show: function () {
    console.log("--- Informacje o użytkowniku ---");
    console.log("Imię:", this.name);
    console.log("Nazwisko:", this.surname);
    console.log("Email:", this.email);
    console.log("WWW:", this.www);
    console.log("Typ użytkownika:", this.userType);
    console.log("Aktywny:", this.isActive);
    console.log("---------------------------------");
  },

  setActive: function (active) {
    if (typeof active === "boolean") {
      this.isActive = active;
      console.log(`Status użytkownika zmieniony na: ${this.isActive}`);
    } else {
      console.log(
        "Błąd: Metoda setActive wymaga wartości boolean (true/false)."
      );
    }
  },
};

console.log("Przed zmianą statusu:");
currentUser.show();

currentUser.setActive(false);

console.log("\nPo zmianie statusu na false:");
currentUser.show();

currentUser.setActive(true);

console.log("\nPo zmianie statusu z powrotem na true:");
currentUser.show();

currentUser.setActive("tak");
