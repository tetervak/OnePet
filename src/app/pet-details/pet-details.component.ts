import { Component } from '@angular/core';
import {PetDataService} from "../pet-data.service";
import {Pet} from "../pet";

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css'
})
export class PetDetailsComponent {

  pet: Pet | undefined;

  constructor(service: PetDataService) {

    service.getPetById(2).subscribe({
      next: pet => this.pet = pet
    }
    )

  }

  protected readonly PetDataService = PetDataService;
}
