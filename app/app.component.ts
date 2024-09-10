import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public router:Router)
  {

  }
  title = 'ai';
  about()
  {
    this.router.navigateByUrl('');
  }
  migrate()
  {
    this.router.navigateByUrl('migrate');
  }
  optimize()
  {
    this.router.navigateByUrl('optimize');
  }
}
