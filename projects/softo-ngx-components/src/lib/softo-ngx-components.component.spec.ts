import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftoNgxComponentsComponent } from './softo-ngx-components.component';

describe('SoftoNgxComponentsComponent', () => {
  let component: SoftoNgxComponentsComponent;
  let fixture: ComponentFixture<SoftoNgxComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftoNgxComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftoNgxComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
