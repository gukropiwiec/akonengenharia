import { Component } from '@angular/core';
import { defaultCarouselOptions } from 'src/app/shared/carousel-options-default';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
    defaultCarouselOptions = defaultCarouselOptions;
    
    fotos = [
        'assets/carousel1.jpg',
        'assets/carousel2.jpg',
        'assets/carousel3.jpg',
        'assets/carousel4.jpg',
        'assets/carousel5.jpg',
        'assets/carousel6.jpg'
    ];
}
