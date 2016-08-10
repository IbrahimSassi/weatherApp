import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Weather} from '../weather';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherService {
    private weatherApiUrl:string= "http://api.openweathermap.org/data/2.5/weather?appid=4550c72b6c4d9bb5be8fb396f2f0fc1c&q=";
    
    constructor(private _http:Http) {}
    
    getWeatherUrl(city:string) {
        return this.weatherApiUrl + city;
    }

    
   getWeather(city:string) {
        return new Observable(observable => {
            this._http.get(this.getWeatherUrl(city))
            .map(res => res.json())
            .subscribe(res => {
                    if (res.cod == "404") {
                        observable.error(res.message);
                    } else {
                        var weather:Weather = res.weather[0];
                        weather.city = city;
                        observable.next(weather);
                    }
            }); 
        });
    } 
}