import express from 'express'
//  env 환경설정 파일을 작성한다.
import dotenv from 'dotenv' 
//  로그(log)를 기록한다.
import morgan from 'morgan'
import bodyParser from 'body-parser'
import path from 'path'
// CommonJS에서 사용하던 __dirname 변수가 ES 모듈에서는 없기 때문에 발생하는 에러
const __dirname = path.resolve()
// nunjucks
import nunjucks from 'nunjucks'

const app = express()

dotenv.config()
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'))
// parse request to body-parser
app.use(bodyParser.urlencoded({extended: true}))

// set view engine
app.set('view engine','nunjucks')
// app.set('views',express.static(path.resolve(__dirname,'views')))
nunjucks.configure(path.resolve(__dirname,'views'),{
    express:app,
    autoescape:true,
    noCache:false,
    watch:true
})

// load assets
app.use('/css',express.static(path.resolve(__dirname,'asset/css')))
app.use('/img',express.static(path.resolve(__dirname,'asset/img')))
app.use('/js',express.static(path.resolve(__dirname,'asset/js')))


app.get('/',(req,res)=>{
    // res.send("CRUD Application")

    res.render('index',{
        message:"FIRST Message",
        online:true,
    })
    // render(view,[locals],callback)
    // local 이란 optional parmeter로 loal variables for the view 이다.


})
app.listen(PORT,()=>{console.log(`server is running on http://localhost:${PORT}`)})