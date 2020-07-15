module.exports  = (app, passport) => { 

    app.use('/login', require('./controller/login/index')(passport));    
    app.use('/', require('./controller/home/index')(passport));
    app.use('/users', require('./controller/users/index')(passport));
    app.use('/proposal', require('./controller/proposal/index')(passport));

};