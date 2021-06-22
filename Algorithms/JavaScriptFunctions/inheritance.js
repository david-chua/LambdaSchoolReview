class Car {
  constructor(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  introduce(){
    return `This ${this.year} ${this.brand} ${this.model} is the one I wanted`
  }
}


let car = new Car('toyota', 'corolla', 2010);

console.log(car);

console.log(car.introduce())



function Book(title, author, year){
  this.title = title,
  this.year = year,
  this.author = author;
}

Book.prototype.getInfo = function(){
  return `${this.title} by ${this.author} was written in ${this.year}`
}



let harryPotter = new Book('harry potter', 'jk rowling', '2001');

console.log(harryPotter);
console.log(harryPotter.getInfo());
