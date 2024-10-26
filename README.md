## Contexto
Criar um conjunto de testes automatizados para o site Sauce Demo.

## Configuração da máquina
  .  |  . | 
:------: | :------: |
Nome do Sistema Operacional | Microsoft Windows 10 Pro |
Versão 10.0.19045 | Compilação 19045 |
Fabricante do sistema | Dell Inc |
Tipo do sistema | PC baseado em X64 |
Processador | Intel(R) Core(TM) i5-10210U CPU @ 1.60GHz, 2112 Mhz) |
Memória Física (RAM) Instalada | 16,0 GB |
Browser | Chrome Versão 126.0.6478.127 (Versão oficial) 64 bits |

## Pré-requisitos

Para clonar e executar este projeto, você precisará de:

- [git](https://git-scm.com/downloads) (usando versão `2.45.2.windows.1` )
- [Node.js](https://nodejs.org/pt/download/package-manager) (usando versão `v20.11.0`)
- npm (usando versão `10.8.2`)
- Visual Studio Code (usando versão `1.91.1`)

**Observação:** Ao instalar o Node.js, o npm é instalado automaticamente.

## Instalação
### Baixar o projeto
1. Crie uma pasta para clonar o projeto
2. Clone este repositório: `git clone <URL_DO_REPOSITORIO>`
3. Navegue até o diretório do projeto: `cd <PASTA_DO_PROJETO>`

### Instalar dependências
Para instalar as dependências de desenvolvimento, execute: `npm install`.
<br>OBS.: Se houver algum problema em instalar as dependências, execute os três comandos na pasta do projeto, respectivamente: 
1. `npm init` 
2. `Npm install cypress -—save-dev`
3. `npm install cypress-cucumber-preprocessor --save-dev`

### Executando os testes
Para executar todos os testes em linha de comando, execute: `npm run headless`
<br>Para executar todos os testes em interface cypress: `npm run intarface`

### Relatório dinâmico dos testes
Para verificar o relatório local, execute: `npm run allure:open` <br>
Para verificar o relatório da última pipeline carregada, **[visite aqui](https://rafatrl.github.io/testeCypress/)**.


## Resultado
Resultado executado com headless: <br>
![result](https://github.com/user-attachments/assets/9b7b59b4-ecf2-4f9e-bd77-6b591d610cc4)
