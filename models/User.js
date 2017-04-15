import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/test');

let Schema=mongoose.Schema;

let userSchema=new Schema({
	name: String,
	email: String,
	username: String,
	password: String
});

export default mongoose.model('User', userSchema);