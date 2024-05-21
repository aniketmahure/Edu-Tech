import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterclassComponent } from './masterclass.component';

describe('MasterclassComponent', () => {
  let component: MasterclassComponent;
  let fixture: ComponentFixture<MasterclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasterclassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasterclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
