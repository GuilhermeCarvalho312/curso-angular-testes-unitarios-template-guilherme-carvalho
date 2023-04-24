// Importa módulos e classes necessários
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

// Importa serviço a ser testado e cria classe de mock para substituir seus métodos
import { MyServiceService } from './my-service.service';

class MyServiceMock extends MyServiceService {
  response = [
    {
      name: 'Danilo 2',
      email: 'danilo@gmail.com',
      age: '30',
      id: 1,
    },
    {
      id: 3,
      name: 'Joao',
      email: 'joao@gmail.com',
      age: 22,
    },
    {
      id: 4,
      name: 'Joao',
      email: 'joao@gmail.com',
      age: 22,
    },
    {
      id: 0.8230837961873159,
      name: 'Danilo ',
      email: 'danilo@gmail.com',
      age: '30',
    },
  ];
  // Sobrescreve o método getUsers com dados falsificados
  override getUsers() {
    return of(this.response);
  }
}

// Inicia o teste do serviço usando o bloco describe
describe('MyServiceService', () => {
  let service: MyServiceService;

  // Configuração antes de cada caso de teste, definindo a configuração do módulo de teste e injetando serviço de mock
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: MyServiceService,
          useClass: MyServiceMock,
        },
      ],
    });
    service = TestBed.inject(MyServiceService);
  });

  // Testa se o serviço foi criado com sucesso
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Testa se a solicitação HTTP está sendo feita corretamente e retornando dados esperados
  it('Deve realizar chamada HTTP', () => {
    const response = [
      {
        name: 'Danilo 2',
        email: 'danilo@gmail.com',
        age: '30',
        id: 1,
      },
      {
        id: 3,
        name: 'Joao',
        email: 'joao@gmail.com',
        age: 22,
      },
      {
        id: 4,
        name: 'Joao',
        email: 'joao@gmail.com',
        age: 22,
      },
      {
        id: 0.8230837961873159,
        name: 'Danilo ',
        email: 'danilo@gmail.com',
        age: '30',
      },
    ];
    // Inscreve-se no método getUsers e testa se os dados correspondem à resposta esperada
    service.getUsers().subscribe((res) => {
      expect(res).toEqual(response);
    });
  });
});
