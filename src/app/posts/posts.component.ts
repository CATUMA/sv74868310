import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MaterialModule } from '../angular-material/material/material.module';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-posts',
  imports: [MaterialModule, FormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{
  displayedColumns: string[] = ['id', 'title', 'body']; 
  dataSource = new MatTableDataSource<any>(); 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data: any) => {
      this.dataSource.data = data; 
    });
  }
}
