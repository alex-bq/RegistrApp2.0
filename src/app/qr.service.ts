import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrService {
  constructor(private http: HttpClient) { }

  generateQrCode(data: string): Observable<any> {
    const url = `https://api.qrserver.com/v1/create-qr-code/?data=${data}&size=500x500&format=png`;
    return this.http.get(url, { responseType: 'blob' });
  }
}