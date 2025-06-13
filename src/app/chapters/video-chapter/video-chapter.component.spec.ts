/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VideoChapterComponent } from './video-chapter.component';

describe('VideoChapterComponent', () => {
  let component: VideoChapterComponent;
  let fixture: ComponentFixture<VideoChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
