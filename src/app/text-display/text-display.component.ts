import { Component, OnInit,Output,EventEmitter ,Input} from '@angular/core';

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.css']
})
export class TextDisplayComponent implements OnInit
 {
  textValue: string = '';
  @Output() textChanged = new EventEmitter<string>();

   @Input() isBold: boolean = false; 
   @Input() isUnderLine: boolean = false; 
   @Input() isItalic: boolean = false; 
   @Input() SizeFont: number = 16; 
   @Input() TextColor = '#000000'; 

  @Input() textValue1: string = ''; 

  onTextChange() {
    this.textChanged.emit(this.textValue);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
