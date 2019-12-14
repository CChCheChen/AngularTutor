import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-cook-check',
  templateUrl: './cook-check.component.html',
  styleUrls: ['./cook-check.component.css']
})
export class CookCheckComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isSushi = false;
  currIngredients : Ingredient[] = [];
  recommendForNothing = 'Please add some ingredients to make sushi';

  recommendation = this.recommendForNothing;

  addIngredients(name) {
    for(let i = 0; i < this.currIngredients.length; i++ ){
      if(this.currIngredients[i].name === name){
        this.currIngredients[i].amount++;
        return;
      }
    }
    this.currIngredients.push(new Ingredient(name, 1));
  }
  resetIngredients() {
    // for(let i = 0; i < this.currIngredients.length; i++ ) {
    //   console.log(this.currIngredients[i].name + " - amount:" + this.currIngredients[i].amount)
    // }
    this.currIngredients = [];
    this.recommendation = this.recommendForNothing;
    this.isSushi = false;
  }

  checkForRecommend() {
    let amountSalmon = 0;
    let amountTuna = 0;
    let amountEel = 0;
    let amountSushiRice = 0;
    let amountSoySauce = 0;
    let amountWasabi = 0;
    for(let i = 0; i < this.currIngredients.length; i++ ) {
      if(this.currIngredients[i].name === 'Salmon'){
        amountSalmon = this.currIngredients[i].amount;
      }
      if(this.currIngredients[i].name === 'Tuna'){
        amountTuna = this.currIngredients[i].amount;
      }
      if(this.currIngredients[i].name === 'Eel'){
        amountEel = this.currIngredients[i].amount;
      }
      if(this.currIngredients[i].name === 'Sushi Rice'){
        amountSushiRice = this.currIngredients[i].amount;
      }
      if(this.currIngredients[i].name === 'Soy Sauce'){
        amountSoySauce = this.currIngredients[i].amount;
      }
      if(this.currIngredients[i].name === 'Wasabi'){
        amountWasabi = this.currIngredients[i].amount;
      }
    }
    let totalFish = amountSalmon + amountTuna + amountEel;
    //console.log("Total fish - " + totalFish);

    if(totalFish===amountSushiRice &&
       totalFish===amountSoySauce && totalFish===amountWasabi){
      this.isSushi = true;
      let successRecommend = ['You can make '];
      if(amountSalmon !== 0){
        successRecommend.push(amountSalmon.toString() + ' Salmon sushi');
      }
      if(amountTuna !== 0){
        successRecommend.push(amountTuna.toString() + ' Tuna sushi');
      }
      if(amountEel !== 0){
        successRecommend.push(amountEel.toString() + ' Eel sushi');
      }
      this.recommendation = successRecommend.join();
    }else{
      this.isSushi = false;
      let failRecommend = ['You need ']
      if(totalFish > amountSushiRice){
        failRecommend.push((totalFish-amountSushiRice).toString() + 'more Sushi Rice');
      }
      if(totalFish > amountSoySauce){
        failRecommend.push((totalFish-amountSoySauce).toString() + 'more Soy Sauce');
      }
      if(totalFish > amountWasabi){
        failRecommend.push((totalFish-amountWasabi).toString() + 'more Wasabi');
      }
      this.recommendation = failRecommend.join();
    }

  }

}
