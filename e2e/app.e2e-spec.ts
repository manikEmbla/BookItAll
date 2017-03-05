import { BookItAllPage } from './app.po';

describe('book-it-all App', () => {
  let page: BookItAllPage;

  beforeEach(() => {
    page = new BookItAllPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
