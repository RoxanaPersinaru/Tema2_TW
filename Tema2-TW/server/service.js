const {existsSync, readFileSync, writeFileSync} = require('fs');
module.exports = function(path) {
};
const dataFilePath = path.join(__dirname, 'tasks.json');

function readDataFile() {
     
        const data = fs.readFileSync(dataFilePath, 'utf-8');
        return JSON.parse(data);
     
}
    
function writeDataFile(data) {
      const dataString = JSON.stringify(data, null, 2);
      fs.writeFileSync(dataFilePath, dataString);
}
    
function getTasksByStatus(status) {
      const data = readDataFile();
      return data[status] || [];
}
    
function changeTaskStatus(taskId, newStatus) {
      const data = readDataFile();
    
     
      if (data[taskId]) {
        data[taskId].status = newStatus;
        writeDataFile(data);
      }
}
    
module.exports = {
      getTasksByStatus,
      changeTaskStatus,
};