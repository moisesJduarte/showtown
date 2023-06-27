import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDatailsComponent } from './movie-datails.component';

describe('MovieDatailsComponent', () => {
  let component: MovieDatailsComponent;
  let fixture: ComponentFixture<MovieDatailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDatailsComponent]
    });
    fixture = TestBed.createComponent(MovieDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
