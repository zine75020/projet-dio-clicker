import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PepitoComponent } from './pepito.component';

describe('PepitoComponent', () => {
  let component: PepitoComponent;
  let fixture: ComponentFixture<PepitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PepitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PepitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
