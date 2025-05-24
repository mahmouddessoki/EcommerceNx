import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../core/environments/environment';
import { Observable } from 'rxjs';
import { IBestSellerData } from '../../interfaces/best-seller/Ibest-seller';

@Injectable({
  providedIn: 'root'
})
export class BestSellerService {

  constructor(private _httpClient: HttpClient) { }

  getAllBestSeller(): Observable<IBestSellerData> {
    return this._httpClient.get<IBestSellerData>(`${environment.baseUrl}best-seller`)
  }
}