import Proposal from './../../model/proposal/index'

export default (req, res) => {
    Proposal
        .find({})
        .sort({'created_at': 'descending'})
        .then((data) => {
            res.render('proposal/index', { proposals: data})
        })
        .catch((err) => {
            res.render('proposal/index', { msg: 'Não foi possível encontrar propostas!' })
        })
}