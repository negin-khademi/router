import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { IUser } from '../interface/app.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  selectedId: number;
  selectedUser: IUser | undefined;
  isUserFound: boolean = true;
  users: IUser[] = [
    {
      id: 1,
      name: 'Negin'
    },
    {
      id: 2,
      name: 'Nasim'
    },
    {
      id: 3,
      name: 'Narsis'
    },
  ];
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedId = +this.router.snapshot.params['id'];
    this.selectedUser = this.users.find(user => user.id === this.selectedId )
    console.log(this.selectedUser);
    if (!this.selectedUser) {
      this.isUserFound = false
    }




  }

}
