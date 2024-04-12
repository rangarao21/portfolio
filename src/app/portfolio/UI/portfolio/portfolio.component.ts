import { Component, HostListener } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { CommonModule } from '@angular/common'; 
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ButtonModule,ToolbarModule,CommonModule,CardModule,ProgressBarModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  animationTriggered: boolean=false;
  animationTriggered1:boolean=false;
  @HostListener("window:scroll", [])
  onWindowScroll() 
  {
      const element = document.querySelector('.text');
      const elementPosition = element?.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementPosition) 
      {
        if(elementPosition < windowHeight)
        {
        this.animationTriggered = true;
        }
        else{
          this.animationTriggered = false;
        }
      }


      const element1 = document.querySelector('.text');
      const elementPosition1 = element?.getBoundingClientRect().top;
      const windowHeight1= window.innerHeight;
      if (elementPosition1) 
      {
        if(elementPosition1 < windowHeight1)
        {
        this.animationTriggered1 = true;
        }
        else{
          this.animationTriggered1= false;
        }
      }
  }
}
