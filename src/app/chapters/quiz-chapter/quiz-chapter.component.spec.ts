/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuizChapterComponent } from './quiz-chapter.component';

describe('QuizChapterComponent', () => {
  let component: QuizChapterComponent;
  let fixture: ComponentFixture<QuizChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
