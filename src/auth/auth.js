const config = require('../../config')


const JwtStrategy = require("passport-jwt").Strategy,
        ExtractJwt = require("passport-jwt").ExtractJwt;

module.exports = (passport) => {
    const opts = {
        //* aui le especificamos que esquema vamos a utilizar en este caso jwt
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey: config.secretWord //? debe estar en una variable de entorno
    };  //* aqui estamos usando la configuracion para la palabra secreta
    passport.use(
        new JwtStrategy(opts, (decoded, done) => {
            //console.log("decoded jwt", decoded);
            return done(null, decoded); //? decoded sera el que retornaremos cuando se ejecute exitosamente la autenticacion
        })
    );
};