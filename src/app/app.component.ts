import { Component } from '@angular/core';
import { Weather } from './weather';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  weather:Weather;
  public city:string;
  public cities:Array<string>;
  public weatherOfCities:Array<Weather>;



  constructor(){
    this.city = "";
    this.weatherOfCities = [];

  }


      
    getWeather = function(city:string) {
      var weather:Weather;
      if(city.toLocaleLowerCase()== "vienna"){
        weather = {
          "id": 1,
          "city": "Vienna",
          "main": "Clouds",
          "description":"overcast clouds"
        };
      }
      else if (city.toLocaleLowerCase()== "london"){
        weather = {
          "id": 2,
          "city": "London",
          "main": "Rain",
          "description":"Very Heavy Rain"
        };
      }
      return weather;
    }

    addCity = function(city:string,$event) {
      if($event.keyCode==13){
        var weather = this.getWeather(city);
        if(weather){
          this.weatherOfCities.push(weather);
        }
        this.city="";
      }
    }


}
