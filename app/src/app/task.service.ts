import { Injectable } from '@angular/core';
import { title } from 'process';
import { ApiConfigService } from './api-config.service';
import TaskModel from './models/taskModel';

@Injectable({
    providedIn:'root'
})
export class TaskService {
   
    constructor(private apiConfigService:ApiConfigService) {   }

    //to fetch all task List
    getAllTaskLists(){
      return   this.apiConfigService.get('tasklists')
    }

    //create a tasklist bucket
    createTaskList(title:string){
        let data = {
            'title':title
        }
        return  this.apiConfigService.post('tasklists', data)
    }

    //To Fetch all task inside a task List object
    getAllTasksForATasklists(taskListid: string){
       return this.apiConfigService.get(`tasklists/${taskListid}/tasks`);
    }

    //create a task inside a particular task list
    createTaskInsideATaskList(taskListid:string, title:string){
        return this.apiConfigService.post(`tasklists/${taskListid}/tasks`,{ title})
    }

    //delete a Task list
    deleteTaskList(taskListid:string){
       return this.apiConfigService.get(`tasklists/${taskListid}`);
    }

    //delete a task inside a particular task list
    deleteATaskInsideATaskList(taskListid:string, taskid:string){
       return this.apiConfigService.get(`tasklists/${taskListid}/task/${taskid}`);
    }

    //Update the status of task 
    updateTaskStatus(taskListid:string, taskobject: TaskModel) {
        let updateData = { 'completed': !taskobject.completed}
        return this.apiConfigService.patch(`tasklists/${taskListid}/task/${taskobject._id}`, updateData)
    }
}