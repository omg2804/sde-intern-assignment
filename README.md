# SDE Intern Assignment - Nest.js API

A **Nest.js** API project with **PostgreSQL** integration, JWT-based authentication, and unit testing. This project implements CRUD operations for users, with proper validation, error handling, and authentication.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

---

## Features
- CRUD operations for `Users`
- JWT-based authentication and authorization
- Input validation using DTOs
- PostgreSQL database integration via TypeORM
- Unit tests for services and controllers
- Clean, modular, and maintainable code

---

## Tech Stack
- **Backend:** Nest.js, TypeScript
- **Database:** PostgreSQL
- **ORM:** TypeORM
- **Authentication:** JWT, Passport.js
- **Testing:** Jest, @nestjs/testing
- **Version Control:** Git, GitHub

---

## Getting Started

### Prerequisites
- Node.js >= 18
- npm >= 9
- PostgreSQL running locally or via a cloud service

### Installation
```bash
git clone https://github.com/your-username/sde-intern-assignment.git
cd sde-intern-assignment
npm install
```
---

## Environment Variables
```bash
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
JWT_SECRET=your_jwt_secret
```
---

## Running the Application
```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod
```
---
## Testing
```bash
npm run test
```
All critical services and controllers are covered, including:

AuthService

AuthController

UsersService

UsersController

---
## Project Structure
```bash
src/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   ├── auth.service.ts
│   ├── jwt.strategy.ts
├── users/
│   ├── users.controller.ts
│   ├── users.service.ts
│   ├── users.entity.ts
│   ├── users.module.ts
│   ├── dto/
│   │   ├── create-user.dto.ts
│   │   └── update-user.dto.ts
│   │   └── login-user.dto.ts
├── app.module.ts
├── app.controller.ts
├── app.servic.ts
└── main.ts
```
---
## Contributing

1.Fork the repository

2.Create a feature branch (git checkout -b feature/xyz)

3.Commit your changes (git commit -m 'feat: add xyz')

4.Push to the branch (git push origin feature/xyz)

5.Open a Pull Request

---
## Author
 **Om Gaikwad**
- GitHub: [https://github.com/omg2804]
- LinkedIn: [https://www.linkedin.com/in/om-gaikwad]
- Email: [gaikwadom992@gmail.com]
