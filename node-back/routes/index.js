var router = require('express').Router()
var userData = require('../tables/userData')
var path = require('path')
var userData = require('../tables/userData')
var Op = require('sequelize').Op


router.get('/', (req, res) => {
    res.render('index')
})

router.post('/addUser', (req, res) => {
    console.log(req.body);
    userData.create(req.body).then((obj) => {
        res.send(obj)
    }).catch(e => console.error(e))
})

router.post('/find', (req, res) => {
    data = req.body

    userData.findAll({
        where: {
            emailId: {
                [Op.substring]: data.email
            }
        }
    })
        .then(obj => {
            res.send(obj)
        }).catch(e => console.error(e))

})

router.delete('/delete', (req,res)=>{
    userData.Destroy({
        where: {
            emailId: req.body.email
        }
    }).then(obj=>{
        res.send(obj)
    }).catch(err=>console.error(err))
})

module.exports = router