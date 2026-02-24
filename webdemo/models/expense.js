/**
 * Represents an expense record.
 * @class
 */
class Expense {

  /**
   * Create an Expense.
   * @constructor
   * @param {Date|string} date - The date of the transaction.
   * @param {number} income - The income amount.
   * @param {number} expense - The expense amount.
   * @param {string} detail - Description of the transaction.
   */
  constructor(date, income, expense, detail) {
    this.date = date;
    this.income = parseFloat(income) || 0;
    this.expense = parseFloat(expense) || 0;
    this.detail = detail || '';
  }
}

/**
 * Manages a collection of Expense objects.
 * @class
 */
class ExpenseModel {

  /**
   * Create ExpenseModel.
   * @constructor
   */
  constructor() {
    /** @type {Expense[]} */
    this.expenses = [];
  }

  /**
   * Add an expense object to the list.
   * @param {Expense} expense - Expense object to add.
   * @returns {void}
   */
  add(expense) {
    this.expenses.push(expense);
  }

  /**
   * Get all expenses.
   * @returns {Expense[]} Array of expense objects.
   */
  getAll() {
    return this.expenses;
  }

  /**
   * Calculate total income.
   * @returns {number} Total income amount.
   */
  getTotalIncome() {
    return this.expenses.reduce((sum, exp) => sum + exp.income, 0);
  }

  /**
   * Calculate total expense.
   * @returns {number} Total expense amount.
   */
  getTotalExpense() {
    return this.expenses.reduce((sum, exp) => sum + exp.expense, 0);
  }

  /**
   * Calculate remaining money.
   * @returns {number} Remaining balance.
   */
  getMoneyLeft() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
}

module.exports = { Expense, ExpenseModel };