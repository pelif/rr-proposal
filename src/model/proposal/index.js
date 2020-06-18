import mongoose from 'mongoose'

const proposalData = new mongoose.Schema({
    number: {
        type: String, 
        required: true
    }, 
    items: [{
        description: {
            type: String, 
            required: true
        }
    }], 
    shaders: [{
        length: {
            type: Number, 
            required: true
        }, 
        width: {
            type: Number, 
            required: true
        }, 
        height: {
            type: Number, 
            required: true
        }, 
        amount: {
            type: Number, 
            required: true
        }
    }]
})

const Proposal = new mongoose.Schema({
    client: {
        type: String, 
        required: true
    }, 
    document: {
        type: String        
    },
    address: {
        type: String, 
        required: true
    }, 
    city: {
        type: String, 
        required: true
    }, 
    contact: {
        type: String        
    }, 
    email: {
        type: String        
    }, 
    phone: {
        type: String, 
        required: true
    }, 
    responsible_techinician: {
        type: String, 
        required: true
    }, 
    proposal: proposalData   
})

export default mongoose.model('Proposal', Proposal)