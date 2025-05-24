import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestSellerComponent } from "../../components/best-seller/best-seller.component";
import { TrustedComponent } from "../../components/trusted/trusted.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, BestSellerComponent, TrustedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
