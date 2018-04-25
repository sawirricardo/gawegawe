var input = document.getElementById('input');
var list = document.getElementById('list');
var button = document.getElementById('enter');

input.focus();

function createLists() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    list.appendChild(li);
    input.value = "";
    input.focus(); 
}

button.addEventListener('click', function () {
    if (input.value.length > 0) {
        createLists();
    } else {
        alert('cie gak ada gawean ya?');
        input.focus();
    }
})

input.addEventListener('keypress', function (e) {
    if (input.value.length > 0 && e.keyCode === 13) {
        createLists();
    }
})
