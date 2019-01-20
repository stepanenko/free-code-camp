
class Book {
  constructor(author) {
    this._author = author;
  }

  get writer() {
    return this._author;
  }

  set writer(newAuthor) {
    this._author = newAuthor;
  }
}

let book = new Book('Tom');
book.writer = 'Jerry';
const author = book.writer;
// console.log(author);

// Task
class Thermostat {

  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }

  convertToC(F) {
    return 5/9 * (F - 32);
  }

  get tempInC() {
    return this.convertToC(this._fahrenheit);
  }

  set temp(newFtemp) {
    this._fahrenheit = newFtemp;
  }

}

const temp = new Thermostat(120);
temp.temp = 100;
console.log(temp.tempInC);
