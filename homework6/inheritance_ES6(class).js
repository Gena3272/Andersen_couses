/**
 * Создать класс User который будет являтся базовым. Добавить в него свойства name, isAdmin.
 * Добавить методы которые будут возвращать name, isAdmin.
 * Создать классы Admin и DefaultUser, которые будут наследоватся от класса User.
 * Переопределить метод родителя(один), росширить метод(один),
 * а так же добавить новый метод(на ваш выбор). Можно добавить свйоство(если хотите).
 * 1. Написать наследование ES6(class).
 */

class User {
    constructor(name, isAdmin) {
        this.name = name;
        this.isAdmin = isAdmin;
    }

    getName() {
        return this.name;
    }

    getIsAdmin() {
        return this.isAdmin;
    }
}

class Admin extends User {
    constructor(name, isAdmin, secondName) {
        super(name, isAdmin);
        this.secondName = secondName;
    }

    getName() {
        return this.secondName;
    }
}

class DefaultUser extends User {
    constructor(name, isAdmin, secondName, age) {
        super(name, isAdmin);
        this.secondName = secondName;
        this.age = age;
    }

    getAge() {
        return this.age;
    }

    getName() {
        return super.getName() + this.secondName;
    }
}