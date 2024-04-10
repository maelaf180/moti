//all input fields must have this class so there buttons are color changed when they are in focus
let node = document.querySelectorAll(".node");
let should_pen_highlight = true;
let active_input_holder;
let active_pen_button;
let active_input_field;
let active_plus_button;

node.forEach((elements) => {
    let input_holder = elements.querySelector(".input-holder");
    input_holder.addEventListener("mouseleave", () => {
        active_input_holder = null;
        if (active_pen_button != null) {
            active_pen_button.querySelector("path").style.fill = "transparent";
            active_plus_button.querySelector("path").style.fill = "transparent";
        }
    });
    input_holder.addEventListener("mouseover", () => {
        active_input_holder = input_holder;
        if (active_pen_button) {
            active_pen_button.querySelector("path").style.fill = "transparent";
        }
        let pen_button_holder = elements.querySelector(".pen-button-holder");
        let add_button_holder = elements.querySelector(".add_btn_holder");
        let pen_button = pen_button_holder.querySelector(".movebtn");
        let plus_button = add_button_holder.querySelector(".addbtn");
        active_pen_button = pen_button;
        active_plus_button = plus_button;
        if (active_pen_button) {
            let path = active_pen_button.querySelector("path");
            path.style.fill = "white";
        }
        if (active_plus_button) {
            let path = active_plus_button.querySelector("path");
            path.style.fill = "white";
        }
        active_input_field = input_holder;
        active_input_field.addEventListener("input", function () {
            should_pen_highlight = false;
            active_pen_button.querySelector("path").style.fill = "transparent";
            active_plus_button.querySelector("path").style.fill = "transparent";
        });
    });
});

//enable the icons of the active node when its in focus and mousemoves over the screen
//currently disabled because of asthetics
// document.addEventListener("mousemove", function () {
//     should_pen_highlight = true;
//     if (should_pen_highlight) {
//     }
// });

//apply hover effect for buttons of add and move icons on the left of each node
node.forEach((element) => {
    let pen_button_holder_fh = element.querySelector(".pen-button-holder");
    let add_button_holder_fh = element.querySelector(".add_btn_holder");
    let pen_button_fh = pen_button_holder_fh.querySelector(".movebtn");
    let plus_button_fh = add_button_holder_fh.querySelector(".addbtn");
    pen_button_holder_fh.addEventListener("mouseover",function(){
        pen_button_fh.querySelector("path").style.fill = "white";
        plus_button_fh.querySelector("path").style.fill = "white";
    })
    pen_button_holder_fh.addEventListener("mouseout",function(){
        pen_button_fh.querySelector("path").style.fill = "transparent";
        plus_button_fh.querySelector("path").style.fill = "transparent";
    });
    add_button_holder_fh.addEventListener("mouseover",function(){
        pen_button_fh.querySelector("path").style.fill = "white";
        plus_button_fh.querySelector("path").style.fill = "white";
    })
    add_button_holder_fh.addEventListener("mouseout",function(){
        pen_button_fh.querySelector("path").style.fill = "transparent";
        plus_button_fh.querySelector("path").style.fill = "transparent";
    });
    pen_button_fh.addEventListener("mouseover",()=>{
        pen_button_fh.querySelector("path").style.fill = "white";
        plus_button_fh.querySelector("path").style.fill = "white";
    })
    pen_button_fh.addEventListener("mouseout",()=>{
        pen_button_fh.querySelector("path").style.fill = "transparent";
        plus_button_fh.querySelector("path").style.fill = "transparent";
    })
    plus_button_fh.addEventListener("mouseover",()=>{
        pen_button_fh.querySelector("path").style.fill = "white";
        plus_button_fh.querySelector("path").style.fill = "white";
    })
    plus_button_fh.addEventListener("mouseout",()=>{
        pen_button_fh.querySelector("path").style.fill = "transparent";
        plus_button_fh.querySelector("path").style.fill = "transparent";
    })
});
