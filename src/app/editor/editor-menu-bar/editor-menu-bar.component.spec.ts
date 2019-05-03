import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorMenuBarComponent } from './editor-menu-bar.component';

describe('EditorMenuBarComponent', () => {
  let component: EditorMenuBarComponent;
  let fixture: ComponentFixture<EditorMenuBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorMenuBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
