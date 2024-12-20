import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-users',
  imports: [MaterialModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit  {
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data: any) => {
      this.users = data;
    });
  }
}
