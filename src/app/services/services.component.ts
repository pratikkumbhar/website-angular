import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
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
