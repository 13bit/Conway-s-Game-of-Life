import { GameLifePage } from './app.po';

describe('game-life App', function() {
  let page: GameLifePage;

  beforeEach(() => {
    page = new GameLifePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
