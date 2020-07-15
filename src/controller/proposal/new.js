import Proposal from './../../model/proposal/index'

export default (req, res) => {
    
    Proposal
        .findOne({}, [], { sort: {'created_at': -1} }, function(err, prop) {
            let lastNumber = parseInt(prop.proposal_number)             
            lastNumber++            
            res.render('proposal/new', {proposalNumber: lastNumber})    
        });        
}