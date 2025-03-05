class AddressBookContact {
  // Properties
  _firstName;
  _lastName;
  _address;
  _city;
  _state;
  _zip;
  _phoneNumber;
  _email;

  constructor(
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    phoneNumber,
    email
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }

  // Validation methods
  validateName(name) {
    const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
    if (!nameRegex.test(name)) {
      throw new Error(
        "Name must start with a capital letter and have a minimum of 3 characters."
      );
    }
  }

  validateAddressField(field, fieldName) {
    if (field.length < 4) {
      throw new Error(`${fieldName} must have a minimum of 4 characters.`);
    }
  }

  validateZip(zip) {
    const zipRegex = /^\d{3}-?\d{3}$/;
    if (!zipRegex.test(zip)) {
      throw new Error(
        "Invalid zip code. It must be 6 digits with an optional hyphen in the middle."
      );
    }
  }

  validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
      throw new Error(
        "Invalid phone number. It must start with 6, 7, 8, or 9 and be 10 digits long."
      );
    }
  }

  validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email address.");
    }
  }

  // Getter and Setter for firstName
  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this.validateName(value);
    this._firstName = value;
  }

  // Getter and Setter for lastName
  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this.validateName(value);
    this._lastName = value;
  }

  // Getter and Setter for address
  get address() {
    return this._address;
  }

  set address(value) {
    this.validateAddressField(value, "Address");
    this._address = value;
  }

  // Getter and Setter for city
  get city() {
    return this._city;
  }

  set city(value) {
    this.validateAddressField(value, "City");
    this._city = value;
  }

  // Getter and Setter for state
  get state() {
    return this._state;
  }

  set state(value) {
    this.validateAddressField(value, "State");
    this._state = value;
  }

  // Getter and Setter for zip
  get zip() {
    return this._zip;
  }

  set zip(value) {
    this.validateZip(value);
    this._zip = value;
  }

  // Getter and Setter for phoneNumber
  get phoneNumber() {
    return this._phoneNumber;
  }

  set phoneNumber(value) {
    this.validatePhoneNumber(value);
    this._phoneNumber = value;
  }

  // Getter and Setter for email
  get email() {
    return this._email;
  }

  set email(value) {
    this.validateEmail(value);
    this._email = value;
  }

  // Method to display contact information
  displayContact() {
    console.log(`Contact Info:
        Name: ${this.firstName} ${this.lastName}
        Address: ${this.address}, ${this.city}, ${this.state}, ${this.zip}
        Phone: ${this.phoneNumber}
        Email: ${this.email}`);
  }

  // Method to edit contact information
  editContactDetails(details) {
    for (let key in details) {
      if (this.hasOwnProperty(`_${key}`)) {
        this[key] = details[key];
      }
    }
  }

  // Override toString method
  toString() {
    return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state}, ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
  }
}

// New AddressBook class
class AddressBook {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    if (contact instanceof AddressBookContact) {
      if (this.isDuplicate(contact.firstName, contact.lastName)) {
        throw new Error(
          `Duplicate entry detected for ${contact.firstName} ${contact.lastName}.`
        );
      }
      this.contacts.push(contact);
    } else {
      throw new Error(
        "Invalid contact. Must be an instance of AddressBookContact."
      );
    }
  }

  isDuplicate(firstName, lastName) {
    return this.contacts.some(
      (contact) =>
        contact.firstName === firstName && contact.lastName === lastName
    );
  }

  findContactByName(firstName, lastName) {
    return this.contacts.find(
      (contact) =>
        contact.firstName === firstName && contact.lastName === lastName
    );
  }

  editContact(firstName, lastName, newDetails) {
    const contact = this.findContactByName(firstName, lastName);
    if (contact) {
      contact.editContactDetails(newDetails);
    } else {
      throw new Error("Contact not found.");
    }
  }

  deleteContact(firstName, lastName) {
    const index = this.contacts.findIndex(
      (contact) =>
        contact.firstName === firstName && contact.lastName === lastName
    );
    if (index !== -1) {
      this.contacts.splice(index, 1);
      console.log(`Contact ${firstName} ${lastName} has been deleted.`);
    } else {
      throw new Error("Contact not found.");
    }
  }

  getNumberOfContacts() {
    return this.contacts.length;
  }

  searchByCity(city) {
    return this.contacts.filter((contact) => contact.city === city);
  }

  searchByState(state) {
    return this.contacts.filter((contact) => contact.state === state);
  }

  viewPersonsByCity(city) {
    const contactsInCity = this.contacts.filter(
      (contact) => contact.city === city
    );
    if (contactsInCity.length === 0) {
      console.log(`No contacts found in city: ${city}`);
    } else {
      console.log(`Contacts in ${city}:`);
      contactsInCity.forEach((contact) =>
        console.log(`${contact.firstName} ${contact.lastName}`)
      );
    }
  }

  viewPersonsByState(state) {
    const contactsInState = this.contacts.filter(
      (contact) => contact.state === state
    );
    if (contactsInState.length === 0) {
      console.log(`No contacts found in state: ${state}`);
    } else {
      console.log(`Contacts in ${state}:`);
      contactsInState.forEach((contact) =>
        console.log(`${contact.firstName} ${contact.lastName}`)
      );
    }
  }

  countByCity(city) {
    return this.contacts.filter((contact) => contact.city === city).length;
  }

  countByState(state) {
    return this.contacts.filter((contact) => contact.state === state).length;
  }

  sortContactsByName() {
    this.contacts.sort((a, b) => {
      const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
      const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    console.log("Contacts sorted by name:");
    this.displayAllContacts();
  }

  sortByCity() {
    this.contacts.sort((a, b) => {
      const cityA = a.city.toLowerCase();
      const cityB = b.city.toLowerCase();
      if (cityA < cityB) return -1;
      if (cityA > cityB) return 1;
      return 0;
    });
    console.log("Contacts sorted by city:");
    this.displayAllContacts();
  }

  sortByState() {
    this.contacts.sort((a, b) => {
      const stateA = a.state.toLowerCase();
      const stateB = b.state.toLowerCase();
      if (stateA < stateB) return -1;
      if (stateA > stateB) return 1;
      return 0;
    });
    console.log("Contacts sorted by state:");
    this.displayAllContacts();
  }

  sortByZip() {
    this.contacts.sort((a, b) => {
      const zipA = a.zip.toLowerCase();
      const zipB = b.zip.toLowerCase();
      if (zipA < zipB) return -1;
      if (zipA > zipB) return 1;
      return 0;
    });
    console.log("Contacts sorted by zip:");
    this.displayAllContacts();
  }

  displayAllContacts() {
    if (this.contacts.length === 0) {
      console.log("No contacts in the address book.");
    } else {
      this.contacts.forEach((contact) => contact.displayContact());
    }
  }
}

try {
  const addressBook = new AddressBook();

  const contact1 = new AddressBookContact(
    "John",
    "Doe",
    "123 Main St",
    "Hometown",
    "San Francisco",
    "461234",
    "9876543210",
    "john.doe@example.com"
  );

  const contact2 = new AddressBookContact(
    "Jane",
    "Smith",
    "456 Oak St",
    "AnotherTown",
    "Los Angeles",
    "461-789",
    "9123456789",
    "jane.smith@example.com"
  );

  const contact3 = new AddressBookContact(
    "Alice",
    "Brown",
    "789 Pine St",
    "Hometown",
    "San Francisco",
    "461235",
    "9876543211",
    "alice.brown@example.com"
  );

  addressBook.addContact(contact1);
  addressBook.addContact(contact2);
  addressBook.addContact(contact3);

  // Display all contacts in the address book
  addressBook.displayAllContacts();

  // Search for contacts by city
  const contactsInHometown = addressBook.searchByCity("Hometown");
  console.log("Contacts in Hometown:");
  contactsInHometown.forEach((contact) => contact.displayContact());

  // Search for contacts by state
  const contactsInCalifornia = addressBook.searchByState("San Francisco");
  console.log("Contacts in San Francisco:");
  contactsInCalifornia.forEach((contact) => contact.displayContact());

  // View persons by city
  console.log("View persons by City (Hometown):");
  addressBook.viewPersonsByCity("Hometown");

  // View persons by state
  console.log("View persons by State (San Francisco):");
  addressBook.viewPersonsByState("San Francisco");

  // Get the number of contacts in the address book
  const numberOfContacts = addressBook.getNumberOfContacts();
  console.log(`Number of contacts: ${numberOfContacts}`);

  // Get the number of contacts by city
  const countInHometown = addressBook.countByCity("Hometown");
  console.log(`Number of contacts in Hometown: ${countInHometown}`);

  // Get the number of contacts by state
  const countInCalifornia = addressBook.countByState("San Francisco");
  console.log(`Number of contacts in San Francisco: ${countInCalifornia}`);

  // Sort contacts by name
  addressBook.sortContactsByName();

  // Sort contacts by city
  addressBook.sortByCity();

  // Sort contacts by state
  addressBook.sortByState();

  // Sort contacts by zip
  addressBook.sortByZip();

  // Edit an existing contact
  addressBook.editContact("John", "Doe", {
    firstName: "Johnny",
    phoneNumber: "9123456780",
  });

  console.log("After editing contact:");
  addressBook.displayAllContacts();

  // Delete an existing contact
  addressBook.deleteContact("Jane", "Smith");

  console.log("After deleting contact:");
  addressBook.displayAllContacts();

  // Get the number of contacts in the address book after deletion
  const updatedNumberOfContacts = addressBook.getNumberOfContacts();
  console.log(`Number of contacts: ${updatedNumberOfContacts}`);
} catch (error) {
  console.error(error.message);
}
