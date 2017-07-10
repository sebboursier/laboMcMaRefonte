import { LaboAngularPage } from './app.po';

describe('labo-angular App', () => {
  let page: LaboAngularPage;

  beforeEach(() => {
    page = new LaboAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
