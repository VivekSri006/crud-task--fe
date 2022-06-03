import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';

@Injectable({
    providedIn:'root'
})
export class TaskService {
   
    constructor(private apiConfigService:ApiConfigService) {   }

    getAllTaskLists(){
      
    }
}