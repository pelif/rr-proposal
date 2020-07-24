import Proposal from './../../model/proposal/index'

export default (req, res) => {
    let filter = parseInt(req.body.filter);

    if(filter == 0) {
        res.render('/proposal'); 
    }

    if(filter == 1) {
        const userRegex = new RegExp(req.body.value)
        var param = { client: userRegex }         
    }

    if(filter == 2) {
        var param = { document: req.body.value } 
    }

    Proposal
        .find(param)
        .then((data) => {
            res.render('proposal/index', {proposals: data})
        })
        .catch((err) => {
            res.render('proposal/index', {message: 6})
        })
}