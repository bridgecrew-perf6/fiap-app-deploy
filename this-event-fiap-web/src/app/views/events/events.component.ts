import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events: any = [];

  constructor(private eventsService: EventsService) {}
    
  ngOnInit() {
    this.allEvents();
  }

  async allEvents(): Promise<void> {
    const allEvents = await this.eventsService.getEvents();
    this.events = allEvents.data;
  }

}
