// backend/db.js
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sahil:sahilsoni123@cluster0.8bn7b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")


const transactionSchema = new mongoose.Schema({
    oldBalance: {
        type: Number,
        required: true,
    },
    newBalance: {
        type: Number,
        required: true,
    },
    transferWithPersonName: {
        type: String,
        required: true,
    },
    transactionAmount: {
        type: Number,
        required: true,
    },
    MoneySent: {
        type: Number,
        required: true,
    },
    msgAttached: {
        type: String,
    }
}, { timestamps: true })

// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    transactions: [transactionSchema],
}, { timestamps: true });

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});



const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = {
    User,
    Account,
    Transaction,
};