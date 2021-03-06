import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { FirebaseUIModule } from 'firebaseui-angular';
import { SocialPage } from './social.page';

const routes: Routes = [
  {
    path: '',
    component: SocialPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirebaseUIModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SocialPage]
})
export class SocialPageModule {}
