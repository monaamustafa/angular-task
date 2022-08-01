import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/_interfac/iuser';
import { UserService } from 'src/_service/user.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  alluser: IUser[] = [];
  userdata?: IUser;
  filterText = '';
  constructor(private userservic: UserService) { }

  ngOnInit(): void {
    this.alluser = this.userservic.getAllUser()
  }
  getSelecteduser(user: IUser) {
    this.userdata = user;
  }
}
