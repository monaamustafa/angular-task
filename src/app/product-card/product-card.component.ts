import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/_interfac/iuser';
import { UserService } from 'src/_service/user.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('userData') user?: IUser;
  @Output() OnSelectedUser: EventEmitter<IUser> = new EventEmitter<IUser>();
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
  }
  userselected(user: IUser): void {
    this.OnSelectedUser.emit(user);
    console.log(user)
  }
  setuserdata(user: IUser) {
    this.userservice.setUserdata(user);
  }

}
