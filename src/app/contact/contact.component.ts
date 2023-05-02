import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { APP_CONSTANTS } from '../constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private http: HttpClient){}

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  onSubmit() {
    const apiKey = APP_CONSTANTS.sendinblueApiKey;
    const url = "https://api.sendinblue.com/v3/smtp/email";

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'api-key': apiKey
    });

    const body = {
      sender: {
        name: 'Portfolio Website',
        email: APP_CONSTANTS.senderEmail
      },
      to: [{
        email: APP_CONSTANTS.toEmail,
        name: 'Rynhard Pietersen'
      }],
      subject: `Message from ${this.contactForm.value.name}`,
      htmlContent: `
          <h3>Contact Details</h3>
          <p>Name: ${this.contactForm.value.name}</p>
          <p>Email: ${this.contactForm.value.email}</p>
          <h3>Message</h3>
          <p>${this.contactForm.value.message}</p>
        `
    };

    this.http.post(url, body, { headers: headers}).subscribe(
      response => {
        console.log('Email sent successfully');
        this.contactForm.reset();
      },
      error => {
        console.error('There was an error sending the email', error)
      }
    );
  }
}
