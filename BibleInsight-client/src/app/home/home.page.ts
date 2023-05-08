import { Component, OnDestroy, OnInit } from '@angular/core';
import { BibleService } from './bible.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  constructor(private bibleService: BibleService) {}
  ngOnInit(): void {
    // Test call for searchVerses
    this.bibleService
      .searchVerses('mila', 'cornilescu')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: any) => {
          console.log('searchVerses response:', response);
        },
        error: (error: any) => {
          console.error('Error:', error);
        },
      });

    // Test call for navigateToChapter
    this.bibleService
      .navigateToChapter('cornilescu', 'Rom', 3)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: any) => {
          console.log('navigateToChapter response:', response);
        },
        error: (error: any) => {
          console.error('Error:', error);
        },
      });

    // Test call for fetchBooks
    this.bibleService
      .fetchBooks('cornilescu')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: any) => {
          console.log('fetchBooks response:', response);
        },
        error: (error: any) => {
          console.error('Error:', error);
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
