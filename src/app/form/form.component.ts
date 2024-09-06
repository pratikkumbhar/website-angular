import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FooterComponent } from '../footer/footer.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FooterComponent, LandingPageComponent, FormComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  success: boolean = false;

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5y5dcc1',
        'template_ojmg5qo',
        e.target as HTMLFormElement,
        {
          publicKey: 'dZL6O7XIqGpv0TDEo',
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Form is Submited Successfully!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
          alert('System Error');
        }
      );
  }
}
