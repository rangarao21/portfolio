import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/UI/portfolio/portfolio.component';
import { PfmobileComponent } from './portfolio/UI/portfolio_mobile/pfmobile/pfmobile.component';

export const routes: Routes = [
    {
        path:"main1",
        component:PortfolioComponent
    },
    {
        path:"main",
        component:PfmobileComponent
    }
];
