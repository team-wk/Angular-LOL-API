import {Component} from "@angular/core";
import {ChampionsService} from "./champions.service";

@Component({
  selector: 'champions',
  templateUrl: './champions.component.html'
})

export class ChampionsComponent{
  champions:any[];
  constructor(private championsService:ChampionsService){
  }

  getChampions(){
    this.championsService.getChampions().then((champions)=>{
      this.champions = champions;
    });
  }
}
