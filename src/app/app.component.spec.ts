import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TaskApp } from './TaskApp';

describe('TaskApp', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TaskApp
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TaskApp);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'interactiveapp'`, () => {
    const fixture = TestBed.createComponent(TaskApp);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('interactiveapp');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(TaskApp);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to interactiveapp!');
  });
});
