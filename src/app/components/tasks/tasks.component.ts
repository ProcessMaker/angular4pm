import { Component } from '@angular/core';
//import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
//import { UserAuth } from 'src/app/models/userAuth';
import { CommonModule } from '@angular/common';
import { Request } from 'src/app/models/request';
import { Task } from 'src/app/models/task';
import { UserService } from 'src/app/services/user/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent {
  pagination = {
    currentPage: 1,
    itemsPerPage: 10,
    lastPage: null,
    totalItems: null
  }

  selectedRequest: Request;
  selectedTask: Task;
  userTasks = [];
  color="green";

  constructor(public userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.getUserTasks()
  }; 


  async getUserTask(taskId: number): Promise<void> {
    this.selectedTask = null;
    this.userService.getUserTask(taskId).subscribe((response: Task) => {
      this.selectedTask = response;
      this.router.navigate(['form', {'data': JSON.stringify(this.selectedTask)}]);
    },
    (error) => {
      console.log(error);
    });
  }

  getUserTasks(page?: number, filter?: string, sortBy?: string, sortOrder?: string): void {
    this.userTasks = [];
     this.userService.getUserTasks(page, filter, sortBy, sortOrder).subscribe((response) => {
     this.userTasks = response['data'];
     this.pagination.currentPage = response['meta']['current_page'];
     this.pagination.lastPage = response['meta']['last_page'];
     this.pagination.totalItems = response['meta']['total'];
     },
     (error) => {
       console.error(error);
     })
  }
}