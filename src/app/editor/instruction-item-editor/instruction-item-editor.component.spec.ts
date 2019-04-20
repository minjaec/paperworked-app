import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionItemEditorComponent } from './instruction-item-editor.component';

describe('InstructionItemEditorComponent', () => {
  let component: InstructionItemEditorComponent;
  let fixture: ComponentFixture<InstructionItemEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionItemEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionItemEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
