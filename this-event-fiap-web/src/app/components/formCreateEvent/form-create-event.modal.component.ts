import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IModalData } from "src/app/interfaces/modal";
import { ViewEncapsulation } from '@angular/core';
import { NgForm } from "@angular/forms";
import { EventsService } from "src/app/services/events.service";

@Component({
  selector: 'form-create-event-modal-component',
  templateUrl: 'form-create-event.modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./form-create-event.modal.component.scss']
})
export class FormCreateEventModalComponent {
  hide = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IModalData, private eventService: EventsService) {}

  submitLoginForm(form: NgForm) {
    this.createEvent(form)
  }

  async createEvent(form: NgForm) {
    const response = await this.eventService.create(form.value)
    location.reload()
  }
}