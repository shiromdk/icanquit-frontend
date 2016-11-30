import { IcanquitFrontendPage } from './app.po';

describe('icanquit-frontend App', function() {
  let page: IcanquitFrontendPage;

  beforeEach(() => {
    page = new IcanquitFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
