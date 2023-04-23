// Importando o módulo de teste do Angular e a classe que será testada
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ConceptsTestsComponent } from './concepts-tests.component';

// Descrevendo a suíte de testes para a classe ConceptsTestsComponent
describe('ConceptsTestsComponent', () => {
  let component: ConceptsTestsComponent;
  let fixture: ComponentFixture<ConceptsTestsComponent>;

  // Configuração prévia dos testes
  beforeEach(() => {
    // Configuração do TestBed com a declaração da classe que será testada
    TestBed.configureTestingModule({
      declarations: [ConceptsTestsComponent],
    }).compileComponents();

    // Criação do componente e instância da classe a ser testada
    fixture = TestBed.createComponent(ConceptsTestsComponent);
    component = fixture.componentInstance;

    // Atualização do componente
    fixture.detectChanges();
  });

  // Teste para verificar se o aplicativo foi criado
  it('should create the app', () => {
    const fixture = TestBed.createComponent(ConceptsTestsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
