import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ToolbarModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  constructor(private router:Router)
  {
    if(window.innerWidth <= 768)
    {
      this.router.navigateByUrl("/main")
    }
    else{
      this.router.navigateByUrl("/main1")
    }
  }
}
