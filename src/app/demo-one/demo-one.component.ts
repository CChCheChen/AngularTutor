import { Component, OnInit } from '@angular/core';
import {Student} from '../../shared/student.model';

@Component({
  selector: 'app-demo-one',
  templateUrl: './demo-one.component.html',
  styleUrls: ['./demo-one.component.css']
})
export class DemoOneComponent {

  serverId = 10;
  serverStatus = 'online';
  counter = 0;
  isLogin = false;
  userName : string;
  students: Student[] = [new Student( 'Chen Lin', 'EE'),
                         new Student('Winni Xu', 'ECo'),
                         new Student('Monday LX', 'AN'),];

  getServerStatus() {
    return this.serverStatus;
  }

  counterAddOne() {
    this.counter ++;
  }

  counterReset() {
    this.counter = 0;
  }

  userLogin() {
    this.isLogin = true;
  }

  userLogout() {
    this.isLogin = false;
  }

}
