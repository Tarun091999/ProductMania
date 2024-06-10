const {app , BrowserWindow} = require("electron");
const url = require("url");

let window;

const createWindow=()=>{
    setTimeout(()=>{
        window= new BrowserWindow({
            width:800,
            height:800,
            title:"Product Mania"
        })
        window.loadURL(url.format(
            {
                pathname:"localhost:4200",
                protocol:"http",
                slashes:true
            }
        ))
    }, 10000)

}

app.whenReady().then(()=>{
    createWindow();

    app.on("activate", ()=>{
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
          }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })