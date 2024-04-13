import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-pfmobile',
  standalone: true,
  imports: [CommonModule,SidebarModule,ButtonModule,ToolbarModule,CardModule,ProgressBarModule],
  templateUrl: './pfmobile.component.html',
  styleUrl: './pfmobile.component.scss'
})
export class PfmobileComponent {
  sidebarVisible: boolean = false;
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


      const element1 = document.querySelector('.experience');
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
