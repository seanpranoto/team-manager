const mongoose=require ("mongoose");

mongoose.connect("mongodb://localhost/players", {
    useUnifiedTopology:true, 
    useNewUrlParser:true,
    useFindAndModify:true
})
.then(res=>console.log("Established connection to the database"))
.catch(err=>console.log(`There was an error when connecting to the database. ${err}`));