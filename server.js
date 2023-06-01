var express = require('express');
var bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (request, response) {
    response.send('WELCOME')
})

app.get('/admin_login', function (req, res) {
    res.render('admin/admin_login')
})

app.get('/admin_home', function (req, res) {
    res.render('admin/admin_home')
})

app.get('/post_doctor_details', (req, res)=>{
    res.render('admin/post_doctor_details');
})

app.get('/post_treatment_details', (req, res)=>{
    res.render('admin/post_treatment_details');
})

app.get('/view_payment_details', (req, res)=>{
    res.render('admin/view_payment_details');
})

app.get('/user_login', function (req, res) {
    res.render('user/user_login')
})

app.get('/user_home', function (req, res) {
    res.render('user/user_home')
})

app.get('/update_profile', function (req, res) {
    res.render('user/update_profile')
})

app.get('/update_password', function (req, res) {
    res.render('user/update_password')
})

app.listen(4444, ()=> {
    console.log('serving at port 4444')
})