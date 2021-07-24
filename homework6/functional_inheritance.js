/**
 * Создать класс User который будет являтся базовым. Добавить в него свойства name, isAdmin.
 * Добавить методы которые будут возвращать name, isAdmin.
 * Создать классы Admin и DefaultUser, которые будут наследоватся от класса User.
 * Переопределить метод родителя(один), росширить метод(один),
 * а так же добавить новый метод(на ваш выбор). Можно добавить свйоство(если хотите).
 * 1. Написать функциональное наследование.
 */

User.prototype.getName = function () {
    return this.name;
}

User.prototype.isAdmin = function () {
    return this.isAdmin;
}

Admin.prototype.getName = function () {
    return this.secondName;
}

DefaultUser.prototype.getName = function () {
    return User.prototype.getName.call(this) + this.secondName;
}

function User(name, isAdmin) {
    this.name = name;
    this.isAdmin = isAdmin;
}

function Admin(name, isAdmin, secondName) {
    User.apply(this, arguments);
    this.secondName = secondName;

    this.getName = function () {
        return this.secondName;
    }
}

function DefaultUser(name, isAdmin, secondName, age) {
    User.apply(this, arguments);
    this.secondName = secondName;
    this.age = age;
}

Admin.prototype = Object.create(User.prototype)
Admin.prototype.constructor = Admin;
DefaultUser.prototype = Object.create(User.prototype)
DefaultUser.prototype.constructor = DefaultUser;

const user = new User('user', false);
const admin = new Admin('admin', true, 'admin');
const defaultUser = new DefaultUser('defaultUser', true, 'defaultUser', 30);