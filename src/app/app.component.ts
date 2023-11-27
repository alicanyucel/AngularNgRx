import { Component } from '@angular/core';
import { User } from './user.model';
import { Store } from '@ngrx/store';
import { addUser } from './users.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User = new User();
  title = 'AngularNgRx';
  constructor(
    private _store: Store<{ users: User[] }>
  ) { }
  add() {
    this._store.dispatch(addUser({ user: this.user }));
    this.user = new User();
  }
}
