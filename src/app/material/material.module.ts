import { NgModule } from '@angular/core';  
import { CommonModule } from '@angular/common';  

import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';  
import {MatSelectModule} from '@angular/material/select'
import {MatButtonModule} from '@angular/material/button';
const modules =[
  MatInputModule ,
  MatSliderModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule];
@NgModule({  
  imports: [  
    CommonModule,  ...modules
    
  ],  
  exports: [...modules],  
  declarations: []  
})  
export class MaterialModule { }  