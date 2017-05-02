import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GameComponent} from './components/game.component';
import {GameService} from './services/game.service';
import {SceneService} from './services/scene.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GameComponent
  ],
  exports: [
    GameComponent
  ],
  providers: [
    GameService,
    SceneService
  ]
})
export class GameOfLifeModule { }
