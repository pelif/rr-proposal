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
    form_payment: {
        type: String, 
        default: 'Não especificado'
    }, 
    delivery_time: {
        type: String, 
        default: 'De 15 a 30 dias'
    },
    proposal_validity: {
        type: String, 
        default: '45 Dias'
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