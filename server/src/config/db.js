import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectToDB = async () => {
	try {
		mongoose.connect(process.env.MONGODB_URI);
	} catch (error) {
		console.log(`There was an error connecting to the server: ${error}`);
	}
};

export default connectToDB;
