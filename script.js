const hamburgerButton = document.querySelector('.toggle-nav-btn');
const toggleMenu = document.querySelector('.menu');

const aLi = document.querySelectorAll('li');

let changeBodyBackgroundColor = (e) => {
  toggleMenu.classList.remove('open');
  document.body.className = '';
  document.body.classList.add(e.target.className);
};

for (let li of aLi) {
  li.addEventListener('click', (e) => {
    changeBodyBackgroundColor(e);
  });
}

hamburgerButton.addEventListener('click', (e) => {
  toggleMenu.classList.toggle('open');
});

// Zo zou het ook eventueel nog kunnen:
// Toggle (Hide/Show) an Element
// Step 1) Add HTML:
// Example
// <button onclick="myFunction()">Click Me</button>

// <div id="myDIV">
//   This is my DIV element.
// </div>
// Step 2) Add JavaScript:
// Example
// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
