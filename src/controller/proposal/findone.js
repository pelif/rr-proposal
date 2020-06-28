import Proposal from './../../model/proposal/index'

export default (req, res) => {
    Proposal
        .findOne({
            _id: req.params.id
        })
        .then((data) => {            
            res.render('proposal/view', {proposal: data})
        })
        .catch((err) => {
            res.render('proposal/index', {msg: 'Não foi possível encontrar a proposta'})
        })
}