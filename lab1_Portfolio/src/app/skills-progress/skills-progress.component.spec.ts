import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsProgressComponent } from './skills-progress.component';

describe('SkillsProgressComponent', () => {
  let component: SkillsProgressComponent;
  let fixture: ComponentFixture<SkillsProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
