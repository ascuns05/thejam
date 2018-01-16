var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Posts = require('../model/schemas/posts');
var connect = require('../model/connect')(mongoose);




/* GET blog listing. */
router.get('/', function(req, res) {
  Posts.find({}).exec().then((posts)=>{
    posts = posts.reverse();
    for (let i = 0; i < posts.length; i++ ) posts[i].text=posts[i].text.substr(0,110) + '...';
    res.render('blog', { title: 'Blog', posts });
  });
});


module.exports = router;
