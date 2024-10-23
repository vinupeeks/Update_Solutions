const mongoose=require('mongoose')

const mobileDeatilsSchema=new mongoose.Schema({
    model_name:{
        type:String,
        require:true,
        
    },
    company_name:{
        type:String,
        require:true,
        
    },
    mobile_img:{
        type:String,
    }
})

const Mobile_Details= mongoose.model("Mobile Deatils ",mobileDeatilsSchema)

module.exports=Mobile_Details