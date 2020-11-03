import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class photoService {
    constructor(private httpClient: HttpClient) {}

    getPhotos(): Observable<any> {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/photos');
    }
}