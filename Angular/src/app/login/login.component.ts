import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  formModel={
    UserName: '',
    Password: ''
  }

  constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(){

  }

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res:any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Incorrect username or password', 'Authentication failed.');
        else
          this.toastr.error('Please contact your administrator', 'Authentication failed.');
          console.log(err);
      }
    )
  }

}
