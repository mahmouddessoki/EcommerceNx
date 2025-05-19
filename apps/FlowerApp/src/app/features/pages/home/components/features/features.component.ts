import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface feature {
  icon : string ,
  name : string ,
  label : string
}
@Component({
  selector: 'app-features',
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {

  features : feature[] = [
    {
      icon : 'pi pi-truck',
      name : 'free delivery',
      label : 'Orders Over $120'
    },
    {
      icon : 'pi pi-sync',
      name : 'Get Refund',
      label : 'Within 30 Days Returns'
    },
    {
      icon : 'pi pi-wallet',
      name : 'Safe Payment',
      label : '100% Secure Payment'
    },
    {
      icon : 'pi pi-headphones',
      name : '24/7 Support',
      label : 'Feel Free To Call Us'
    }
  ]



}
