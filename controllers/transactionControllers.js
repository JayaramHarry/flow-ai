const Transaction = require('../models/Transaction');

// Add a new transaction
exports.addTransaction = async (req, res) => {
    const { type, category, amount, date, description } = req.body;
    try {
        const transaction = new Transaction({ type, category, amount, date, description });
        await transaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all transactions
exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a transaction by ID
exports.getTransactionById = async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a transaction by ID
exports.updateTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
        res.status(200).json(transaction);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a transaction by ID
exports.deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);
        if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get summary of transactions
exports.getSummary = async (req, res) => {
    try {
        const transactions = await Transaction.find();
        const totalIncome = transactions
            .filter(t => t.type === 'income')
            .reduce((acc, curr) => acc + curr.amount, 0);
        const totalExpense = transactions
            .filter(t => t.type === 'expense')
            .reduce((acc, curr) => acc + curr.amount, 0);
        const balance = totalIncome - totalExpense;

        res.status(200).json({ totalIncome, totalExpense, balance });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
