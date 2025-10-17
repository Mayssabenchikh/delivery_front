import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { Hero } from "./hero/hero";
import { Solutions } from "./solutions/solutions";
import { HowItWorks } from "./how-it-works/how-it-works";

@Component({
  selector: 'app-home',
  imports: [Navbar, Footer, Hero, Solutions, HowItWorks],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
