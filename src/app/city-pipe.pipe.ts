import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cityPipe"
})
export class CityPipePipe implements PipeTransform {
  transform(city: string): string {
    return "City Name: " + city;
  }
}
