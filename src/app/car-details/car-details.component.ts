import { Component, OnInit, signal } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarService } from '../service/car.service';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-car-details',
  imports: [FormsModule,CommonModule],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent implements OnInit{
car = signal<any>(null);
  constructor(private carService: CarService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.car.set(this.carService.getCarById(id))
  }

  updateCar() {
    this.carService.updateCarData(this.car())
    this.router.navigate(['/'])
  }
}
