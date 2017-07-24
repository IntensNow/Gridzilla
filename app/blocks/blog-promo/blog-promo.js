import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

const blogPromo = document.querySelector('.blog-promo');

if (blogPromo) {
  imagesLoaded( blogPromo, function () {
    new Masonry( blogPromo, {
      columnWidth: 270,
      itemSelector: '.blog-promo__item',
      gutter: 20
    });
  });
}