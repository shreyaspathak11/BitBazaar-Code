const mongoose = require('mongoose')

const Member = new mongoose.Schema(
	{
		email: { type: String, required: true, unique: true },
	},
	{ collection: 'member-data' }
)

const model = mongoose.model('MemberData', Member)

module.exports = model