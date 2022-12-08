import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TasksService, ProcessRequestsService } from 'api';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
request: any;
exists;
processRequestId;
taskId;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public requestApi: ProcessRequestsService,
    public tasksApi: TasksService,
    private db: DbService
  ) { 
    //this.request = JSON.parse(this.route.snapshot.paramMap.get('data'));
  }
  ngOnInit() {
    this.processRequestId = JSON.parse(this.route.snapshot.paramMap.get('processRequestId'));
    this.taskId = JSON.parse(this.route.snapshot.paramMap.get('taskId'));
    this.tasksApi.configuration.credentials['pm_api_bearer'] = this.db.load('access_token');
      this.tasksApi.getTasksById(this.taskId,'processRequest,user,data,screen,definition,screenRef')
      .subscribe((response)=> {
        this.request = response;
      },
    (error) => {
      console.log(error);
    });
  }
  submitForm(data){
    let formData = {
      data: data,
      status: 'COMPLETED'
    }
    console.log(data);
    this.tasksApi.configuration.credentials['pm_api_bearer'] = this.db.load('access_token');
    this.tasksApi.updateTask(this.taskId,formData)
    .subscribe((response) => {
      if(response.status == 'CLOSED'){
        this.router.navigateByUrl('tasks');
      }
    },
    (error) => {
      console.log(error);
    });
  }
}
