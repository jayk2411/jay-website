import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '@env/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup = this.fb.group({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  submitted = false;
  submitSuccess = false;
  submitError = false;
  loading = false;

  constructor(private fb: FormBuilder) {
    emailjs.init(environment.emailjs.publicKey);
  }

  async onSubmit() {
    this.submitted = true;
    this.submitError = false;
    this.submitSuccess = false;

    if (this.contactForm.valid) {
      this.loading = true;
      
      try {
        const templateParams = {
          from_name: this.contactForm.value.name,
          from_email: this.contactForm.value.email,
          subject: this.contactForm.value.subject,
          message: this.contactForm.value.message,
          to_name: 'Jay Kakadiya',
        };

        await emailjs.send(
          environment.emailjs.serviceId,
          environment.emailjs.templateId,
          templateParams
        );

        this.submitSuccess = true;
        this.contactForm.reset();
        this.submitted = false;

        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      } catch (error) {
        console.error('Error sending email:', error);
        this.submitError = true;
      } finally {
        this.loading = false;
      }
    }
  }

  get f() { 
    return this.contactForm.controls; 
  }
}
