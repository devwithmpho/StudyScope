import Session from '../models/sessionsModel.js';

export const getAllSessions = async (_, res) => {
	try {
		const sessions = await Session.find();

		res.status(200).json({
			success: true,
			message: 'Got all sessions.',
			sessions: sessions,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Server failed to get all sessions.',
			error: error,
		});
	}
};

export const createSession = async (req, res) => {
	try {
		const {
			userId,
			subject,
			totalStudyDuration,
			totalShortBreakDuration,
			totalLongBreakDuration,
			pomodoroCount,
		} = req.body;

		const createdAt = Date.now();

		const newSession = new Session({
			userId,
			subject,
			totalStudyDuration,
			totalShortBreakDuration,
			totalLongBreakDuration,
			pomodoroCount,
			createdAt,
		});

		await newSession.save();

		res.status(201).json({
			success: true,
			message: 'created new session.',
			session: newSession,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Server failed to get create session.',
			error: error,
		});
	}
};

export const updateSession = async (req, res) => {
	try {
		const sessionId = req.params.id;

		const subject = req.body.subject;

		const session = await Session.findByIdAndUpdate(
			sessionId,
			{ subject: subject },
			{
				new: true,
			}
		);

		if (!session) {
			return res.status(201).json({
				success: false,
				message: 'Session does not exist.',
			});
		}

		res.status(200).json({
			success: true,
			message: 'Session updated.',
			session: session,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Server failed to update session.',
			error: error,
		});
	}
};
