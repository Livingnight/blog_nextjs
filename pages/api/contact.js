import { MongoClient } from 'mongodb'

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { email, name, message } = req.body

		if (
			!email ||
			!email.includes('@') ||
			!name ||
			name.trim() === '' ||
			!message ||
			message.trim() === ''
		) {
			res.status(422).json({ message: 'Invalid Input' })
			return
		}

		const newMessage = {
			email,
			name,
			message,
		}

		console.log('New Message: ', newMessage)

		let client

		try {
			client = await MongoClient.connect('mongodb://localhost:27017/blog_db')
		} catch (error) {
			res.status(500).json({ message: 'Could not connect to database' })
			return
		}

		const db = client.db()

		try {
			const result = await db.coloection('messages').insertOne(newMessage)
			newMessage.id = result.insertedId
		} catch (error) {
			client.close()
		}

		res.status(201).json({
			errorMessage: 'Succesfully Stored Message!',
			message: newMessage,
		})
	}
}
