//hi maelaf
const { app, BrowserWindow } = require("electron");

let mainWindow;
let splash;

function createWindow() {
     // Create the main window
     mainWindow = new BrowserWindow({
          width: 800,
          height: 600,
          frame: false,
          titleBarStyle: false,
          show: false, // Don't show the main window yet
          webPreferences: {
               nodeIntegration: true, // Enable Node.js integration in the renderer process
          },
     });

     // Create the splash window
     splash = new BrowserWindow({
          width: 700,
          height: 400,
          transparent: true,
          frame: false,
          alwaysOnTop: true,
     });

     // Load your splash screen file
     splash.loadFile("splash.html");

     // Load your HTML file (replace 'index.html' with your actual file)
     mainWindow.loadFile("index.html");

     // After a minute, close the splash screen and show the main window
     setTimeout(() => {
          splash.close();
          mainWindow.show();
     }, 2000); // 60000 milliseconds = 1 minute
}

app.whenReady().then(createWindow);

// Quit when all windows are closed
app.on("window-all-closed", () => {
     if (process.platform !== "darwin") {
          app.quit();
     }
});

app.on("activate", () => {
     if (BrowserWindow.getAllWindows().length === 0) {
          createWindow();
     }
});
