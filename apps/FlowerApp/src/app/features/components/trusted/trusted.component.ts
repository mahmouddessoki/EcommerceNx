import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-trusted',
  imports: [CommonModule, CarouselModule],
  templateUrl: './trusted.component.html',
  styleUrl: './trusted.component.scss',
})
export class TrustedComponent {

  Brands = [
    {image:'images/trusted01.png'},
    {image:'images/trusted02.png'},
    {image:'images/trusted03.png'},
    {image:'images/trusted04.png'},
    {image:'images/trusted05.png'},
    {image:'images/trusted06.png'},
  ]

    customOptionsBrands: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    autoplayTimeout: 3000,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
    0: { items: 2 },
    632: { items: 3 },
    768: { items: 5 },
  },
    nav: false
  }

}
