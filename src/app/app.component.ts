import { Component } from '@angular/core';
import { Weather } from './weather';
import 'rxjs/Rx';
import { WeatherService } from './services/weatherService';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
    providers : [WeatherService],

})
export class AppComponent {

  public city:string="";
  public cities:Array<string>;
  public weatherOfCities:Array<any>=[];
  public errorMessage:string="";


  constructor(private weatherService:WeatherService){}


      
    addCity(city:string, $event) {
        if ($event.keyCode == 13) {     
            this.weatherService.getWeather(city)
                .subscribe(res => {
                    if (res) {
                        console.log(res);
                        this.weatherOfCities.push(res);
                        this.errorMessage = undefined;
                    } else {
                        var cityWithoutWeather = city;
                        this.errorMessage = "* There is no weather data " + cityWithoutWeather;
                    }
                    this.city = "";
                }, error => {
                    console.log(error)
                    this.city = "";
                    this.errorMessage = error;
                });
        } 
    }


}
