import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gift } from '../specialGifts/specialGifts.component';
import { ButtonComponent } from "../../../../shared/components/ui/button/button.component";

@Component({
  selector: 'app-gift-card',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './gift-card.component.html',
  styleUrl: './gift-card.component.scss',
})
export class GiftCardComponent {

  gift = input.required<gift>()
}
