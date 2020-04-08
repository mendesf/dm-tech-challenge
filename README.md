# Delivery Much Tech Challenge

A API retorna uma lista de receitas, utizando o Recipe Puppy para buscar as receitas e o GIPHY para adicionar um GIF a cada receita encontrada.

## Pré-requisito
[Node.js](https://nodejs.org/pt-br/download/)

## Opcional
[Docker](https://docs.docker.com/get-docker/)

## Instalação
Abra o seu terminal, na pasta do projeto execute o comando:

#### Passo 1
```bash
npm install
```
#### Passo 2
Ainda na raiz do projeto, existe o arquivo ```.env.example```:
```
PORT=3000
RECIPE_PUPPY_API_URL=http://www.recipepuppy.com/api
GIPHY_API_URL=https://api.giphy.com/v1/gifs
GIPHY_API_KEY=YOUR_GIPHY_API_KEY
````
Faça uma cópia deste arquivo e a renomeie para ```.env``` substiundo o que for necessário.

[Como obter uma Key para usar a API do GIPHY](https://developers.giphy.com/docs/api#quick-start-guide)

#### Passo 3 (Opcional)
Primeiro, execute o Docker, depois com o seu terminal aberto na pasta do projeto, execute:
```bash
docker build -t seu_usuário_dockerhub/delivery-much .
```

## Utilização
Após tudo instalado, caso você tenha optado por instalar o Docker, é só executar:
```bash
docker run --name container_name -p 8080:3000 -d seu_usuário_dockerhub/delivery-much 
```

A aplicação estará disponível no ip atribuído a rede criada pela Docker seguido pelo porta informada no comando acima.
Exemplo:
```
http://192.168.99.100:8080/api/recipes?i={ingrediente1},{ingrediente2}
```

Se não, utilize o comando:
```bash
npm start
```

Seguindo a mesma lógica, a aplicação estará disponível em ```localhost:PORT``` onde ```PORT``` é a porta configurada no arquivo ```.env```. Exemplo:
```
http://localhost:3000/api/recipes?i={ingrediente1},{ingrediente2}
```

Para executar os testes, excute o comando: 
```bash
npm test
```

## Esperando aquele feedback! :see_no_evil:
