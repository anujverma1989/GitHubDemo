const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/mongotest", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection successful..."))
    .catch((err) => console.log(err));

//schema contains the structure of document(ie. columns and its data type)
const userlistSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    age: Number,
    isActive: Boolean,
    date: {
        type: Date, required: true, default: Date.now
    }
});
//model is for table 
const User = mongoose.model('User', userlistSchema);

const saveUser = async () => {
    try {
        var userData = new User({
            name: "test user 2",
            age: 40
        });
        const result = await userData.save();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

saveUser().then(() => { console.log("User info saved succesfully") });

