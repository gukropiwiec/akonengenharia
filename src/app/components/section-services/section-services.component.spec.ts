import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServicesComponent } from './section-services.component';

describe('SectionServicesComponent', () => {
  let component: SectionServicesComponent;
  let fixture: ComponentFixture<SectionServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionServicesComponent]
    });
    fixture = TestBed.createComponent(SectionServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
