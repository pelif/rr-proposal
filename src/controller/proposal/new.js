import Proposal from './../../model/proposal/index'

export default (req, res) => {
    
    Proposal
        .findOne({}, [], { sort: {'created_at': -1} }, function(err, prop) {
            
            let lastNumber = 1000;; 
            if(prop !== null) {
                lastNumber = parseInt(prop.proposal_number)        
            }            
            
            lastNumber++            
            let viewParams = { proposalNumber: lastNumber }
            if(req.query.msg) {
                viewParams.message = parseInt(req.query.msg)
            }
            console.log(viewParams)
            res.render('proposal/new', viewParams)    
        });        
}