import { Ng4AcFormsPage } from './app.po';

describe('ng4-ac-forms App', () => {
  let page: Ng4AcFormsPage;

  beforeEach(() => {
    page = new Ng4AcFormsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
