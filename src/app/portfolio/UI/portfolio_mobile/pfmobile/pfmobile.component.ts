import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-pfmobile',
  standalone: true,
  imports: [CommonModule,SidebarModule,ButtonModule,ToolbarModule],
  templateUrl: './pfmobile.component.html',
  styleUrl: './pfmobile.component.scss'
})
export class PfmobileComponent {
  sidebarVisible: boolean = false;
}
