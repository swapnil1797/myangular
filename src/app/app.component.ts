import { Component } from '@angular/core';
import { UsersService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users : any[] = [];
 
  constructor(private userservice : UsersService,){}

  ngOnInit(){
    this.getUsers();
    this.addUser();
    this.editUser(5);
    this.deleteUser(5);
  }

  getUsers(){
    this.userservice.getUsers().subscribe(res => {
      this.users = res;
      console.log("users", this.users);
    })
  }

  addUser(){
    const userdata = {
      name : 'Swapnil',
      email : 'swapnil.vitco@gmail.com'
    }
    this.userservice.createrUser(userdata).subscribe(res =>{
      console.log("user created", res);
    })

  }

  editUser(id : number) {
    this.userservice.editUser(id).subscribe(res => {
      console.log("edit user" , res);
    })
  }

  deleteUser(id : number){
    this.userservice.userDelete(id).subscribe(res =>{
      console.log("delete user", res)
    })
  }



}
