const { getCurrentWindow } = require('@electron/remote');

const win = getCurrentWindow();

document.querySelector(".closewindow").addEventListener("click",()=>{
    win.close();
})

document.querySelector(".minimizewindow").addEventListener("click",()=>{
    win.minimize();
})
document.querySelector(".max").addEventListener("click",()=>{
    win.maximize();
})
win.maximize();