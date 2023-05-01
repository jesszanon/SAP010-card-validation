# Cartão de Crédito Válido

## 1. Introdução

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Resumo do projeto

Foi desenvolvido um aplicativo WEB para validar um cartão de crédito e liberar como benefício ao usuário, 7 dias grátis para experimentar uma academia totalmente sustentável. Os principais usuários são pessoas que buscam uma academia que contempla todo conforto além de exercícios físicos. Um lugar que ofereça momento de relaxamento e também de estética. Pessoas com tempo corrido que possam fazer tudo num único espaço.

Essa questão de poder testar por 7 dias gratuitamente evita a pessoa usar o cartão de crédito e depois ter que estornar, evita a dor de cabeça de ter que ligar para o banco e pedir para cancelar. Nesse formato, a pessoa precisa apenas validar o seu cartão e não precisa se comprometer em deixar seus dados pessoas. E, caso não queira fazer a inscrição após os 7 dias, basta apenas avisar a recepção da academia que a mesma cancela sem dor de cabeça.

### 3. Os objetivos gerais deste projeto são os seguintes

* Trabalhar com base em um boilerplate, a estrutura básica de um projeto em diferentes
  pastas (através de módulos em JS).
* Conhecer as ferramentas de manutenção e melhoria do código (linters e testes
  unitários).
* Aprenda sobre objetos, estruturas, métodos e iteração (loops) em JavaScript
* Implementar controle de versão com git (e a plataforma github)

## 4. Marco: Critérios de Aceitação Mínimos do Projeto

Esses são os requisitos que seu projeto deve atender para garantir que
seu trabalho atenda aos objetivos principais.

**1. Uma interface que deve permitir ao usuário:**  

* Inserir o número que desejamos validar. Use apenas caracteres
  numéricos (dígitos) no cartão para validar [0-9].
* Constatar se o resultado é válido ou não.
* Ocultar todos os dígitos do número do cartão, excetuando os últimos 4
  caracteres.
* Não deve poder inserir um campo vazio.

