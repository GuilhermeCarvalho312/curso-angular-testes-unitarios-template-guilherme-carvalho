import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MockServiceComponent } from './mock-service.component';

describe('MockServiceComponent', () => {
  let component: MockServiceComponent;
  let fixture: ComponentFixture<MockServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MockServiceComponent],
      imports: [HttpClientModule], // adicione o módulo HttpClientModule aqui
      providers: [HttpClient], // adicione o provedor HttpClient aqui
    }).compileComponents();

    fixture = TestBed.createComponent(MockServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
