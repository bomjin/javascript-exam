'use strict';

// 1. class declarations

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

//2. Getter and setters

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 0) {
      throw Error('age can not be negative');
    }
  }
}

const user1 = new User('steve', 'job', -1);
console.log(user1.age);

// Inheritance

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return width * this.height;
  }
}

class Rectangle extends Shape {}

class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('g');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());
