import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersJasmineComponent } from './matchers-jasmine.component';

describe('MatchersJasmineComponent', () => {
  let component: MatchersJasmineComponent;
  let fixture: ComponentFixture<MatchersJasmineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchersJasmineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchersJasmineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should test values', () => {
    expect(3).toBe(3);
  });

  // Matcher "expect"
  it("Demonstra o uso do matcher 'expect'", function () {
    var x = 10;
    expect(x).toBe(10);
  });

  // Matcher "not"
  it("Demonstra o uso do matcher 'not'", function () {
    var y = 5;
    expect(y).not.toBe(10);
  });

  // Matcher "toEqual"
  it("Demonstra o uso do matcher 'toEqual'", function () {
    var array1 = [1, 2, 3];
    var array2 = [1, 2, 3];
    expect(array1).toEqual(array2);
  });

  // Matcher "toMatch"
  it("Demonstra o uso do matcher 'toMatch'", function () {
    var str = 'Ola, mundo!';
    expect(str).toMatch('mundo');
  });

  // Matcher "toBeDefined"
  it("Demonstra o uso do matcher 'toBeDefined'", function () {
    var foo = { bar: 'bar', baz: undefined };
    expect(foo.bar).toBeDefined();
    expect(foo?.baz).not.toBeDefined();
  });

  // Matcher "toBeNull"
  it("Demonstra o uso do matcher 'toBeNull'", function () {
    var a = null;
    var b = undefined;
    expect(a).toBeNull();
    expect(b).not.toBeNull();
  });
});
