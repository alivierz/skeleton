const crypto = require('../utils/crypto')
const uuid = require('uuid')


const userDB = {
    1: {
        id: 1,
        name: 'Alivier',
        email: 'alivieralejandro@academlo.com',
        password: 'root',
        age: 21
    },
    2: {
        id: 2,
        name: 'Cristian',
        email: 'cristian@academlo.com',
        password: '1234',
        age: 25
    }
}

const getAllUsers = () =>{
    return userDB
}
const getUserById = (id) =>{
    return userDB[id]
}
const createUser = (body) =>{
    userDB[Object.keys(userDB).length + 1] ={
        id: Object.keys(userDB).length + 1,
        ...body
    }
    return userDB[Object.keys(userDB).length]
}
const editUser = (id, body) => {
    if(userDB[id]){
        userDB[id] = {
            id,
            ...body
        }
    }
    return userDB[id]
}
const deleteUser = (id) =>{
    delete userDB[id]
    return userDB
}
const getUserByEmail = (email) =>{
    let value = {}
    for(const coincidence in userDB){
        if(userDB[coincidence].email == email){
            value = {...userDB[coincidence]}
        }
    }
    return value
}

const registerUser = (data) => {
    const hashedPassword = crypto.hashPassword(data.password);
    const userId = uuid.v4();
    const newUser = {
        id: userId,
        ...data,
        password: hashedPassword,
        active: false,
        role: 'normal',
    };
    userDB[Object.keys(userDB).length + 1] = newUser
    return {
        message: `User created succesfully with the id: ${userId}`,
        user: newUser,
    };
};

module.exports = {
    getAllUsers,
    getUserById,
    editUser,
    createUser,
    deleteUser,
    getUserByEmail,
    registerUser
}