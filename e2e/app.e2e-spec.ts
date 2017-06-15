import { InsiderPortalPage } from './app.po';

describe('insider-portal App', () => {
  let page: InsiderPortalPage;

  beforeEach(() => {
    page = new InsiderPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
