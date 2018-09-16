import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAddEdtComponent } from './contact-add-edt.component';

describe('ContactAddEdtComponent', () => {
  let component: ContactAddEdtComponent;
  let fixture: ComponentFixture<ContactAddEdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactAddEdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAddEdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
