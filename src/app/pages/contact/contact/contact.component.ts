import { MessageForm } from './../models/contact';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ContactForm } from '../models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
public contactForm!: FormGroup;
public submitted: boolean = false;
public messageForm!: MessageForm;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      country: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.maxLength(20)]],
      text: ['', [Validators.required, Validators.maxLength(250)]],
    });
   }

  onButtonClick(): void {
    const message = {
      text: "Thanks for your comments, soldier...",
    img:{
      src: "https://cdn.images.express.co.uk/img/dynamic/1/590x/secondary/132226.jpg",
      alt: "thank you soldier"
    }
    }
    this.messageForm = message;
  }

  ngOnInit(): void {
  }
 
  

  public onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.valid) {
      const user: ContactForm = {
        name: this.contactForm.get('name')?.value,
        country: this.contactForm.get('country')?.value,
        email: this.contactForm.get('email')?.value,
        text: this.contactForm.get('text')?.value,
      };
      console.log(user);
      this.contactForm.reset();
      this.submitted = false;
      
    
    }
  }
}
function onButtonClick() {
  throw new Error('Function not implemented.');
}

