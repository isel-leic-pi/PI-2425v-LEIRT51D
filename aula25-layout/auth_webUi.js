function authUiFunction(services){
   
    function getLogin(req, resp){
        resp.render('login')
    }

    function postLogin(req, resp){
        const username = req.body.username
        const password = req.body.password

        console.log(`login  ${req.body.username}`)
        services
            .validateUser(username, password)
            .then(user => login(req,user))
            .then(()=>resp.redirect('/'))    
            .catch(()=>resp.status(401).send("Couldnt authenticate"))// TODO 
    }

    function postLogout(req, resp){
        req.logout(()=>resp.redirect('/'))
        
    }

    function login(req, user){
        console.log(user)
        return new Promise((resolve,reject) => {
            req.login(user, (error, result) =>{
                if(error) reject(error)
                else resolve(result)
            })
        })
    }

    return {
        getLogin,
        postLogin,
        postLogout
    }
}

export default authUiFunction