import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}
  longText = `Learn from industry-certified professionals with years of experience in their respective fields.`;
  longText1 = `Choose from a variety of class times and self-paced options to fit your busy lifestyle`;
  longText2 = `Benefit from one-on-one mentorship, career guidance, and personalized feedback to help you achieve your goals.`;
  longText3 = 'Access high-quality training at competitive prices, with various payment plans available.';
  longText4 = 'Engage in live sessions, Q&A, and real-time feedback to enhance your learning experience.'
  longText5 = `Our courses are designed to cover both foundational and advanced topics, ensuring thorough understanding and skill development.`;
  longText6 = `Learn at your own pace through our easy to navigate Responsive Website.`;
  longText7 =  `Learn through high-quality & easy to understand video lectures.`;
  longText8 = `Practice chapter-wise Quizzes & solve Assignments to learn and revise concepts.`;


courses = [
  {
    title: 'Web Development',
    description: 'Learn the fundamentals of web development.',
    image: 'assets/web/web-2.jpg'

  },
]
courceClick() {
this.router.navigate(['/cource']);
}
contactClick() {
  this.router.navigate(['/contactUs']);
}
}