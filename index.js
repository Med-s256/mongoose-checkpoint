const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MONGO_URL', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
})
.then(()=>console.log('database connected !'))
.catch((e)=>console.log('failed !' + e));
const { Schema }= mongoose;
const personSchema = new Schema({
    name : String,
    age : {type: Number, min: 10, max: 70},
    favoriteFoods : [String]
});
const Person = mongoose.model('Person', personSchema );
const mohammed = new Person({
    name : 'Mohammed 1',
    age : 35,
    favoriteFoods : ['couscous', 'pizza', 'jus de fruit']
});
mohammed.save()
.then(doc=>{
    console.log(doc)
})
.catch(err=>{
    console.error(err)
});