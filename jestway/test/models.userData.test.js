const User = require('../models/user');
const UserData = require('../models/userData');

describe('Count user', () => {

    test('default user count', () => {
        const testUserData = new UserData();
        const userCount = testUserData.getUserCount();

        expect(userCount).toEqual(3);
    });

    test('clear user and count', () => {
        const testUserData = new UserData();

        testUserData.clearUsers();

        const userCount = testUserData.getUserCount();

        expect(userCount).toEqual(0);
    });

});

describe('add user', () => {

    test('add one user', () => {
        const testUserData = new UserData();

        const before = testUserData.getUserCount();

        const user = new User("NewUser","new@test.com");

        testUserData.addUser(user);

        const after = testUserData.getUserCount();

        expect(after - before).toEqual(1);
    });

});

describe('remove user', () => {

    test('remove one user', () => {
        const testUserData = new UserData();

        const before = testUserData.getUserCount();

        testUserData.removeOneUser();

        const after = testUserData.getUserCount();

        expect(before - after).toEqual(1);
    });

    test('remove user from empty list', () => {
        const testUserData = new UserData();

        testUserData.clearUsers();

        const removed = testUserData.removeOneUser();

        expect(removed).toEqual(null);
    });

});

describe('remove two users', () => {

    test('remove two users normally', () => {
        const testUserData = new UserData();

        const before = testUserData.getUserCount();

        testUserData.removeTwoUser();

        const after = testUserData.getUserCount();

        expect(before - after).toEqual(2);
    });

    test('remove two users until empty', () => {
        const testUserData = new UserData();

        testUserData.clearUsers();

        testUserData.addUser(new User("A","a@test.com"));
        testUserData.addUser(new User("B","b@test.com"));

        testUserData.removeTwoUser();

        expect(testUserData.getUserCount()).toEqual(0);
    });

});

describe('User class', () => {

    test('constructor sets name and email', () => {
        const user = new User("John","john@test.com");

        expect(user.name).toEqual("John");
        expect(user.email).toEqual("john@test.com");
    });

    test('set and get name', () => {
        const user = new User("A","a@test.com");

        user.setName("Mike");

        expect(user.getName()).toEqual("Mike");
    });

    test('set and get email', () => {
        const user = new User("A","a@test.com");

        user.setEmail("mike@test.com");

        expect(user.getEmail()).toEqual("mike@test.com");
    });

});