const { app, BrowserWindow, dialog, Tray } = require('electron')

function createWin() {
    const win = new BrowserWindow({
        width: 900,
        height: 600,
        backgroundColor: "#8f77e9",
    });
    // const child = new BrowserWindow({parent:win})

    // child.loadFile('page1.html')
    // child.show()
    win.loadFile('index.html')
    // win.webContents.openDevTools();
    // globalShortcut.register('Shift+K', () => {    // import globalShortcut
    //         dialog.showOpenDialog({
    //             defaultPath:app.getPath('desktop'),
    //             buttonLabel:'Select File'
    //         })
    // })


    const tray = new Tray('embed.png')
    tray.setToolTip('Electron Tool')
    // tray.on('click', () => {
    //     win.isVisible()?win.hide():win.show()
    // })
    let template = [{label: 'item1'},{label: 'item2'}]
    const contextMenu = Menu.buildFromTemplate(template);
    tray.setContextMenu(contextMenu)
}
// app.whenReady().then(createWin)  

// app.on('before-quit', (e) => {
//     console.log('This will be closed')
//     e.preventDefault()
// } )
// app.on('will-quit', (e) => {
//     console.log('This will be closed')
//     e.preventDefault()
// } )


app.on('browser-window-focus', () => {
    console.log('You are on this Window')
})
app.on('browser-window-blur', () => {
    console.log('You are outside of this Window')
})
app.on('ready', () => {
    createWin();
    console.log("The s/w started successfully")
})