const {remote, protocol, app, BrowserWindow} = require('electron')
const path = require('path')
const { fork } = require('child_process')
const ps = fork(`${__dirname}/server.js`)
var mainWindow



const {session} = require('electron')

function createWindow () {

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: true,
            preload: path.join(`${__dirname}/preload.js`)
        }
    })
    mainWindow.webContents.openDevTools()

    mainWindow.loadURL("http://localhost:3535/index.html");

    mainWindow.on('closed', function () {
        mainWindow = null
    })


    const ses = mainWindow.webContents.session;

    ses.clearCache(() => {
        alert("Cache cleared!");
    });
}

app.on('ready', () => {
    createWindow();
    session.defaultSession.webRequest.onHeadersReceived((details,callback) => {
        callback({ responseHeaders: Object.assign({
            'Content-Security-Policy': ['frame-src \'self\'','style-src \'self\' \'unsafe-inline\'','font-src \'self\'']
            //'default-src filesystem devtools: \'unsafe-inline\' \'unsafe-eval\'','script-src filesystem devtools: \'unsafe-inline\' \'unsafe-eval\'',
        }, details.responseHeaders)});
    });
});


app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
    if (mainWindow === null) createWindow()
})
