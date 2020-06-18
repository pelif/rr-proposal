import Proposal from './../../model/proposal/index'

export default (req, res) => {
       
    let proposal = {}; 
    proposal.items = new Array();
    proposal.shaders = new Array();
    proposal.number = req.body.number; 
    req.body.responsible_techinician = 'RAFAEL DANIEL'; 
    
    for(let item in req.body.items) {          
        proposal.items.push([{description: req.body.items[item]}])
    }    

    for(let key in req.body.amount) {
        proposal.shaders.push([
            { amount: req.body.amount[key] }, 
            { length: req.body.length[key] }, 
            { width: req.body.width[key] }, 
            { height: req.body.height[key] }
        ])
    }   

    req.body.proposal = proposal

    delete req.body.items 
    delete req.body.amount 
    delete req.body.length 
    delete req.body.width
    delete req.body.height
    delete req.body.number

    let proposalModel = new Proposal(req.body)

    proposalModel
        .save()
        .then((created) => {
            if(!created) {
                if(res.status(404)) {
                    return res.redirect('/proposal/new')
                }
            }

            if(res.status(201)) {
                return res.redirect('/proposal')
            }
        })
        .catch((err) => {
            console.log(err)
            // return res.redirect('/proposal')
        })
}