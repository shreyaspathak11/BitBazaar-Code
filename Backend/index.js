const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const User = require('./models/user.model')
const Member = require('./models/newsletter.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')


dotenv.config()
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors(
	  {
	origin: 'https://bitcoin-backend.vercel.app/',
	methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
	credentials: true,
  }
));

app.get('/', (req, res) => {
	res.send('Hello to BitBazaar API')
})

const CONNECTION_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));



//Register API
app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

const jwtSecret = process.env.JWT_SECRET

//verify token middleware
const verifyToken = (req, res, next) => {
	const token = req.headers['x-access-token']

	if (!token) {
		return res.json({ status: 'error', error: 'Token missing' })
	}

	try {
		const decoded = jwt.verify(token, jwtSecret)
		req.user = decoded
	} catch (err) {
		return res.json({ status: 'error', error: 'Invalid token' })
	}

	return next()
}

//get user api

app.get('/api/user', verifyToken, (req, res) => {
	return res.json({ status: 'ok You are Authenticated', data: req.user })
})

//login API

app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			jwtSecret,
			{ expiresIn: '1h'}
		)

		return res.json({ auth: true, status: 'ok', user: token })
	} else {
		return res.json({ auth: false, status: 'error', user: false, message: 'Invalid login details' })
	}
})


//logout API
app.get('/api/logout', function (req, res) {
	res.json({ auth: false, token: null })
})








//Newsletter API
app.post('/api/newsletter', async (req, res) => {
	console.log(req.body)
	try {
		const newMember = await Member.create({
			email: req.body.email,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
}
)

