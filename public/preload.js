const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
    // Exponha funções específicas aqui
    readFile: (filePath) => {
        const fs = require('fs');
        return fs.readFileSync(filePath, 'utf-8');
    },
});