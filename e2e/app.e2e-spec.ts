import { AngularModulesPage } from './app.po';

describe('angular-modules App', () => {
  let page: AngularModulesPage;

  beforeEach(() => {
    page = new AngularModulesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
