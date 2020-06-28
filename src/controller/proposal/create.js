import Proposal from './../../model/proposal/index'

export default (req, res) => {
    
    let items = new Array();
    let shaders = new Array();    
    req.body.responsible_techinician = 'RAFAEL DANIEL'; 
    
    for(let item in req.body.proposal_details_items) {          
        items.push(req.body.proposal_details_items[item])
    }        

    for(let key in req.body.amount) {
        shaders.push({
            "amount": req.body.amount[key], 
            "length": req.body.length[key], 
            "width":  req.body.width[key], 
            "height": req.body.height[key], 
            "color": req.body.color[key]
        })
    }   

    req.body.proposal_details_items = items
    req.body.proposal_shaders = shaders    

    delete req.body.items 
    delete req.body.amount 
    delete req.body.length 
    delete req.body.width
    delete req.body.height    

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