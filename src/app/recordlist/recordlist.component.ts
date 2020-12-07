import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-recordlist',
  templateUrl: './recordlist.component.html',
  styleUrls: ['./recordlist.component.css']
})
export class RecordlistComponent implements OnInit {
  users: Observable<any>;
  user: any;
  loaded: any;
  editMode = true;
  firstname: any;
  lastname: any;

  constructor(private userService: UserService, private router: Router) { }


  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.userService.getUserList().subscribe((users) => {
      this.user = users;
      this.loaded = true;
      console.log(this.user);
    });
    this.users = this.userService.getUserList();
  }
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }
  
  updateUser(id: number) {
    this.router.navigate(['add_edit', id]);
  }
}

