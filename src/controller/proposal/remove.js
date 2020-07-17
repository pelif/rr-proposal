import Proposal from './../../model/proposal/index'

export default (req, res) => {
    Proposal 
        .findByIdAndRemove({_id: req.params.id})  
        .then((proposal) => {
            res.redirect('/proposal?msg=4')
        })
        .catch((err) => {
            res.redirect('/proposal?msg=5')
        })
}