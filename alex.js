let toggleHide = (elementToToggle) =>{
    currDisplay = elementToToggle.style.display;
  if (currDisplay !== "none") {
    elementToToggle.style.display = "none";
  }else{
    elementToToggle.style.display = "block";
  }
}


let me = document.querySelector("#content");
let getin = document.querySelector("#aboutme");
let abtme = document.querySelector("#aboutmecontent");

getin.addEventListener('click', function (){
  toggleHide(abtme);
});
