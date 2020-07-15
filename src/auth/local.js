import LocalStrategy from 'passport-local'
import User from './../model/users/index'

module.exports = (passport) => {

    passport.serializeUser((user, callback) => {
        return callback(null, user._id)
    })

    passport.deserializeUser((id, callback) => {
        User.findById(id)
            .then(user => callback(null, user))
            .catch(err => callback(err, {}))
    })

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'username', 
        passwordField: 'password', 
        passReqToCallback: true
    }, (req, username, password, callback) => {
        User.findOne({username: username})
            .then((userExist) => {
                if(userExist) {
                    let user = new User(req.body)
                    user.password = user.hashPassword(user.password)

                    return user.save()
                               .then((user) => {
                                   return callback(null, user)
                               })
                               .catch((error) => {
                                   console.log(error)
                                   return
                               })
                }
                return callback(null, false)
            })
            .catch((err) => {
                return callback(err, false)
            })            
    }))

    //Lógica do Login
    passport.use('local-signin', new LocalStrategy({
        usernameField: 'username', 
        passwordField: 'password', 
        passReqToCallback: true
    }, (req, username, password, callback) => {
        User.findOne({username})
            .then((user) => {
                if(!user) {
                    return callback(null, false)
                }

                user.validatePassword(password, (err, result) => {
                    if(err) {
                        console.log(`Error Found => ${err}`)
                        return callback(null, false)
                    }
                    if(!result) {
                        console.log(`Debug Result var => ${result}`)
                        return callback(null, false)
                    }
                    console.log(`Log in of user => ${user}`)
                    return callback(null, user)
                })
            })
            .catch((error) => {
                console.log(`Error Except => ${error}`)
                return
            })
    }))
}