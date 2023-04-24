// Importa as funções necessárias para executar o teste
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importa o componente que está sendo testado
import { DebuggerTestsComponent } from './debugger-tests.component';

// Define uma suíte de testes para o componente
describe('DebuggerTestsComponent', () => {
  // Declara duas variáveis para serem usadas no teste
  let component: DebuggerTestsComponent;
  let fixture: ComponentFixture<DebuggerTestsComponent>;

  // Executa essa função antes de cada caso de teste
  beforeEach(async () => {
    // Configura os módulos de teste necessários e declara o componente sendo testado
    await TestBed.configureTestingModule({
      declarations: [DebuggerTestsComponent],
    }).compileComponents();

    // Cria uma nova instância do componente e configura a detecção de mudanças
    fixture = TestBed.createComponent(DebuggerTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Define um caso de teste para verificar se o componente pode ser criado com sucesso
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
