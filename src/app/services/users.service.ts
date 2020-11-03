import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable ({
    providedIn: 'root'
})

export class userService {
    constructor ( private httpClient : HttpClient ) {}
    
    getUsers(): Observable<any> {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    }

    getPost(): Observable<any> {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
    }

}
