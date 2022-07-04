import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewallComponent } from './previewall.component';

describe('PreviewallComponent', () => {
  let component: PreviewallComponent;
  let fixture: ComponentFixture<PreviewallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
