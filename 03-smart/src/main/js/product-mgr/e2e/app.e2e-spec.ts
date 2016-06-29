import { NewappPage } from './app.po';

describe('newapp App', function() {
  let page: NewappPage;

  beforeEach(() => {
    page = new NewappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
