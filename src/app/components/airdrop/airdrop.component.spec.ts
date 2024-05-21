import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AirdropComponent } from './airdrop.component';

describe('ArchiveComponent', () => {
  let component: AirdropComponent;
  let fixture: ComponentFixture<AirdropComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AirdropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
