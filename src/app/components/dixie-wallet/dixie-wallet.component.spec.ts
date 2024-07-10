import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DixieWalletComponent } from './dixie-wallet.component';

describe('ArchiveComponent', () => {
  let component: DixieWalletComponent;
  let fixture: ComponentFixture<DixieWalletComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DixieWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DixieWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
