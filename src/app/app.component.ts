import { Component } from '@angular/core';
import { Weather } from './weather';
import { WeatherService } from './services/weatherService';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  providers : [WeatherService],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  weather:Weather;
  public city:string;
  public cities:Array<string>;
  public weatherOfCities:Array<Weather>;
  public errorMessage;string;


  constructor(private weatherService:WeatherService){
    this.city = "";
    this.weatherOfCities = [];

  }


      
    addCity(city:string,$event) {
        this.errorMessage="";
      if($event.keyCode==13){
        var weather = this.weatherService.getWeather(city);
        if(weather){
          this.weatherOfCities.push(weather);
        }
        this.city="";
      }
    }


}
