import $ from 'jquery';
import Flickity from 'flickity-imagesloaded';

export default class Carousel {
  constructor() {

    if ($('[data-slideshow]').length) {
      this.flickity = new Flickity('[data-slideshow]', {
        cellSelector: '[data-slideshow-slide]',
        prevNextButtons: false,
        pageDots: true,
        wrapAround: true,
        accessibility: false,
        setGallerySize: false,
        autoPlay: true
      });
    }
  }

  unload() {
    this.flickity.destroy();
  }
}
