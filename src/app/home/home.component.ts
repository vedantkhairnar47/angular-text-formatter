import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   sharedText = '';
   sharedText1 = '';
   isBold=false;
   isUnderLine=false;
   isItalic=false;
   SizeFont=16;
   TextColor='#000000'
  constructor() { }
 toggleBold() {
    this.isBold = !this.isBold;   
  }
  setColor(color: string) {
  this.TextColor = color;
}
  toggleUnderLine() {
    this.isUnderLine = !this.isUnderLine;  
  }
removeAllStyling() {
  this.isBold = false;
  this.isItalic = false;
  this.isUnderLine = false;
  this.TextColor = '#000000';
  this.SizeFont = 15;
}

  toggleItalic() {
    this.isItalic = !this.isItalic;   
  }

  UpperCaseInc() {
    this.SizeFont = this.SizeFont+2;   
  }
   LowerCaseDec() {
    this.SizeFont = this.SizeFont-2;   
  }
 
  ngOnInit(): void {
  }

}
