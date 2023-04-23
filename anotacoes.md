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

## Antes de cada teste - beforeEach:

## Antes de todos - beforeAll:

## Configurando os módulos pós-teste - TestBeb:
