export default (req, res) => {
    let paramsView = '';
    if(req.query.msg) {
        paramsView = 'Não foi possível efetuar login! Verifique se o nome de usuário ou a senha estão corretos!'; 
    }
    return res.render('login/form', {msg: paramsView})
}