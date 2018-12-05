import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InicioLogoPage } from './inicio-logo';

@NgModule({
  declarations: [
    InicioLogoPage,
  ],
  imports: [
    IonicPageModule.forChild(InicioLogoPage),
  ],
})
export class InicioLogoPageModule {}
