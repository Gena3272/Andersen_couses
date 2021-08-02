/**
 * Создать класс User который будет являтся базовым. Добавить в него свойства name, isAdmin.
 * Добавить методы которые будут возвращать name, isAdmin.
 * Создать классы Admin и DefaultUser, которые будут наследоватся от класса User.
 * Переопределить метод родителя(один), росширить метод(один),
 * а так же добавить новый метод(на ваш выбор). Можно добавить свйоство(если хотите).
 * 1. Написать прототипное наследование.
 */

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

User.prototype.getName = function() {
    return this.name;
}

User.prototype.getIsAdmin = function() {
    return this.isAdmin;
}

Admin.prototype = Object.create(User.prototype);

function Admin(name, secondName) {
    User.call(this, name, true);
    this.secondName = secondName;
}

Admin.prototype.getName = function() {
    return this.name + this.secondName;
}

DefaultUser.prototype = Object.create(User.prototype);

function DefaultUser(name, age) {
    User.call(this, name, false);
    this.age = age;
}

DefaultUser.prototype.getName = function() {
    return this.name;
}

DefaultUser.prototype.getAge = function() {
    return this.age;
}