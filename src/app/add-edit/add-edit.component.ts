import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  user: User = new User();
  submitted = false;
  id: number;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = new User();

    this.id = this.route.snapshot.params['id'];
    if (this.id != 0) {
      this.userService.getUser(this.id).subscribe(
        (data) => {
          console.log(data);
          this.user = data;
        },
        (error) => console.log(error)
      );
    }
  }

  gOnInit(): void {}

  updateUser() {
    this.userService.updateUser(this.id, this.user).subscribe(
      (data) => {
        console.log(data);
        this.user = new User();
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userService.addUser(this.user).subscribe(
      (data) => {
        console.log(data);
        this.user = new User();
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
  gotoList() {
    this.router.navigate(['/recordlist']);
  }
}
