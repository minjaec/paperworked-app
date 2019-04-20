import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionItemComponent } from './instruction-item.component';

describe('InstructionItemComponent', () => {
  let component: InstructionItemComponent;
  let fixture: ComponentFixture<InstructionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
