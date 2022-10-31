import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'softo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Input() public isLoading: boolean = false;
@Input() public cssClass:string='';
@Input() public label: string = 'Submit';
@Input() public loadingLabel:string="Loading...";
@Input() public onClick?:()=>{}=undefined; 
  constructor() { }

  ngOnInit(): void {
  }
btnClick(){
  if(this.onClick) this.onClick();
}
}
