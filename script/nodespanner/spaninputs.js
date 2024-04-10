import { inputNode } from "./inputnode.js";


let node_container = document.querySelector(".main-note");
let typing_note_count = 10;
let prev = null;
let next = null;

for(let i = 0; i < typing_note_count; i++){
    let newinputnode = new inputNode();
    if(i == 0){
        newinputnode.classname = "input-header-node"
    }else{
        newinputnode.classname = "input-node"
    }
    newinputnode.prev = prev;
    newinputnode.index = i;
    newinputnode.initUi();
    if (prev) {
        prev.next = newinputnode;
    }
    if(i == 0){
        newinputnode.inputfield.textContent = "Untitled"
    }
    newinputnode.inputfield.setAttribute("data-placeholder","start typing")

    prev = newinputnode;
    node_container.appendChild(newinputnode.element);
}

// Set next value for the last inputNode to null
if (prev) {
    prev.next = null;
}