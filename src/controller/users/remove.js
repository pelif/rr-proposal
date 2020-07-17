import User from './../../model/users/index'

export default (req, res) => {
    User
        .findOneAndRemove({_id: req.params.id})
        .then((user) => {
            res.redirect('/users?msg=5'); 
        })
        .catch((err) => {
            res.redirect('/users?msg=6'); 
        })        
}