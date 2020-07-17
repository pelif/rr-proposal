import User from './../../model/users/index'

export default (req, res) => {
    let user = new User(req.body)
    user.hashPassword(user.password, (err, encryptPassword) => {
        user.password = encryptPassword
        
        user
            .save()
            .then((created) => {
                if(!created) {
                    if(res.status(404)) {
                        return res.redirect('/users?msg=2')
                    }    
                }    

                if(res.status(201)) {                    
                    return res.redirect('/users?msg=1')
                }
                
            })
            .catch((err) => {                 
                 return res.redirect('/users?msg=3')
            })   

            
    })
}