let editor;
let suggester;
let editorState;
let option;

let stateSwitch = 20;

function randomChar() {
  let possible = "abcdefghijklmnopqrstuvwxyz";
  return possible.charAt(Math.floor(Math.random() * possible.length));
}

function handleInput(e) {
  console.log(editorState);

  if (e.keyCode === 70 && editorState === "edit") {
    clearSuggester();
    option = randomChar();
    suggester.innerHTML = `<p><span class='picker'>${option}</span> <span>function</span></p>`;
  } else if (e.keyCode === stateSwitch && editorState === "edit") {
    editorState = "meta";
  } else if (e.keyCode === stateSwitch && editorState === "meta") {
    editorState = "edit";
  } else if (editorState === "meta" && e.key === option) {
    clearSuggester();

    editor.innerHTML = insertFunction();
  }

  console.log(e.keyCode);
}

window.onload = () => {
  editor = document.querySelector("#editor");
  suggester = document.querySelector("#suggester");
  editorState = "edit";
  editor.addEventListener("keydown", handleInput);
};

function clearSuggester() {
  suggester.innerHTML = "";
}

function clearEditor() {
  editor.innerHTML = "";
}

function insertFunction() {
  return `<p>function () {</p>
  <p>}</p>`;
}
