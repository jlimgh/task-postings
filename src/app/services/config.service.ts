import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ConfigService {

    BASE_URL = 'http://localhost:5200';
    HEADER = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };


}