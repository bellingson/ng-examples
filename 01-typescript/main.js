"use strict";
var person_1 = require('./person');
var person = new person_1.Person(1, 'Bob', 26);
person.roles.push('sales');
person.sayHello();
