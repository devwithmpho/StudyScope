import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		subject: {
			type: String,
			required: true,
		},
		totalStudyDuration: {
			type: Number, // Time in minutes
			required: true,
		},
		totalShortBreakDuration: {
			type: Number, // Time in minutes
			default: 0,
		},
		totalLongBreakDuration: {
			type: Number, // Time in minutes
			default: 0,
		},
		pomodoroCount: {
			type: Number, // Time in minutes
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Session = mongoose.model('Session', sessionSchema);

export default Session;
