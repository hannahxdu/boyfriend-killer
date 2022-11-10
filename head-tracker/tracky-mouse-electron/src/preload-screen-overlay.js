const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
	onChangeDwellClicking: (callback) => ipcRenderer.on('change-dwell-clicking', callback),
	onMouseMove: (callback) => ipcRenderer.on('move-mouse', callback),
	mouseClick: (x, y) => ipcRenderer.send('click', x, y, performance.now()),
});
