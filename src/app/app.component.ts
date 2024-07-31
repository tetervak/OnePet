import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PetDetailsComponent} from "./pet-details/pet-details.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PetDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OnePet';
}
