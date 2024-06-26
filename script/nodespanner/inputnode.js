import { presets } from "../rules/presets.js";

function checklastnode(node, parentnode) {
    let everyelement = parentnode.querySelectorAll("div");
    let lastelement;
    Array.from(everyelement).forEach((element) => {
        if (
            element.getBoundingClientRect().top <
            node.getBoundingClientRect().top
        ) {
            lastelement = element;
        }
    });
    return lastelement;
}
export class inputNode {
    constructor() {
        this.classname = "";
        this.text = "";
        this.type = "";
        this.index = 0;
        let node = document.createElement("div");
        this.element = node;
        this.next = null;
        this.prev = null;
        this.inputfield;
        this.inputfieldholder;
    }
    initUi() {
        let self = this;
        self.element.classList.add(this.classname);
        self.element.classList.add("node");
        let add_btn_holder = document.createElement("button");
        add_btn_holder.classList.add("add_btn_holder");
        add_btn_holder.innerHTML = `<svg
                                        class="addbtn"
                                        width="200"
                                        height="200"
                                        viewBox="0 0 200 200"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M200 100C200 103.183 198.736 106.235 196.485 108.485C194.235 110.736 191.183 112 188 112H112V188C112 191.183 110.736 194.235 108.485 196.485C106.235 198.736 103.183 200 100 200C96.8174 200 93.7652 198.736 91.5147 196.485C89.2643 194.235 88 191.183 88 188V112H12C8.8174 112 5.76516 110.736 3.51472 108.485C1.26428 106.235 0 103.183 0 100C0 96.8174 1.26428 93.7652 3.51472 91.5147C5.76516 89.2643 8.8174 88 12 88H88V12C88 8.8174 89.2643 5.76516 91.5147 3.51472C93.7652 1.26428 96.8174 0 100 0C103.183 0 106.235 1.26428 108.485 3.51472C110.736 5.76516 112 8.8174 112 12V88H188C191.183 88 194.235 89.2643 196.485 91.5147C198.736 93.7652 200 96.8174 200 100Z"
                                    />
                                    </svg>`;
        self.element.appendChild(add_btn_holder);
        let pen_button_holder = document.createElement("button");
        pen_button_holder.classList.add("pen-button-holder");
        pen_button_holder.innerHTML = `
                                        <svg
                                        class="movebtn"
                                        width="227"
                                        height="221"
                                        viewBox="0 0 227 221"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                            <path
                                                d="M85.125 36.8333C90.1421 36.8333 94.9536 38.7736 98.5011 42.2274C102.049 45.6812 104.042 50.3656 104.042 55.25C104.042 60.1344 102.049 64.8187 98.5011 68.2725C94.9536 71.7263 90.1421 73.6666 85.125 73.6666C80.108 73.6666 75.2965 71.7263 71.7489 68.2725C68.2014 64.8187 66.2084 60.1344 66.2084 55.25C66.2084 50.3656 68.2014 45.6812 71.7489 42.2274C75.2965 38.7736 80.108 36.8333 85.125 36.8333ZM104.042 110.5C104.042 105.616 102.049 100.931 98.5011 97.4774C94.9536 94.0236 90.1421 92.0833 85.125 92.0833C80.108 92.0833 75.2965 94.0236 71.7489 97.4774C68.2014 100.931 66.2084 105.616 66.2084 110.5C66.2084 115.384 68.2014 120.069 71.7489 123.523C75.2965 126.976 80.108 128.917 85.125 128.917C90.1421 128.917 94.9536 126.976 98.5011 123.523C102.049 120.069 104.042 115.384 104.042 110.5ZM104.042 165.75C104.042 160.866 102.049 156.181 98.5011 152.727C94.9536 149.274 90.1421 147.333 85.125 147.333C80.108 147.333 75.2965 149.274 71.7489 152.727C68.2014 156.181 66.2084 160.866 66.2084 165.75C66.2084 170.634 68.2014 175.319 71.7489 178.773C75.2965 182.226 80.108 184.167 85.125 184.167C90.1421 184.167 94.9536 182.226 98.5011 178.773C102.049 175.319 104.042 170.634 104.042 165.75ZM160.792 110.5C160.792 105.616 158.799 100.931 155.251 97.4774C151.704 94.0236 146.892 92.0833 141.875 92.0833C136.858 92.0833 132.047 94.0236 128.499 97.4774C124.951 100.931 122.958 105.616 122.958 110.5C122.958 115.384 124.951 120.069 128.499 123.523C132.047 126.976 136.858 128.917 141.875 128.917C146.892 128.917 151.704 126.976 155.251 123.523C158.799 120.069 160.792 115.384 160.792 110.5ZM141.875 147.333C146.892 147.333 151.704 149.274 155.251 152.727C158.799 156.181 160.792 160.866 160.792 165.75C160.792 170.634 158.799 175.319 155.251 178.773C151.704 182.226 146.892 184.167 141.875 184.167C136.858 184.167 132.047 182.226 128.499 178.773C124.951 175.319 122.958 170.634 122.958 165.75C122.958 160.866 124.951 156.181 128.499 152.727C132.047 149.274 136.858 147.333 141.875 147.333ZM160.792 55.25C160.792 50.3656 158.799 45.6812 155.251 42.2274C151.704 38.7736 146.892 36.8333 141.875 36.8333C136.858 36.8333 132.047 38.7736 128.499 42.2274C124.951 45.6812 122.958 50.3656 122.958 55.25C122.958 60.1344 124.951 64.8187 128.499 68.2725C132.047 71.7263 136.858 73.6666 141.875 73.6666C146.892 73.6666 151.704 71.7263 155.251 68.2725C158.799 64.8187 160.792 60.1344 160.792 55.25Z"
                                            />
                                        </svg>`;
        let lpn;
        function move(e) {
            self.element.style.position = "absolute";
            self.element.style.top = e.pageY + "px";
            lpn = checklastnode(self.element, self.element.parentNode);
        }
        pen_button_holder.addEventListener("mousedown", (e) => {
            e.preventDefault();
            document.addEventListener("mousemove", move);
            document.addEventListener("mouseup", (e) => {
                document.removeEventListener("mousemove", move);
                let parentelement = document.querySelector(".main-note");
                console.log("lpn: " + lpn);
                console.log("parentelement: " + parentelement);
                console.log("element: " + self.element);
                parentelement.removeChild(self.element);
                lpn.style.background = "white";
                parentelement.insertBefore(self.element, lpn);
            });
        });
        self.element.appendChild(pen_button_holder);
        let input_holder = document.createElement("div");
        self.inputfield = input_holder;
        input_holder.contentEditable = true;
        input_holder.classList.add("input-holder");
        this.inputfieldholder = input_holder;
        input_holder.addEventListener("focus", () => {
            input_holder.classList.add("input-holder-focus");
        });
        input_holder.addEventListener("blur", () => {
            input_holder.classList.remove("input-holder-focus");
        });
        input_holder.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                // Clear the input holder
                self.next.inputfield.focus();
            } else if (e.key === "Backspace") {
                if (self.inputfield.textContent === "") {
                    e.preventDefault();
                    let span = document.createElement("span");
                    span.classList.add("input-holder-text");
                    span.setAttribute("placeholder", "gay");
                    self.inputfield.appendChild(span);
                    self.inputfield.blur();
                    self.prev.inputfield.focus();

                    // Move cursor to the end
                    let range = document.createRange();
                    let sel = window.getSelection();
                    range.setStart(
                        self.prev.inputfield,
                        self.prev.inputfield.childNodes.length
                    );
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            }
        });
        let input_holder_text = document.createElement("span");
        input_holder_text.classList.add("input-holder-text");
        input_holder_text.setAttribute("placeholder", "gay");
        input_holder.appendChild(input_holder_text);
        self.element.appendChild(input_holder);
    }
}
