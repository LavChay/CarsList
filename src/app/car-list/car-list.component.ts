import { Component, OnInit, signal } from '@angular/core';
import { CarService } from '../service/car.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-car-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit{

  cars = signal<any[]>([]);

  constructor(private carService: CarService, private route: Router) {}

  ngOnInit() {
    this.carService.getCars().subscribe(data => this.cars.set(data));
  }

  deleteCar(id: number) {
    this.carService.deleteCar(id);
  }
  viewDetails(id: number) {
    this.route.navigate(['/carDetails', id]);
  }
}
