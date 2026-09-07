# 🚗 Projeto 04 - Sistema de Controle de Estacionamento

Projeto desenvolvido para a disciplina de **Técnicas de Programação II**, utilizando o padrão de projeto **GoF Criacional - Singleton**.

## 📚 Informações Acadêmicas

- **Instituição:** FATEC
- **Curso:** Desenvolvimento de Software Multiplataforma (DSM)
- **Disciplina:** Técnicas de Programação II
- **Professor:** Vinícius Heltai Pacheco
- **Projeto:** Projeto 04 - Estacionamento
- **Padrão de Projeto:** GoF Criacional - Singleton

## 🎯 Objetivo

Desenvolver um Sistema de Controle de Estacionamento em JavaScript capaz de gerenciar a entrada e a saída de veículos em um estacionamento com capacidade máxima de **10 vagas**.

O gerenciamento é realizado por uma única instância da classe `GerenciaEstacionamento`, aplicando o padrão de projeto Singleton.

## 🧩 Padrão Singleton

O projeto utiliza o método:

```javascript
GerenciaEstacionamento.getInstance()
```

Esse método garante que todas as partes da aplicação utilizem a mesma instância do gerenciador do estacionamento.

O funcionamento do Singleton também é demonstrado no console através da comparação entre duas referências:

```javascript
const estacionamento1 = GerenciaEstacionamento.getInstance();
const estacionamento2 = GerenciaEstacionamento.getInstance();

console.log(estacionamento1 === estacionamento2);
```

Resultado:

```text
true
```

## ⚙️ Funcionalidades

- Entrada de veículos;
- Saída de veículos pela placa;
- Armazenamento da placa e modelo;
- Capacidade máxima de 10 veículos;
- Controle de vagas ocupadas;
- Controle de vagas disponíveis;
- Bloqueio de placas duplicadas;
- Validação dos campos;
- Listagem dos veículos estacionados;
- Atualização automática das informações do estacionamento;
- Mensagens de sucesso e erro;
- Botão para limpar os campos;
- Registro das principais operações no console;
- Demonstração do funcionamento do Singleton.

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub

## 📁 Estrutura do Projeto

```text
Projeto04-Estacionamento/
│
├── index.html
├── script.js
└── README.md
```

## ▶️ Como Executar

1. Faça o download ou clone o projeto.
2. Abra a pasta do projeto.
3. Abra o arquivo `index.html` em um navegador.
4. Informe a placa e o modelo do veículo.
5. Utilize os botões **ENTRAR**, **SAIR** e **LIMPAR** para controlar o estacionamento.

## 🚘 Regras do Estacionamento

O estacionamento possui **10 vagas**.

Não é permitida a entrada de dois veículos com a mesma placa. Quando todas as vagas estiverem ocupadas, o sistema informa:

```text
Estacionamento Lotado!
```

A saída é realizada informando a placa do veículo estacionado.

## 👨‍💻 Autor

**Maciel dos Santos**

Projeto acadêmico desenvolvido para a disciplina de Técnicas de Programação II.