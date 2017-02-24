var users = require('./../controllers/BEuserController')

module.exports = function(app){
  app.post('/createuser', function(req,res){
    users.create(req, res)
  })
  app.get('/checkuser', function(req,res){
    console.log(req.body)
    users.checkuser(req,res)
  })
  app.get("/logout", function(req,res){
    users.logout(req, res)
  })
}
