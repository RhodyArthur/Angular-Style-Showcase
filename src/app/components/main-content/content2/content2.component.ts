import { Component } from '@angular/core';
import { CustomStyleDirective } from '../../../directives/custom-style.directive';

@Component({
  selector: 'app-content2',
  standalone: true,
  imports: [CustomStyleDirective],
  templateUrl: './content2.component.html',
  styleUrl: './content2.component.scss'
})
export class Content2Component {

}
