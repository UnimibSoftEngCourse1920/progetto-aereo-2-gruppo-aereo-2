import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service'
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['../app.component.css']
})
export class ReservationComponent implements OnInit {
  
  reservations = []
  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.reservationService.getReservations()
      .subscribe(
        res => this.reservations=res,
        err => console.log(err)
      )
  }

}
