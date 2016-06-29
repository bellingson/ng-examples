"use strict";
var Person = (function () {
    function Person(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.roles = [];
    }
    Person.prototype.sayHello = function () {
        console.log("Hello, my name is " + this.name);
        this.roles.forEach(function (role) {
            console.log("I work in " + role);
        });
    };
    return Person;
}());
exports.Person = Person;
