
//all input fields must have this class so there buttons are color changed when they are in focus
let node = document.querySelectorAll(".node");
let should_pen_highlight = true;
let active_pen_button;
let active_input_field;

node.forEach(elements => {
    let input_holder = elements.querySelector(".input-holder")
    input_holder.addEventListener("focus",()=>{
        if(active_pen_button){
            active_pen_button.style.fill = "transparent"
        }
        let pen_button_holder = elements.querySelector(".pen-button-holder");
        let pen_button = pen_button_holder.querySelector(".pen-button")
        active_pen_button = pen_button;
        active_input_field = input_holder;
        active_input_field.addEventListener("input",function(){
            should_pen_highlight = false;
            active_pen_button.style.fill = "transparent";
        })
    })
});



document.addEventListener("mousemove",function(){
    should_pen_highlight = true;
    if(should_pen_highlight){
        if(active_pen_button){
            active_pen_button.style.fill = "grey";
        }
    }
})