# Anotacoes do curso de testes unitários da Udemy:

- O comando para rodar o karma no navegador é _ng test_
- O comando para abrir o arquivo de couverage do karma é o _ng test --code-coverage_

## Súite de testes - describe:

A função do bloco "describe" em Jasmine (e em outras estruturas de teste) é agrupar um conjunto de casos de teste relacionados ou especificações em um único bloco, para que possam ser executados juntos e gerenciados de forma mais eficiente.

O bloco "describe" é usado para descrever uma funcionalidade ou comportamento específico a ser testado, geralmente representado por uma unidade de código, como um componente, serviço ou diretiva no contexto de um aplicativo Angular.

Dentro de um bloco "describe", vários casos de teste podem ser definidos usando a função "it", que define uma única especificação ou comportamento a ser testado. Cada caso de teste pode ser executado individualmente ou em conjunto com outros casos de teste dentro do mesmo bloco "describe".

O bloco "describe" também pode conter hooks de ciclo de vida, como "beforeEach" e "afterEach", que são executados antes e depois de cada caso de teste, respectivamente. Esses hooks são usados para configurar o ambiente de teste, como a criação de uma instância de componente ou serviço, antes que o caso de teste seja executado e para limpar ou restaurar o ambiente de teste após a execução do caso de teste.

Em resumo, o bloco "describe" é uma forma de agrupar casos de teste relacionados em um único bloco e organizar a estrutura de teste de forma clara e lógica. Ele ajuda a tornar os testes mais gerenciáveis e fáceis de entender, especialmente quando o número de casos de teste é grande ou complexo.

## Especificacoes de testes - it:

O it é uma função global no framework de testes Jasmine e é usada para descrever um teste unitário. A sintaxe básica do it é a seguinte:

```typescript
it("descrição do teste", () => {
  // corpo do teste
});
```

O primeiro argumento da função it é uma descrição do teste, que deve ser uma string que explica brevemente o que o teste está verificando. O segundo argumento é uma função anônima que contém o corpo do teste, ou seja, o código que será executado para verificar se o comportamento do sistema está correto.

Dentro da função anônima do it, é comum usar outras funções globalmente disponíveis do Jasmine, como expect e toBe, para verificar as expectativas do teste. O expect é usado para criar uma expectativa, ou seja, uma afirmação que deve ser verdadeira para que o teste passe. O toBe é usado para comparar o resultado esperado com o resultado real. Por exemplo:

```typescript
it("deve somar dois números", () => {
  expect(1 + 1).toBe(2);
});
```

Se a soma de 1 + 1 for igual a 2, o teste passa. Caso contrário, o teste falha. O it é uma maneira simples e poderosa de escrever testes unitários em um projeto de software.

## Antes de cada teste - beforeEach:

O beforeEach é uma função de ciclo de vida do Jasmine e é executada antes de cada teste em um bloco describe. É útil para configurar o estado inicial necessário para o teste, como criar uma instância de componente ou inicializar um serviço.

Por exemplo, se você tiver um teste que use um componente Angular, poderá criar uma instância do componente no beforeEach para que ela esteja disponível para todos os testes no bloco describe. Isso reduz a duplicação de código e torna seus testes mais legíveis.

## Antes de todos - beforeAll:

O beforeAll() é uma função de configuração dos testes unitários em JavaScript/TypeScript, usada para definir um conjunto de ações que devem ser executadas antes de todos os testes.

Essa função é fornecida pelas bibliotecas de teste, como o Jasmine e o Jest, e é usada para definir uma configuração global para todos os testes em um arquivo ou suíte de testes.

Geralmente, o beforeAll() é usado para inicializar recursos compartilhados entre vários testes, como estabelecer uma conexão com o banco de dados, criar uma instância do objeto sob teste, ou configurar o ambiente de testes. Isso permite que os testes sejam executados de forma mais rápida e eficiente, evitando a repetição de tarefas desnecessárias.

O beforeAll() é executado apenas uma vez, antes do início dos testes, e não é executado novamente até que todos os testes tenham sido concluídos.

## Configurando os módulos pós-teste - TestBed:

O Testbed é uma classe de utilidade fornecida pelo Angular para escrever testes de unidade e integração para seus componentes e serviços. Ele fornece um ambiente em tempo de execução para seus testes que é semelhante ao ambiente em tempo de execução em que seus componentes e serviços são executados em um aplicativo Angular.

O Testbed permite que você compile e instancie seus componentes e serviços para testá-los em um ambiente de teste isolado, sem a necessidade de uma renderização de tela completa ou execução de um servidor back-end real. Com o Testbed, você pode fornecer dependências simuladas ou stubs para seus componentes e serviços para isolar o comportamento específico que está sendo testado.

Além disso, o Testbed é altamente configurável e pode ser personalizado para suas necessidades específicas de teste. Ele fornece vários métodos de configuração para personalizar o ambiente de teste, como a definição de módulos personalizados, a criação de stubs de serviço e a configuração de provedores de serviço.

## Como focar em um único teste:

Para focar em um único arquivo de teste é necessário colocar a letra 'f' antes do describe:
Por exemplo:

```typescript
// Importa as funções necessárias para executar o teste
import { ComponentFixture, TestBed } from "@angular/core/testing";

// Importa o componente que está sendo testado
import { DebuggerTestsComponent } from "./debugger-tests.component";

// Define uma suíte de testes para o componente
fdescribe("DebuggerTestsComponent", () => {
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
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
```

## Como focar em um único it:

- É só colocar um 'f' na frente do it

## Como executar os testes de somente 1 arquivo:

```bash
ng test --include **/nome-do-arquivo-de-teste.component.spec.ts
```

## Jasmine Matchers:

Jasmine Matcher é uma função que recebe um valor para ser testado e retorna um valor booleano indicando se o valor corresponde ao valor esperado. Eles são usados para testar se o comportamento do código está correto e se as expectativas estão sendo cumpridas. Por exemplo, é possível usar o matcher toBe para testar se o valor de uma variável é exatamente igual a outro valor esperado. Existem vários matchers disponíveis no Jasmine que ajudam a escrever testes de maneira mais clara e concisa.

### Alguns dos jasmine matchers:

- toBe(value): verifica se o valor do objeto é estritamente igual ao valor esperado.
- toEqual(value): verifica se o valor do objeto é igual ao valor esperado.
- toBeTruthy(): verifica se o valor do objeto é true.
- toBeFalsy(): verifica se o valor do objeto é false.
- toContain(value): verifica se um array ou string contém um determinado valor.
- toThrow(): verifica se uma função lança uma exceção.
- toHaveBeenCalled(): verifica se uma função foi chamada.
- toHaveBeenCalledWith(args): verifica se uma função foi chamada com argumentos específicos.
- toMatch(regexp): verifica se uma string corresponde a uma expressão regular.
- toBeInstanceOf(Class): verifica se um objeto é uma instância de uma determinada classe.
