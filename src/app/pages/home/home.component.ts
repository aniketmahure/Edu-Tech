import { Component } from '@angular/core';
import { comments } from '../../model/comments';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    // Swal.fire({
    //   text: "Register Now & Get 5% additional Discount",
    // });
  }
  public comments = {
    id: "",
    comment: "",
    flag: false
  };
  list: comments[] = [];
  login(){
    // this.comments.id = 'abc';
    // this.comments.comment = 'this is good website'
    this.comments.flag = true;
    console.log(this.comments );
    
  }
}
