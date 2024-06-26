const sidebar = document.querySelector('.main-sidebar');
function toggleSidebar() {

    document.addEventListener('mousemove', (event) => {
        let sidebarWidth = sidebar.getBoundingClientRect().width;
        let sidebarTop = sidebar.getBoundingClientRect().top;
        let sidebarBottom = sidebar.getBoundingClientRect().bottom;
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        let screenWidth = window.innerWidth;
        let leftBoundary = screenWidth * 0.07;
        
        console.log(sidebarTop)

        if (mouseX < leftBoundary && mouseY > sidebarTop  && mouseY < sidebarBottom) {
            sidebar.style.left = '0';
     } else if(mouseX >=sidebarWidth + 15 || mouseY < sidebarTop || mouseY > sidebarBottom) {
          sidebar.style.left = '-350px';
     }

    })
}
function lockSidebar() {
    document.addEventListener('mousemove', (event) => {
        let selectionRange = 10;
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        let sidebarRight = sidebar.getBoundingClientRect().right;
        let sidebarTop = sidebar.getBoundingClientRect().top;

        let sidebarBottom = sidebar.getBoundingClientRect().bottom;
        if (mouseX < sidebarRight + selectionRange && (mouseX > sidebarRight - selectionRange) && mouseY > sidebarTop && mouseY < sidebarBottom) {
            sidebar.style.borderRight = "var(--light-border-color-active) solid var(--light-border-size)";
            document.documentElement.style.setProperty('--cursor-expand', 'ew-resize');
        } else {
            sidebar.style.borderRight = "var(--light-border-color) solid var(--light-border-size)" 
            document.documentElement.style.setProperty('--cursor-expand', 'default');

        }
    })
}
toggleSidebar();
lockSidebar();