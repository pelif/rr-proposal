import mongoose from 'mongoose'

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
    state: {
        type: String, 
        required: true
    },
    contact: {
        type: String        
    }, 
    email: {
        type: String, 
        default: null        
    }, 
    phone: {
        type: String, 
        required: true
    }, 
    phone2: {
        type: String, 
        default: null
    },
    responsible_techinician: {
        type: String, 
        required: true
    }, 
    value: {
        type: Number, 
        required: true
    }, 
    proposal_number: {
        type: String, 
        required: true
    }, 
    proposal_details_items: [{
        type: String
    }], 
    proposal_shaders: [], 
    created_at: {
        type: Date, 
        default: Date.now
    }
})

export default mongoose.model('Proposal', Proposal)