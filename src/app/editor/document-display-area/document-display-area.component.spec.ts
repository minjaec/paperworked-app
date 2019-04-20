import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentDisplayAreaComponent } from './document-display-area.component';

describe('DocumentDisplayAreaComponent', () => {
  let component: DocumentDisplayAreaComponent;
  let fixture: ComponentFixture<DocumentDisplayAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentDisplayAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentDisplayAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
