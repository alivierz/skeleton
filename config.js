require('dotenv').config()

module.exports = {
    port: process.env.PORT || 3000,
    secretWord: process.env.SECRET_WORD
}