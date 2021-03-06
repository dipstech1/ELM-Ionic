import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule
  ],
  exports:[HeaderComponent]
})
export class SharedModule { }
