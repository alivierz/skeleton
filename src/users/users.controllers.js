const userDB = {
    1: {
        id: 1,
        name: 'Alivier',
        email: 'ajandro@academlo.com',
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
module.exports = {
    getAllUsers,
    getUserById,
    editUser,
    createUser,
    deleteUser,
    getUserByEmail
}