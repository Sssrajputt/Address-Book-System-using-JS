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
    this._firstName = firstName;
    this._lastName = lastName;
    this._address = address;
    this._city = city;
    this._state = state;
    this._zip = zip;
    this._phoneNumber = phoneNumber;
    this._email = email;
  }

  // Getter and Setter for firstName
  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  // Getter and Setter for lastName
  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  // Getter and Setter for address
  get address() {
    return this._address;
  }

  set address(value) {
    this._address = value;
  }

  // Getter and Setter for city
  get city() {
    return this._city;
  }

  set city(value) {
    this._city = value;
  }

  // Getter and Setter for state
  get state() {
    return this._state;
  }

  set state(value) {
    this._state = value;
  }

  // Getter and Setter for zip
  get zip() {
    return this._zip;
  }

  set zip(value) {
    this._zip = value;
  }

  // Getter and Setter for phoneNumber
  get phoneNumber() {
    return this._phoneNumber;
  }

  set phoneNumber(value) {
    this._phoneNumber = value;
  }

  // Getter and Setter for email
  get email() {
    return this._email;
  }

  set email(value) {
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

// Example Usage
const contact = new AddressBookContact(
  "John",
  "Doe",
  "123 Main St",
  "Hometown",
  "TX",
  "12345",
  "123-456-7890",
  "john.doe@example.com"
);

// Display the contact information
contact.displayContact();
