const panels = document.querySelectorAll(".panel");
panels.forEach(parameter => {
    parameter.addEventListener("click", () => {
        //Get the panel that was clicked
        removeActiveClasses();
        parameter.classList.add("active");
    })
})

function removeActiveClasses(){
    panels.forEach(parameter => {
        parameter.classList.remove("active");
    })
}