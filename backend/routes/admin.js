let express = require('express')
, router = express.Router()
, app_one = require('../app')
, mongoose = require('mongoose')
, Posts = require('../model/schemas/posts')
;


//  GET admin listing.

router.get('/createpost', (req, res) => {
  res.render('admin/createpost');
});

router.post('/createpost', (req, res) => {
  let post = new Posts(req.body);
  post.save();

  res.redirect('/admin/createpost')
});

router.get('/viewposts', (req,res) => {
  Posts.find({}).exec().then((posts)=>{
    posts = posts.reverse();
    res.render('admin/viewposts', {posts});
  });
});

router.get('/', (req,res) => {
  res.render('admin/admin');
  console.log(req.session);
});




// POST admin listing
router.post('/', function(req, res) {

  if (req.body.name === 'admin' && req.body.pass === 'admin') {
    res.render('admin/admin', { title: 'Admin' });
  } else {
    // res.render('login', { title: 'Login', err: 'Неверный пароль' });
    res.redirect('/login');
  }

});

module.exports = router;
