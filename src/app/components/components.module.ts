import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionHomeComponent } from './section-home/section-home.component';
import { SectionAboutComponent } from './section-about/section-about.component';
import { SectionServicesComponent } from './section-services/section-services.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

const moduleComponents = [
    HeaderComponent,
    FooterComponent,
    SectionHomeComponent,
    SectionAboutComponent,
    SectionServicesComponent,
    CarouselComponent
];

@NgModule({
    imports: [
        CarouselModule,
        CommonModule
    ],
    declarations: moduleComponents,
    exports: moduleComponents,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
