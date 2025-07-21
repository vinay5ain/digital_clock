const quotes = [
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "Programs must be written for people to read, and only incidentally for machines to execute. – Harold Abelson",
  "First, solve the problem. Then, write the code. – John Johnson",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler",
  "Talk is cheap. Show me the code. – Linus Torvalds",
  "The best way to get a project done faster is to start sooner. – Jim Highsmith",
  "Fix the cause, not the symptom. – Steve Maguire",
  "Before software can be reusable it first has to be usable. – Ralph Johnson",
  "Make it work, make it right, make it fast. – Kent Beck",
  "Stay hungry, stay foolish. – Steve Jobs"
];

function loadQuotes() {
  showQuote();
}

function showQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quoteBox').innerText = randomQuote;
}

// Notes
let notes = JSON.parse(localStorage.getItem('notes')) || [];

function loadNotes() {
  renderNotes();
}

function addNote() {
  const noteText = document.getElementById('noteInput').value.trim();
  if (noteText === "") {
    alert("Please enter some text to add a note.");
    return;
  }
  notes.push(noteText);
  localStorage.setItem('notes', JSON.stringify(notes));
  document.getElementById('noteInput').value = "";
  renderNotes();
}

function renderNotes() {
  const container = document.getElementById('notesContainer');
  container.innerHTML = "";
  notes.forEach((note, index) => {
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    noteDiv.innerText = note;
    const delBtn = document.createElement('button');
    delBtn.innerText = 'x';
    delBtn.onclick = () => deleteNote(index);
    noteDiv.appendChild(delBtn);
    container.appendChild(noteDiv);
  });
}

function deleteNote(index) {
  if (confirm("Delete this note?")) {
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes();
  }
}

function clearAllNotes() {
  if (confirm("Clear all notes?")) {
    notes = [];
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes();
  }
}

// Theme
function toggleDarkMode() {
  document.body.classList.toggle('dark');
}
