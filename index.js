const { app, BrowserWindow } = require('electron')

const path = require('node:path')
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'views/test/preload.js')
      },
      titleBarStyle: 'hidden',
      titleBarOverlay: {
        color: '#2f3241',
        symbolColor: '#74b1be',
        height: 20
      }
    })
  
    win.loadFile('views/test/index.html')
  }

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})