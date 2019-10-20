


var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('config.json');

router.get('/', function (req, res) {
    res.render('register');
});
router.post('/', function (req, res) {
   
    // register using api to maintain clean separation between layers
    request.post({
        url: config.apiUrl + '/users/register',
        form: req.body,
        json: true
    }, function (error, response, body) {
        if (error) {
            return res.render('register', { error: 'An error occurred' });
        }

        if (response.statusCode !== 200) {
            return res.render('register', {
                error: response.body,
                Nome: req.body.Email,
                CPF: req.body.CPF,
                Telefone: req.body.Telefone,
                Endereco: req.body.Endereco,
                Data_Nascimento: req.body.dataNasc,
                Senha: req.body.Senha,
                SexoMasc: req.body.SexoMasc,
                SexoFem: req.body.SexoFem,
                Imagem: req.body.Imagem
            });
        }

        // return to login page with success message
        req.session.success = 'Registration successful';
        return res.redirect('/login');
    });
});
       
    
module.exports = router;
    
        
       
         
           
         
