import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from "./main/main.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, FooterComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mypagemyport';
}
