const express = require('express');
const {join, resolve} = require('path');
const PORT = process.env.PORT || 8080;
const service = require('./service');
express()
    .use(express.static(join(resolve('..'), 'client')))
    .get('/tasks', (request, response) => {
        const tasks = service.getTasksByStatus('inProgress');
        if (tasks.length > 0) {
            res.json(tasks);
          } else {
            res.status(204).send(); 
          }
    })
    .put('/tasks', (request, response) => {
        const taskId = req.query.taskId;
        const newStatus = req.query.newStatus;

         if (!taskId || !newStatus) {
            return res.status(400).json
         }
    })
    .listen(PORT, () => console.log(`Server is running on port ${PORT}.`));

    
const tasksInProgress = service.getTasksByStatus('inProgress');
console.log('Task-urile în curs:', tasksInProgress);
    
   
service.changeTaskStatus(1, 'completed');
console.log('Starea task-ului cu ID-ul 1 a fost actualizată la "completed".');