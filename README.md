# Introdução

Este projeto é uma ferramenta que visa, salvar e listar transferências financeiras, aplicando as devidas
taxas de acordo com o valor a ser transferido e sua respectiva data de agendamento.

# Começando

Para rodar o projeto:

1. Após clonar o repositório, abra sua IDE e clique em File (canto superior esquerdo).
2. Clique na opção "Open", navegue até a pasta onde se encontra o projeto e clique em "OK"
3. Agora é necessário apenas seguir o caminho abaixo:
   financialtransfer/main/java/avaliacao/com/AvaliacaoApplication.java.
   e rodar a classe main do projeto (Ctrl + Shift + F10 ou clicar com o botão direito do mouse sobre
    a classe e em seguida pressionar a opção "Run")
4. Se tudo correu bem, o back end vai estar rodando.
5. Para rodar o front end, abra o VS Code, clique no ícone "Explorer" (canto superior esquerdo)
6. Logo após clique em "Open Folder" e selecione a pasta do projeto.
7. Abra um terminal e digite o seguinte comando: "npm start".
8. Se tudo correu bem. o front end vai estar rodando, basta abrir o seu navegador de web e digitar na barra
de endereço "localhost:4200"

# Decisões arquiteturais

- O projeto foi desenvolvido toda parte de back end em linguagem JAVA, banco de dados em memória
H2 e ferramenta de automação Maven. A parte de front end foi usado Angular, por ser uma tecnologia a qual
abrange diversas linguagens de programação, possibilitando assim uma boa flexibilidade na codificação.

# Porta

- financialtransfer: 8080
- financialtransfer_frontend: 4200