const inputBox = document.querySelector('#input-box');
const ul = document.querySelector('.list-container');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  if (inputBox.value === "") {
    alert("You must write something");
  }
  else {
    //---------------create li list for show data-----------
    let li = document.createElement('li');
    li.innerText = inputBox.value;
    ul.appendChild(li);

    //------------create span ---------------
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = " ";
})
ul.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle("checked");
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
}, false)