import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TokenomicsComponent } from './tokenomics.component';

describe('ProyectsComponent', () => {
  let component: TokenomicsComponent;
  let fixture: ComponentFixture<TokenomicsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenomicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
