import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users:User[]=[];
constructor(private _store:Store<{users:User[]}>){
  this._store.select("users").subscribe(res=>{
    this.users=res;
  })
}

}
