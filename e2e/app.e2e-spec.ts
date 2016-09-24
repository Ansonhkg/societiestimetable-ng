import { SocietiestimetableNgPage } from './app.po';

describe('societiestimetable-ng App', function() {
  let page: SocietiestimetableNgPage;

  beforeEach(() => {
    page = new SocietiestimetableNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
