import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CorporateComponent } from './corporate.component';

describe('CorporateComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CorporateComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CorporateComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bpg-gds-scripting-amadeus'`, () => {
    const fixture = TestBed.createComponent(CorporateComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('bpg-gds-scripting-amadeus');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(CorporateComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to bpg-gds-scripting-amadeus!');
  });
});
