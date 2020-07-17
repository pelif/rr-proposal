import Proposal from './../../model/proposal/index'

export default (req, res) => {
    Proposal
        .find({})
        .sort({'created_at': 'descending'})
        .then((data) => {
            let viewParams = { proposals: data }
            if(req.query.msg) {
                viewParams.message = parseInt(req.query.msg)
            }            
            res.render('proposal/index', viewParams)
        })
        .catch((err) => {
            res.render('proposal/index', { message: 3 })
        })
}