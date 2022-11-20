require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const {registerCards, getCards ,validateTitle ,cardFilter,updateCard}=require(__dirname+"/Controllers/cardControllers")

const app=express()
const Port=process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.DATA_BASE ,{useNewUrlParser:true})
.then(()=>console.log("database connected"),(error)=>console.log(error))

app.post('/api/card/colors' ,registerCards)
app.put('/api/card/save' ,updateCard)
app.get('/api/card/fetch' , getCards)
app.get('/api/validatetitle' ,validateTitle )
app.get('/api/filter' ,cardFilter)



app.listen( Port,()=>console.log(`Server running on ${Port}`))