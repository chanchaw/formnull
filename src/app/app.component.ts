import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loginForm:FormGroup;

  @ViewChild("userid",{static:false})
  private userid_er:ElementRef

  private userid$ = new Subject();

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    this.initLoginForm();// 初始化登录表单
  }

  initLoginForm(){
    this.loginForm = this.fb.group({
      userid:[null,Validators.required],
      userName:[{value:null,disabled:true},Validators.required],
      password:[null,Validators.required]
    });

  }


  // 登录
  login(){
    this.log('表单数据是：');
    console.log(this.loginForm.value);
    
    const userId:string = this.loginForm.controls.userid.value;
    const pw:string = this.loginForm.controls.password.value
    console.log('即将发送给服务的两个参数依次是：' + userId + ',' + pw);

  }



  log(content:string){
    console.log(content);
  }
}
