const { app, BrowserWindow, webContents, download, webviewTag,ipcMain } = require('electron');
const contextMenu = require('electron-context-menu');
//hello
contextMenu()

app.on('web-contents-created', (_, contents) => {
  // Check for a webview
  if (contents.getType() === 'webview') {
    contextMenu({
      labels: {
        undo: 'undo Text',
        cut: 'Cut Text',
        copy: 'Copy Text',
        paste: 'Paste',
        save: 'Save Image as' ,
        saveImageAs: 'Save Image As…',
        copyLink: 'Copy Link address',
        saveLinkAs: 'Save Link As…',
        inspect: 'Inspect Element'
      },
      prepend: (defaultActions, parameters, browserWindow) => [
        {
          label: 'Arxstd',
        },
        {
          label: 'back”',
          click: () => {
           console.log("clicked back")
          }
        },
        {
          label: 'Forward',
        },
        {
          label: 'Reload',
        },
        {
          type: 'separator'
        },
        {
          type: 'separator'
        },
        {
          type: 'separator'
        },
        {
          type: 'separator'
        }
      ],
      append: () => { },
      showCopyImageAddress: true,
      showSaveImageAs: true,
      showInspectElement: true,
      showSaveLinkAs: true,
      cut: true,
      copy: true,
      paste: true,
      save: true,
      undo: true,
      saveImageAs: true,
      copyLink: true,
      saveLinkAs: true,
      inspect: true,
      window: {
        webContents: contents,
        inspectElement: contents.inspectElement.bind(contents),

      }
    })
  }
})

const dispose = contextMenu();

dispose();


function createWindow() {
  // Erstelle das Browser-Fenster.
  let win = new BrowserWindow({
    frame:false,
    darkTheme:false,
    center: true,
    fullscreen:false,
    transparent:true,
    width:1200,
    zoomToPageWidth:75,
    height:870,
    webPreferences: {
      webviewTag: true, 
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true, 
}
  })

  // and load the index.html of the app.
  win.loadFile('src/index.html')
}

app.on('ready', createWindow)

// app.on('web-contents-created', function (webContentsCreatedEvent, contents) {
//   if (contents.getType() === 'webview') {
//      console.log(contents.isLoading())
//   }
  
// });


//open settings window 
ipcMain.on("open-settings-window", function(event){
  let settingsWindow = new BrowserWindow({ width: 800, height: 720 , frame:false})
  settingsWindow.on('close', () => { settingsWindow = null })
  settingsWindow.loadFile('src/settings/index.html')
  settingsWindow.show()
})
