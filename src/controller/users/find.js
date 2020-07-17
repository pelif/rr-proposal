import User from './../../model/users/index'

export default (req, res) => {    
    
    let viewParams = {}; 
    
    if(req.query.msg) {                
        let num = parseInt(req.query.msg)        
        viewParams.message = num;        
    }
    
    User
        .find({})
        .then((users) => {      
            viewParams.data = users;
            res.render('users/index', viewParams)
        })
        .catch((err) => {
            res.render('users/index', viewParams)
        })
    
}