import mongoose from "mongoose";




const connect = async () => {

    await mongoose.connect('mongodb://localhost:27017/cube', { useNewUrlParser: true, useUnifiedTopology: true })
    console.log("Mongodb Connect");

}



export default connect