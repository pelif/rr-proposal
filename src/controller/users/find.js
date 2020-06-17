import User from './../../model/users/index'

export default (req, res) => {
    User
        .find({})
        .then((users) => {                        
            res.render('users/index', {data: users})
        })
        .catch((err) => {
            res.render('users/index', {msg: 'Não foi possível consultar usuários'})
        })
    
}