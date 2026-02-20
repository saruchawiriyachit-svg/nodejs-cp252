const getCategories = (req, res) => {
  res.json({ categories: ['unknown'] });
};

module.exports = { getCategories };