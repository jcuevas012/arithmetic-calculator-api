# arithmetic-calculator-api
# Pre-install

This project is running using  `docker` and `docker-compose` locally. We need some environment variables which will be place in `.env` for `backend` folder and `.env.local` for frontend, you can find those in each folder

### Build Image
`docker-compose build`

### Run Containers frontend, backend, db
`docker-compose up`


This is a small project which looking to implement some of the best practices that should be taken into consideration when developing REST API such as:

Note: Some points are just recommendations for scaling and were not implemented here because of the time available. those are going to be marked with `*`

# How to run

`npm intall`

In order to run it locally in development mode
`npm run dev`


Runing Test
`npm run test`

- Pick `Properties Postman Collection.postman_collection` and import it in Postman

# Error Handler.

- For this case write out a simple error handler system base on classes, where and relaying on express `express-async-errors` so that I can throw errors direct from controllers using async/await when is needed

- CustomError abstract class used as a template for mapping error object structure response

* There is a tool that could help with this in a simple way https://hapi.dev/module/boom/api/?v=10.0.1

# Input Validation

- To validate input data to route controllers, a validator middleware was added relaying on express validator to validate body payload.

- Having a validator in a shared place so it could be reusable by multiple controllers if needed

# Testing

- This implementation handles testing using integration testing making sure the server responds with the correct HTTP code and data.
- Also a simple Postman collection file is added to the project.

* Unit Testing for services and repository could be possible since are separate classes that could be tested independently since services receive the repository using a kind of simple Dependency Injection. The same thing could happen with the repository if needed since it's a BaseRepository abstract in case we want to extract ORM code, for this case we rely on the typeORM repository.

* Create a stub database for testing in order to have a separate environment

# Clean Architecture

- The project already has a simple architecture and folder organization is really common in express and node js, even though is still okay I will like to promote Hexagonal architecture and for that reason, I made routes to receive service by Injection and service data-source repository as well.

* In order to scale in this case controller could be split into separate file function

* Since this service only handles property context could be structured like: (application, domain, infrastructure, use-case)

# Resilient

I consider resiliency API an important topic since production API should be ready and online but we have to make sure for this simple case to create a separate endpoint to check the health and return 200 if API is up and running

- `/health` endpoint in order to check when API is available

* Graceful shutdowns, it's something that would take care of as well and make sure that processes or connections get close if the apps crash, Usuful simple lib:https://github.com/hunterloftis/stoppable

# Logger

- For this example, we just console.log for service errors and return a friendly message for the client user, because simple options could be something simple like `express-logger` or `Winston` so that could be easy to debug

# Code Reusability

-some utilities used throw are placed on shared so it could be accessible by another part of the API in the case is needed

# Documentation

- As for how to use the API, I added a postman collection file with the API's use cases so the user can get familiar with how to request and what the endpoints are expecting