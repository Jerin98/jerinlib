const express = require('express');

const app =  express();
const port = process.env.PORT || 5000;
// const bodyParser = require('body-parser');
// const { check, validationResult } = require('express-validator');
const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
      link:'/admin',name:'Add book'
    },
    {
      link:'/admins',name:'Add Author'
    },
    {
      link:'/updatebook',name:'Update book'
    },
    {
      link:'/updateauthor',name:'Update author'
    },
    {
      link:'/signup',name:'Signup'
    },
    {
      link:'/login',name:'Login'
    }
   
];
// const urlencodedParser = bodyParser.urlencoded({ extended: false });
// // Navigation
// app.get('', (req, res)=> {
//   res.render('index')
// })

// app.get('/register', (req, res)=> {
//   res.render('register')
// })

// app.post('/register', urlencodedParser, [
//   check('username', 'This username must me 3+ characters long')
//       .exists()
//       .isLength({ min: 3 }),
//   check('email', 'Email is not valid')
//       .isEmail()
//       .normalizeEmail()
// ], (req, res)=> {
//   const errors = validationResult(req)
//   if(!errors.isEmpty()) {
//       // return res.status(422).jsonp(errors.array())
//       const alert = errors.array()
//       res.render('register', {
//           alert
//       })
//   }
// })
 const booksRouter = require('./src/routes/bookRoutes')(nav);
 const adminRouter =require('./src/routes/adminRoutes')(nav);
const adminsRouter = require('./src/routes/adminsRoutes')(nav);
// const newbooksRouter=require('./src/routes/newbookRouter')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
// const newauthorRouter=require('./src/routes/newauthorRouter')(nav);
const updatebookRouter=require('./src/routes/updatebookroutes')(nav);
const updateauthorRouter=require('./src/routes/updateauthorroutes')(nav);
const loginRouter=require('./src/routes/loginRoutes')(nav);
 const signupRouter=require('./src/routes/signupRoutes')(nav);
// app.use(express.static('./public'));
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');

app.set('views', './src/views');
 app.use('/books',booksRouter);
 app.use('/admin',adminRouter);

app.use('/authors',authorsRouter);
app.use('/admins',adminsRouter);

// app.use('/newauthor',newauthorRouter);
app.use('/login',loginRouter);
 app.use('/signup',signupRouter);
 app.use('/updatebook',updatebookRouter);
 app.use('/updateauthor',updateauthorRouter);
// app.use('/newbook',newbooksRouter);
app.get('/',function(req,res){
    res.render("index",
    {
         nav,
         title:'Library'
    });
    });
app.listen(port,()=>{console.log("server ready at" + port)});