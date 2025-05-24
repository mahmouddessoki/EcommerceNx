import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { IBestSellerRes } from '../../interfaces/best-seller/Ibest-seller';
import { BestSellerService } from '../../services/best-seller/best-seller.service';
import { TermTextPipe } from '../../pipes/termText/termText.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-best-seller',
  imports: [CommonModule, CarouselModule, TermTextPipe],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss',
})
export class BestSellerComponent implements OnInit, OnDestroy {
  //CallServices
  private readonly _bestSellerService = inject(BestSellerService)

  // Variable
  bestSellerItems: IBestSellerRes[] = []
  getAllBestSellerSub!: Subscription


  ngOnInit(): void {
    this.getAllData();
  }
  
  getAllData(): void {
    this.getAllBestSellerSub = this._bestSellerService.getAllBestSeller().subscribe({
      next: (res) => {
        console.log(res);
        this.bestSellerItems = res.bestSeller;
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }

  customOptionsBest: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    margin: 16,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
    0: { items: 1 },
    632: { items: 2 },
    768: { items: 3 },
    },
    nav: true
  }


  ngOnDestroy(): void {
    this.getAllBestSellerSub?.unsubscribe()
  }

}
