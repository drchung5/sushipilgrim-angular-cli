import { SushipilgrimPage } from './app.po';

describe('sushipilgrim App', function() {
  let page: SushipilgrimPage;

  beforeEach(() => {
    page = new SushipilgrimPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
