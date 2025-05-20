import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from "./components/features/features.component";
import { SpecialGiftsComponent } from "./components/specialGifts/specialGifts.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, FeaturesComponent, SpecialGiftsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
