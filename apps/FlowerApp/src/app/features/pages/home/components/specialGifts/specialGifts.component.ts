import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftCardComponent } from "../gift-card/gift-card.component";
export interface gift {
  title:string,
  name : string ,
  btnLabel : string,
}
@Component({
  selector: 'app-special-gifts',
  imports: [CommonModule, GiftCardComponent],
  templateUrl: './specialGifts.component.html',
  styleUrl: './specialGifts.component.scss',
})
export class SpecialGiftsComponent {

  gifts:gift[] = [
    {
      title: 'Gifts Box',
      name: 'Awesome Gifts Box Collections',
      btnLabel: 'shop Now',

    },
    {
      title: 'Occasion Gifts',
      name: 'Best Occasion Gifts Collections',
      btnLabel: 'Discover Now'
    },
    {
      title: 'Occasion Gifts',
      name: 'Combo Sets Gift Box Up To 50% Off',
      btnLabel: 'Discover Now'
    },
  ]
}
