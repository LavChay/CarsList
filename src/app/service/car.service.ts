import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  private jsonUrl = 'assets/cars.json'
  cars = signal<any[]>([]);
  constructor(private http: HttpClient) { 
    this.loadCars();
  }


  private loadCars() {
    this.http.get<any[]>(this.jsonUrl).subscribe( data=> this.cars.set(data));
  }

  getCars(): Observable<any[]>{
    return new Observable(observer => observer.next(this.cars()));
  }

  deleteCar(id: number):void {
    this.cars.set(this.cars().filter(car => car.id !== id));
  } 

  getCarById(id: Number): any {
    return this.cars().find( car => car.id === id);
  }

  updateCarData(updateCar: any) {
    this.cars.set(this.cars().map(car => (car.id === updateCar.id) ? updateCar: car));
  }
}
