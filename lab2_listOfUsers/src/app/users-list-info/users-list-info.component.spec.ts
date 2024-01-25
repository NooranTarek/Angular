import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListInfoComponent } from './users-list-info.component';

describe('UsersListInfoComponent', () => {
  let component: UsersListInfoComponent;
  let fixture: ComponentFixture<UsersListInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersListInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersListInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
