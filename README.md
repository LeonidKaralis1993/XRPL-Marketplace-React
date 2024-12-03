# Moerphous

<div align="center">

![Typing](https://badgen.net/npm/types/prop-types)
[![Netlify Status](https://api.netlify.com/api/v1/badges/963bf363-ff9f-4605-9182-b531bcd674bf/deploy-status)](https://app.netlify.com/sites/moerphous/deploys)
[![Demo on Netlify](https://badgen.net/badge/icon/Netlify/green?icon=slack&label=moerphous)](https://moerphous.netlify.app/)

</div>

### Running locally with NPM

- Fork/Clone the repo:

```sh
git clone git@github.com:moerphous/moerphous.git
```

- Open the newly created directory:

```sh
cd moerphous
```

- Install the required dependencies:

```sh
npm install
```

In order to run the project locally or build for production use, you need to set the following environment variable to connect with the server: 

```sh
export REACT_APP_SERVER_URL=http://localhost:8000/api/v1
```

- Now, you can run the client:

```sh
npm start
```

Navigate to [http://localhost:3000](http://localhost:3000) to explore the landing page.

## Deployment

To deploy the client, you will need to set the following environment variable that help the client connects with the server.

```sh
* REACT_APP_SERVER_URL - Your deployed server APIs url.
```

## Core Libraries

- Create React App

- React

- React Router 6

- Material UI

- Redux

## Deployment

[![Deploy on Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/moerphous/moerphous)

[![Deploy on Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/moerphous/moerphous)

## Deploy locally with Compose v2

Navigate to [the server repository](https://github.com/moerphous/moerphous-server) and follow the instructions listed in [this section](https://github.com/moerphous/moerphous-server#deploy-locally-with-compose-v2) to run both the client and the server in docker containers.

## License

This project and the accompanying materials are made available under the terms and conditions of the [`MIT LICENSE`](https://github.com/moerphous/moerphous/blob/main/LICENSE).
