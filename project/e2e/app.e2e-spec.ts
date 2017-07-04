import { ProjectTigerPage } from './app.po';

describe('project-tiger App', () => {
  let page: ProjectTigerPage;

  beforeEach(() => {
    page = new ProjectTigerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
