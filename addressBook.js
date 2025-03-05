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

  constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
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
}

// New AddressBook class
class AddressBook {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    if (contact instanceof AddressBookContact) {
      this.contacts.push(contact);
    } else {
      throw new Error(
        "Invalid contact. Must be an instance of AddressBookContact."
      );
    }
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

  addressBook.addContact(contact1);
  addressBook.addContact(contact2);

  // Display all contacts in the address book
  addressBook.displayAllContacts();
} catch (error) {
  console.error(error.message);
}
