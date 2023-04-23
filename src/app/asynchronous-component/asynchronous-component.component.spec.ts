import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '../service/http.service';
import { AsynchronousComponentComponent } from './asynchronous-component.component';

describe('AsynchronousComponentComponent', () => {
  let component: AsynchronousComponentComponent;
  let fixture: ComponentFixture<AsynchronousComponentComponent>;
  let httpService: HttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsynchronousComponentComponent],
      imports: [HttpClientTestingModule], // Importando HttpClientTestingModule
      providers: [HttpService], // Fornecendo o HttpService
    }).compileComponents();

    fixture = TestBed.createComponent(AsynchronousComponentComponent);
    component = fixture.componentInstance;
    httpService = TestBed.inject(HttpService); // Injetando o HttpService

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
