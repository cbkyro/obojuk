import $ from 'jquery';
import PageManager from '../PageManager';
import Carousel from './components/carousel';

export default class Home extends PageManager {
  constructor() {
    super();
  }

  loaded(next) {
    this.Carousel = new Carousel();
    next();
  }
}
