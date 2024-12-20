import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterModule, MaterialModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
