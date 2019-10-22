const config = require('../config/config');
const models = require('../models');

module.exports = {
    get: {
        home: (req, res, next) => {

            models.Course.find().then((courses) => {
                
                const hbsObject = {
                    pageTitle: 'Home Page',
                    isLoggedIn: req.cookies[config.cookie] !== undefined,
                    courses
                };
    
                res.render('homePage.hbs', hbsObject);
            })
            
        }
    },
};