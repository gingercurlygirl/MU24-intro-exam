const myInput = document.getElementById("myInput");
const myUL = document.getElementById("myUL");
function newElement() {
    if(myInput.value === ''){
        alert("You must write something!");

    }
    else {
        let li = document.createElement("li");
        li.innerHTML = '<input type="checkbox"> <label>' + myInput.value + '</label>';
        myUL.appendChild(li);
    
    }
    myInput.value = "";
    saveData()

}

myUL.addEventListener("click", function(e){
    if(e.target.tagName === "INPUT"){
        e.target.toggleAttribute("checked");
        saveData();
    }
})


function saveData(){
    localStorage.setItem("data", myUL.innerHTML);
}

function showList(){
    let data = localStorage.getItem("data");
    if (data) {
        myUL.innerHTML = data;
    }
}

showList(); 