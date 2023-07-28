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
        'assets/work_in_progress.png',
        'assets/work_in_progress.png',
        'assets/work_in_progress.png',
        'assets/work_in_progress.png'
    ];
}
