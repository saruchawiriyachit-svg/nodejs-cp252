let tags = [];

const getTags = (req, res) => {
  tags.push(tags.length);
  res.json({ tags });
};

module.exports = { getTags };