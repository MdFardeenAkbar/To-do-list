const InputBox = document.getElementById("searchbar");
const listContainer = document.getElementById("listContainer");

function addTask(){
    if(InputBox.value === ''){
        alert("you must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    InputBox.value = "";
    savedata();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

// for saving data on local storage
const savedata = () =>{
    localStorage.setItem("data",listContainer.innerHTML);
}
const showtask = () =>{
    listContainer.innerHTML = localStorage.getItem("data");
}
showtask();

// using enter key for adding
const searchbar=document.getElementById("searchbar");
searchbar.addEventListener("keydown",function onEvent(event){
    if(event.key ==='Enter'){
        document.getElementById("searchbtn").click();
    }
});
