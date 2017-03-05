import { HotelRatingPage } from './app.po';

describe('hotel-rating App', () => {
  let page: HotelRatingPage;

  beforeEach(() => {
    page = new HotelRatingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
