import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import TaskListModel from './models/taskListModel';
import TaskModel from './models/taskModel'
@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  API_BASE_URL='http://localhost:3000'
  constructor(private httpClient: HttpClient) { }

  
  //get API call to Backend
  get(url : string){
    return this.httpClient.get(`${this.API_BASE_URL}/${url}`)  //http://localhost:3000/tasklists
  }
  

  post(url:string, data:Object){
    return this.httpClient.post(`${this.API_BASE_URL}/${url}`,data)  //http://localhost:3000/tasklists
  }

  put(url:string, data:Object){
    return this.httpClient.put(`${this.API_BASE_URL}/${url}`,data)
  }

  patch(url:string, data:Object){
    return this.httpClient.patch(`${this.API_BASE_URL}/${url}`,data)
  }

  delete(url:string){
    return this.httpClient.delete(`${this.API_BASE_URL}/${url}`)
  }
  
}
