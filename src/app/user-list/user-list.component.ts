import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 popup = false;
 name!: string;
 age!: string;
 gender!: any;
 updateIndex!: number;
 crudOperation!: string;
 radioOption!: boolean;
  
 users = [
    {  Name: 'Anna', Age: '20',   Gender:'Female' },
    {  Name: 'Maxi',  Age: '29',   Gender:'Female' },
    {  Name: 'Johnye',  Age: '22',  Gender:'Male' }
    
];

//clear inputs if contain any data
clearData() {
  this.name = '';
  this.age = '';
  this.gender = '';
  this.crudOperation = 'add';
}


//add User Funciton
addUser(){
  const newData= { Name: this.name , Age: this.age, Gender: this.gender}
  this.users.push(newData);
}
//edit user function
  
  edit(value:any, index: any): void{
  this.name = value.Name;
  this.age = value.Age;
  this.gender = value.Gender;
  console.log(this.gender);
  this.updateIndex = index;
  this.crudOperation = 'update';
}
 
remove(value: any): void{
    for(let i = 0; i < this.users.length; i++) {
      if(this.users[i].Name === value){
        this.users.splice(i, 1);
      }
    }
  }
  //when user click on save button
  updateData(){
      this.users[this.updateIndex].Name = this.name;
      this.users[this.updateIndex].Age = this.age;
      this.users[this.updateIndex].Gender = this.gender;
      console.log(this.gender);
     
  }
  ngOnInit() {
    localStorage.setItem('flag', '1');
  }
}
