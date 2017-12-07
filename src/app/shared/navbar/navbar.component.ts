import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyOwnMaterialModule } from '../material/my-own-material.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor() { }

}

@NgModule({
  imports: [CommonModule, RouterModule, MyOwnMaterialModule],
  exports: [NavbarComponent],
  declarations: [NavbarComponent]
})
export class NavbarModule {}
