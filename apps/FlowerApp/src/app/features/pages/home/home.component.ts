import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from "./components/features/features.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, FeaturesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
