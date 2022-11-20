const mongoose=require('mongoose')

const cardModel=new mongoose.Schema({
    name:String,
    code:String,
    title:String,
    description:String,
    qualities:{
        SYMBOLIZES:[],
        EFFECTS:[],
        POSITIVE:[],
        NEGATIVE:[]
    }
})

module.exports=mongoose.model('cards_data' ,cardModel)