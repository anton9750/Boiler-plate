/*
formvaliderings template
HTML
   <button id="open-btn">submit</button>
    <div id="modal" class="hidden">
        <div id="modalcontent">
            <form id="form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email">
                <button id="submit" type="submit">Submit</button>
                <h1 id="close-btn">x</h1>
            </form>
        </div>
    </div>


    BRUG
    for at få dette til at virke, skal jeg have lavet en modal i html, fx den der er længere oppe
    jeg skal have en open-btn som ikke er del af modalen, og en close-btn, herefter skal jeg have lavet en form
    som skal indeholde name og email , jeg skal have defineret regex,  og huske at lave remove og add classen hidden,
    */


// KODE til validering: 

const modal = document.getElementById("modal");
const openbtn = document.getElementById("open-btn");
const closebtn = document.getElementById("close-btn");
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");

const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


openbtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});


closebtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});


form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (name.value.trim().length < 2) {
    alert("Name must be at least 2 characters long.");
    console.log("name is invalid");
    return;
  }

  if (!emailregex.test(email.value.trim())) {
    alert("Please enter a valid email address.");
    console.log("email is invalid");
    return;
  }

  alert("Form submitted successfully!");
  form.reset();
  modal.classList.add("hidden");
  console.log("name and email are valid");
});
