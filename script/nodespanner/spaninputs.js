import { inputNode } from "./inputnode.js";


let node_container = document.querySelector(".main-note");
let typing_note_count = 10;
let prev = null;
let next = null;

for(let i = 0; i < typing_note_count; i++){
    let newinputnode = new inputNode();
    newinputnode.prev = prev;
    newinputnode.index = i;
    newinputnode.initUi();
    if (prev) {
        prev.next = newinputnode;
    }
    prev = newinputnode;
    node_container.appendChild(newinputnode.element);
}

// Set next value for the last inputNode to null
if (prev) {
    prev.next = null;
}