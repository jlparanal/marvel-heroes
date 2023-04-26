import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListsComponent } from './hero-lists.component';

describe('HeroListsComponent', () => {
  let component: HeroListsComponent;
  let fixture: ComponentFixture<HeroListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
