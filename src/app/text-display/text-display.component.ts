import { Component, Input } from '@angular/core';
import { TextState } from '../models/text-state.model';

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.css']
})
export class TextDisplayComponent {

  @Input() state!: TextState;

}
