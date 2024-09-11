import { Component } from '@angular/core';
import { Content1Component } from "./content1/content1.component";
import { Content2Component } from "./content2/content2.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [Content1Component, Content2Component],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
