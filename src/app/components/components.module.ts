import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionHomeComponent } from './section-home/section-home.component';
import { SectionAboutComponent } from './section-about/section-about.component';
import { SectionServicesComponent } from './section-services/section-services.component';

const moduleComponents = [HeaderComponent, FooterComponent, SectionHomeComponent, SectionAboutComponent, SectionServicesComponent];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: moduleComponents,
    exports: moduleComponents,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
