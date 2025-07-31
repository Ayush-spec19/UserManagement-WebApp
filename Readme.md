# User Management Application

A full-stack User Management application built using **Spring Boot**, **MySQL**, and a **Vanilla JS + HTML/CSS** frontend. It supports complete CRUD operations and connects with a MySQL database.

---

## 🚀 Features

- Add, update, delete, and fetch users
- RESTful API built with Spring Boot
- MySQL database integration
- Simple frontend using HTML, CSS, and JavaScript (Fetch API)

---

## 🛠️ Tech Stack

- **Backend:** Spring Boot, Spring Data JPA, Hibernate
- **Database:** MySQL
- **Frontend:** HTML, CSS, JavaScript (Fetch API)
- **Build Tool:** Maven

---

## ⚙️ Setup Instructions

### 🧩 Backend Setup

1. **Clone the Repository**

    ```bash
    git clone https://github.com/Ayush-spec19/UserManagement-WebApp.git
    cd user-management-app
    ```

2. **Create a MySQL Database**

    ```sql
    CREATE DATABASE user_db;
    ```

3. **Configure `application.properties`**



4. **Run the Application**

    ```bash
    ./mvnw spring-boot:run
    ```

   The backend runs on: `http://localhost:8080`

---

### 🌐 Frontend Setup

1. Navigate to the frontend folder (or root if you saved all files there).

2. Open `index.html` in a browser.

   > Make sure the backend is running before using the UI.

---

## 📬 API Endpoints

| Method | Endpoint           | Description          |
|--------|--------------------|----------------------|
| GET    | `/users`           | Get all users        |
| GET    | `/users/{id}`      | Get user by ID       |
| POST   | `/users`           | Create a new user    |
| PUT    | `/users/{id}`      | Update user by ID    |
| DELETE | `/users/{id}`      | Delete user by ID    |

---

## 🧪 Sample Test (Using curl)

```bash
curl -X POST http://localhost:8080/users -H "Content-Type: application/json" -d '{"name":"John","email":"john@example.com"}'
```

---

## 📁 Project Structure

```
├── src/main/java/com/example/demo
│   ├── controller/UserController.java
│   ├── model/User.java
│   ├── repository/UserRepository.java
│   ├── service/UserService.java
│   └── UserManagementApplication.java
├── src/main/resources/application.properties
├── static/index.html
├── static/script.js
├── static/style.css
└── pom.xml
```

---

## 👨‍💻 Author

Made with ❤️ by Ayush Ojha

---

