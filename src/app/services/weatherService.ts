import { Injectable } from '@angular/core';
import { Weather } from '../weather';

export class WeatherService {
    
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

}