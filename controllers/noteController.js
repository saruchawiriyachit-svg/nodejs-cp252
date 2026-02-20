let notes = [];
let nextId = 1;   // 👈 ตัวนับ id จริง ๆ

const getNotes = (req, res) => {
  res.render('index', { notes });
};

const addNote = (req, res) => {
  const { title, content } = req.body;

  notes.push({
    id: nextId++,   // 👈 เพิ่มเลขอัตโนมัติ
    title,
    content,
    tags: [],
    category: 'unknown'
  });

  res.redirect('/');
};

const editNote = (req, res) => {
  const id = parseInt(req.params.id);
  const note = notes.find(note => note.id === id);
  res.render('edit', { note });
};

const updateNote = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  const note = notes.find(note => note.id === id);

  if (note) {
    note.title = title;
    note.content = content;
  }

  res.redirect('/');
};

const deleteNote = (req, res) => {
  const id = parseInt(req.params.id);
  notes = notes.filter(note => note.id !== id);
  res.redirect('/');
};

module.exports = {
  getNotes,
  addNote,
  editNote,
  updateNote,
  deleteNote,
};