import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { feature } from '../features/features.component';

@Component({
  selector: 'app-feature-card',
  imports: [CommonModule],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss',
})
export class FeatureCardComponent {
  feature = input.required<feature>()
}
