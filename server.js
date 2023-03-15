import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();
app.use(express.json());
app.use(cookieParser())
const port = 3000;

app.get('/login/:name',(req,res)=>{
  let {name} = req.params
  res.cookie('user',name)
  res.status(200).send('Login')
})

app.get('/hello',(req,res)=>{
  console.log('Found cookies:', req.cookies)
  req.cookies.user ? res.status(200).send(`Welcome ${req.cookies.user}!`) :
  res.send('invalid user')
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))