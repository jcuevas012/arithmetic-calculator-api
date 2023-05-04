# arithmetic-calculator-api
## Live Demo [Here!!](https://arithmetic-calculator-api-rouge.vercel.app/)

This is a small project which looking to implement some of the best practices that should be taken into consideration when developing REST API such as:

Note: Some points are just recommendations for scaling and were not implemented here because of the time available. those are going to be marked with `*`
# Services Architecture 

![ECS deployment final](https://user-images.githubusercontent.com/13880481/236306566-79f6dd9e-fe0a-453f-a3b1-dbc14be4f3c7.png)


## Pre-install

This project is running using  `docker` and `docker-compose` locally. We need some environment variables which will be place in `.env` for `backend` folder and `.env.local` for frontend, you can find those in each folder
## How to run
### Build Image
`docker-compose build`

### Run Containers frontend, backend, db
`docker-compose up`

### Setup database 
After docker services are running `cd ./backend && npm run db:reset` this will create database and run all migrations and seeds
### Runing Migration
`npm run db:migrate`

### Runing Migration
`npm run db:seeds`

### Runing Test
`npm run test`

### Postman Test
- Pick `calculator-api.postman_collection.json` and import it in Postman

## Tools
- Fronted: React (using server side rendering with Next.js), tailwind, axios, Typescript 
- Backend: Typescript, Express, jsonwebtoken, sequelize, morgan

## Clean Architecture

- The project already has a simple architecture and folder organization based on clean architecture and Domain Driven Design   `application`, `domain`, and `infrastructure`.  All use cases and business logic are under `domain\services` and `domain\models` where other code like `application` and `infrastructure` could be replaced as dependencies if it's needed since using Dependency injection to inject repository to services and services to application controllers.

## CI/CD

In order to deploy this to AWS the project is using a GitHub workflow action that builds a docker image and pushes it to ECR and later is deployed to ECS using a task definition service `.github/workflows/aws-deploy`, for the case of the frontend since using NextJs, the deploy is been execute with Vercel Deployments.


## Security

The backend API is secured under JWT token, each time a user `sign-in/sign-up` return a token which should be sent back in the request `Authorization` header in order to access API resources.

The frontend  App send `Bearer jwt-token on each request since using Next in order to secure the token all react app request to `next/api` which hold the token in the cookies encrypted with 32 length password using [iron-session](https://github.com/vvo/iron-session).

## Testing

- Unit Testing for services and repository

- Also a simple Postman collection file is added to the project.

> **Note**
> *Define test coverage at least 75%

> **Note**
> * implementation handles testing using integration testing making sure the server responds with the correct HTTP code and data using supertest and inmemory postgres data base.
> Create a stub database for testing in order to have a separate environment


## Error Handler.

- For this case write out a simple error handler system base on classes `domain/entities/errors`, where and relaying on express `express-async-errors` so that I can throw errors direct from `controller`, `repositories` or `services` using async/await when is needed

- CustomError abstract class used as a template for mapping error object structure response

> **Note**
> * Other tool that could help with this in a simple way https://hapi.dev/module/boom/api/?v=10.0.1

## Input Validation

- To validate input data to route controllers, a validator middleware was added relaying on express validator to validate body payload.

- Having a validator in `infrastructure`, so it could be reusable by multiple controllers if needed.

## Resilient

I consider resiliency API an important topic since production API should be ready and online but we have to make sure for this simple case to create a separate endpoint to check the health and return 200 if API is up and running.

- `/health` endpoint in order to check when API is available which is used by the AWS cluster service health check.

> **Note**
> * Graceful shutdowns, it's something that would take care of as well and make sure that processes or connections get close if the apps crash, Useful simple lib:https://github.com/hunterloftis/stoppable

## Logger

- For this example, we just [Morgan](https://github.com/expressjs/morgan) for service http logs and console.log for server erros errors and return a friendly message for the client user.

> **Note**
> * We could update the implementation with something more robust like Winston with AWS Cloud Watch Integration

# Code Reusability

- Some utilities used throw are placed on shared so it would be accessible by another part of the API in the case is needed under the `infrastructure` folder

# Documentation

- As for how to use the API, I added a Postman collection file with the API's use cases so the user can get familiar with how to request and what the endpoints are expecting.g