import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line: max-line-length
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/04/roasted-new-carrots-cauliflower-grains-carrot-top-dressing.jpg?itok=ssnZzmvb'),
    // tslint:disable-next-line: max-line-length
    new Recipe('Recipe 2', 'Descript 2', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/5/14/1/WU1902_Italian-Chicken-Sheet-Pan-Supper_s4x3.jpg.rend.hgtvcom.826.620.suffix/1526332485385.jpeg'),
    // tslint:disable-next-line: max-line-length
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/04/roasted-new-carrots-cauliflower-grains-carrot-top-dressing.jpg?itok=ssnZzmvb'),
    // tslint:disable-next-line: max-line-length
    new Recipe('Recipe 2', 'Descript 2', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/5/14/1/WU1902_Italian-Chicken-Sheet-Pan-Supper_s4x3.jpg.rend.hgtvcom.826.620.suffix/1526332485385.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
