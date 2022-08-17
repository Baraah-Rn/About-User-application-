import { v4 as uuidv4 } from 'uuid';

const
    Users = []

export const readUsers = (req, res) => {
    res.send(Users)
}

export const createUser = (req, res) => {
    if (invalidReq(req)) {
        res.status(400);
        res.send('invalid request, some data are missing');
        return;
    };
    const userId = uuidv4()
    let newUser = {
        id: userId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    };
    Users.push(newUser);
    res.status(200);
    res.send(`The user with ${newUser.firstName} has been created successfully.
    The User ID is ${newUser.id}`);
}

export const readUsersById = (req, res) => {
    const { id } = req.params;
    const foundUser = Users.find(user => user.id === id);

    if (!foundUser) {
        res.status(404);
        res.send(`there is no user with this id : ${id}`);
        return;
    }
    res.send(foundUser)
};

export const updateUserById = (req, res) => {
    const { id } = req.params;
    const userToUpdate = Users.find(user => user.id === id);
    const { firstName, lastName, age } = req.body

    if (!userToUpdate) {
        res.status(404);
        res.send(`Update failed, there is no user with this id : ${id}`);
        return;
    };
    if (firstName) {
        userToUpdate.firstName = firstName
    };
    if (lastName) {
        userToUpdate.lastName = lastName
    }
    if (age) {
        userToUpdate.age = age
    }

    res.status(200)
    res.send(`The user with id: ${id} has been updated`)

};

export const deleteUserById = (req, res) => {
    const { id } = req.params;
    const deleteUser = Users.find(user => user.id === id);

    if (!deleteUser) {
        res.status(404);
        res.send(`Delete failed, there is no user with this id : ${id}`);
        return;
    };
    Users.splice(Users.indexOf(deleteUser), 1);
    res.status(200)
    res.send(`The user with id: ${id} has been deleted`)

};


function invalidReq(req) {
    if (typeof req.body == "undefined" || typeof req.body.firstName == "undefined" || typeof req.body.lastName == 'undefined' || typeof req.body.age == 'undefined') {
        return true
    } else {
        return false
    }
}


