import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HotelService } from '../services';
import { Hotel } from '../models';

@Injectable()
export class HotelsResolver implements Resolve<Hotel> {

  constructor(private hotelService: HotelService) {}

  resolve() {
    return this.hotelService.getAll();
  }
}
