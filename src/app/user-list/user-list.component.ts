import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  headers = ["id", "Name", "Age", "Gender"];
  users = [
    { id:'1', Name: 'Anna', Age: '20',   Gender:'Female' },
    { id:'2', Name: 'Maxi',  Age: '29',   Gender:'Female' },
    { id:'3', Name: 'John',  Age: '22',  Gender:'Male' }
    
];
  show: boolean = false;
  value: any;
  id: any;
  item: any;

  constructor() { }
  //create Function
  // create(item: any) {
  //   this.users.push({
  //     id: Date.now(),
  //     Name: item,
  //     done: false,
  //     date: new Date()
  //   });
  // }
  // delete function
  remove(msg: any) {
    const index: number = this.users.indexOf(msg);
    if (index !== -1) {
       this.users.splice(index, 1);
    }
 }
  // edit function
  edit(id: any): void {
    this.show = true;
    this.id = id;
  }

  ngOnInit(): void {
  }
}
