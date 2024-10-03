const myInput = document.getElementById("myInput");
const myUL = document.getElementById("myUL");
function newElement() {
    if (myInput.value === '') {
        alert("You must write something!");

    }
    else {
        let li = document.createElement("li");
        li.innerHTML = '<input type="checkbox"> <label>' + myInput.value + '</label><span>\u00d7</span>';
        myUL.appendChild(li);
        saveData()
    }
    myInput.value = "";

}

myUL.addEventListener("click", function (e) {
    if (e.target.tagName === "INPUT") {
        e.target.toggleAttribute("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
})


function saveData() {
    localStorage.setItem("data", myUL.innerHTML);
}

function showList() {
    let data = localStorage.getItem("data");
    if (data) {
        myUL.innerHTML = data;
    }
}

showList();

const items = document.querySelectorAll('#myUL li');
const searchButton = document.getElementById("searchButton");
const searchText = document.getElementById("searchText");
const myULcopy = document.getElementById("myULcopy");
searchButton.addEventListener('click', function (e) {
    myULcopy.innerHTML = "";
    const searchData = searchText.value;
    if (searchData == "") {
        myUL.classList.remove("hidden");
        return;
    }

    myUL.classList.add("hidden")
    let foundAnItem = false;
    items.forEach(row => {
        const itemText = row.querySelector('label').innerText;
        if (itemText.includes(searchData)) {
            myULcopy.appendChild(row.cloneNode(true));
            foundAnItem = true;
        }
    });
});
