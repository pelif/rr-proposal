import Proposal from './../../model/proposal/index'

export default (req, res) => {
    Proposal
        .findOne({
            _id: req.params.id
        })
        .then((data) => {                        
            if(data.proposal_details_items.length >= 7) {
                var items = '';
                for(var i = 0; i < data.proposal_details_items.length; i++) {
                    items += data.proposal_details_items[i]; 
                }
                data.proposal_details_items = items;
            }            
            res.render('proposal/view', {proposal: data})
        })
        .catch((err) => {
            res.render('proposal/index', {msg: 'Não foi possível encontrar a proposta'})
        })
}