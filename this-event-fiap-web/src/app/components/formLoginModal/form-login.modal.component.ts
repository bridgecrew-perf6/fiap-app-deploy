import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IModalData } from "src/app/interfaces/modal";
import { setAuthenticationToken } from 'src/app/utils/tokens';
import { LoginService } from "src/app/services/login.service";
import { SignUpService } from "src/app/services/signup.service";
import { ViewEncapsulation } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'form-login-modal-component',
  templateUrl: 'form-login.modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./form-login.modal.component.scss']
})
export class FormLoginModalComponent {
  hide = true;
  isCreateModal = false

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IModalData, 
    private authService: LoginService, 
    private signupService: SignUpService
  ) {}

  submitLoginForm(form: NgForm) {
    this.isCreateModal ? this.signup(form) : this.signin(form)
  }

  async signin(form: NgForm) {
    const res = await this.authService.signin(form.value) 
    const token = res.headers['authentication-token']
    setAuthenticationToken(token)
    window.location.reload();
  }

  async signup(form: NgForm) {
    await this.signupService.signup(form.value) 
    this.isCreateModal = false;
  }

  openCreateUserModal() {
    this.isCreateModal = true;
  }

  openLoginModal() {
    this.isCreateModal = false;
  }
}