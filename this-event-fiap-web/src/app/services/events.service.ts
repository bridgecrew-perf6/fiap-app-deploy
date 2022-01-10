import { Injectable } from '@angular/core';
import { IEvent } from '../interfaces/event';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService extends BaseService {

  getEvents() {
    const events = this.http.get('/events')
    return events
  }

  create(event: IEvent) {
    const response = this.http.post('/events', event)
    return response
  }

}
