import { Component } from '@angular/core';
import { Verzoek } from './Verzoek';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit(): void {
    this.lstVerzoek.push(new Verzoek("Aanvrager","Artiest","Nummer"))
  }
  titel = 'Verzoek';
  lstVerzoek:Array<Verzoek>=[];
  ngAanvrager:string="";
  ngArtiest:string="";
  ngNummer:string="";
  aanvragen(){
    this.lstVerzoek.push(new Verzoek(this.ngAanvrager,this.ngArtiest,this.ngNummer));
    this.clearfields();
  }
  clearfields(){
    this.ngAanvrager="",this.ngArtiest="",this.ngNummer="";
  }
}
