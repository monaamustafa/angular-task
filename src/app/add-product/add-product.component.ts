import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/_service/user.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private userservic: UserService,private router: Router) { }

  ngOnInit(): void {
  }
  myform = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    rating: new FormGroup({
      rate: new FormControl(),
      count: new FormControl(),
    })
  })
  get title() {
    return this.myform.get('title') as FormControl
  }
  get description() {
    return this.myform.get('description') as FormControl
  }
  get category() {
    return this.myform.get('category') as FormControl
  }
  get price() {
    return this.myform.get('price') as FormControl
  }
  get image() {
    return this.myform.get('image') as FormControl
  }
  get rate() {
    return this.myform.get('rating.rate') as FormControl
  }
  get count() {
    return this.myform.get('rating.count') as FormControl
  }
  adduser(user: any) {
    this.userservic.addProductdata(user)
    this.goToVotes()
   // console.log(user)
  }
  goToVotes($myParam: string = ''): void {
    const navigationDetails: string[] = ['/productlist'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }

}
