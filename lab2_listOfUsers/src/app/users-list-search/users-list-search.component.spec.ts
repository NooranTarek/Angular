import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListSearchComponent } from './users-list-search.component';

describe('UsersListSearchComponent', () => {
  let component: UsersListSearchComponent;
  let fixture: ComponentFixture<UsersListSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersListSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
