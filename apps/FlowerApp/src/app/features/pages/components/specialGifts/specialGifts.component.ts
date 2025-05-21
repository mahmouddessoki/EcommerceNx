import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftCardComponent } from "../gift-card/gift-card.component";
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
export interface gift {
  title:string,
  name : string ,
  btnLabel : string,
}
export interface carouselItem {
  title:string,
  name : string ,
  desc:string,
  btnLabel : string,
  img:string
}
@Component({
  selector: 'app-special-gifts',
  imports: [CommonModule, GiftCardComponent,CarouselModule, ButtonModule, TagModule],
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
  bannerItems:carouselItem[] = [
    {
      title:"Best Gift Shop",
      name:"Choose Perfect Gifts From Us",
      btnLabel:"shop now",
      desc:`Culpa ducimus nesciunt aliquam
       non rerum esse recusandae omnis.
        Rerum optio dolores et.`,
        img:"/images/gifts/gift4.jpg"
    },
    {
      title:"Best Gift Shop",
      name:"Choose Perfect Gifts From Us",
      btnLabel:"shop now",
      desc:`Culpa ducimus nesciunt aliquam
       non rerum esse recusandae omnis.
        Rerum optio dolores et.`,
        img:"/images/gifts/gift4.jpg"
    },
    {
      title:"Best Gift Shop",
      name:"Choose Perfect Gifts From Us",
      btnLabel:"shop now",
      desc:`Culpa ducimus nesciunt aliquam
       non rerum esse recusandae omnis.
        Rerum optio dolores et.`,
        img:"/images/gifts/gift4.jpg"
    },
    {
      title:"Best Gift Shop",
      name:"Choose Perfect Gifts From Us",
      btnLabel:"shop now",
      desc:`Culpa ducimus nesciunt aliquam
       non rerum esse recusandae omnis.
        Rerum optio dolores et.`,
        img:"/images/gifts/gift4.jpg"
    },
  ]
}
