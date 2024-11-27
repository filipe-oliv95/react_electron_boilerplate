const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

const isDev = !app.isPackaged;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
        },
    });

    if (isDev) {
        mainWindow.loadURL('http://localhost:3000');
        mainWindow.webContents.openDevTools(); // Abre DevTools no desenvolvimento
    } else {
        mainWindow.loadFile(path.join(__dirname, 'index.html'));
    }

    // Adicione este listener para debug
    mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
        console.error(`Erro ao carregar o arquivo: ${errorDescription} (código: ${errorCode})`);
    });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// Listener para erros no processo principal
process.on('uncaughtException', (error) => {
    console.error('Erro no processo principal:', error);
});

// Listener para quando o processo de renderização falha
app.on('render-process-gone', (event, webContents, details) => {
    console.error('Render process crashed:', details);
});