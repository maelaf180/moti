const sidebar = document.querySelector('.main-sidebar');
function toggleSidebar() {

    document.addEventListener('mousemove',(event)=> {
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        let screenWidth = window.innerWidth;
        let leftBoundary = screenWidth * 0.2;
        if (mouseX < leftBoundary) {
            sidebar.style.left = '0';
        } else {
            sidebar.style.left = '-350px';
        }

    })
}
function lockSidebar() {
    document.addEventListener('mousemove', (event) => {
        let selectionRange = 20;
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        let sidebarRight = sidebar.getBoundingClientRect().right;
        let sidebarTop = sidebar.getBoundingClientRect().top;

        let sidebarBottom = sidebar.getBoundingClientRect().bottom;
        if (mouseX < sidebarRight + selectionRange && (mouseX > sidebarRight - selectionRange) && mouseY > sidebarTop && mouseY < sidebarBottom) {
            
            sidebar.style.borderRight = "var(--light-border-color-active) solid var(--light-border-color)";
            sidebar.style.cursor = "var(--cursor-expand)";
        } else {
            sidebar.style.borderRight = "var(--light-border-color) solid var(--light-border-size)" 
            sidebar.style.cursor = "default"
        }
    })
}
toggleSidebar();
lockSidebar();