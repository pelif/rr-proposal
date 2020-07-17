class helperMessage {
    message(num, reference) {
        if(num == 1) {
            return `${reference} foi inserido com sucesso!`
        }
    
        if(num == 2) {
            return `Não foi possível inserir o(a) ${reference}`
        }
    
        if(num == 3) {
            return `Ocorreu um erro ao tentar inserir o(a) ${reference}`
        }
    
        if(num == 4) {
            return `Ocorreu um erro ao tentar consultar dados aqui em ${reference}`
        }
    }

    verifyObject(obj) {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
                return true
        }
        return false
    }
}

export default helperMessage