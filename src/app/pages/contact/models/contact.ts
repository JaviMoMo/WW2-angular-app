export interface ContactForm {
  name: string;
  country: string;
  email: string;
  text: string;
}

export interface MessageForm {
  text: string;
  img:{
    src: string;
    alt: string;
  }
}