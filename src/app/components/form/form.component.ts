import { Component, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
//import { UserAuth } from 'src/app/models/userAuth';
import { Request } from 'src/app/models/request';
import { Task } from 'src/app/models/task';
import { UserService } from 'src/app/services/user/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
request;
exists;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public userServce: UserService
  ) { 
    this.request = JSON.parse(this.route.snapshot.paramMap.get('data'));
    if(typeof(this.request) == 'undefined'){
      this.exists = false;
    }else{
      this.exists = true;
    }
    console.log(this.exists);
  }
}
