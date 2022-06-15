const teamsDB = {
    1: {
        id: 1,
        user_id: 1,
        pokemons: 6,
        name: "el magnifico equipo"
    },
    2:  {
        id: 2,
        user_id: 2,
        pokemons: 5,
        name: "el senor de la noche"
    }
}

const getAllTeam = () =>{
    return teamsDB
}
const getTeamById = (id) =>{
    return teamsDB[id]
}
const createTeam = (body) =>{
    teamsDB[teamsDB[Object.keys(teamsDB).length].id + 1] = {
        id: teamsDB[Object.keys(teamsDB).length].id + 1,
        ...body
    }
    return teamsDB[Object.keys(teamsDB).length]
}
const editTeam = (idTeam, body) => {
    if(teamsDB[idTeam]){
        teamsDB[idTeam] = {
            id: teamsDB[idTeam].id,
            ...body
        }
    }
    return teamsDB[idTeam]
}

const deleteTeam = (id) =>{
    delete teamsDB[id]
    return teamsDB
}
module.exports = {
    getAllTeam,
    getTeamById,
    editTeam,
    createTeam,
    deleteTeam
}