# 📬 InboxJobs

**InboxJobs** is a web application for managing and tracking job offers.  
The project includes:
- A **Django REST API backend** for handling requests and logic
- A **React frontend** built with **Vite** for fast and modern UI
- A **Tailwind CSS frontend framework** for responsive and elegant styling
- A **PostgreSQL database** for reliable data storage
- A **Redis cache** for fast data access
- A **Nginx server** to serve the frontend efficiently in production

The entire application is fully dockerized and can be launched using **Docker Compose**.

---

## 🚀 Prerequisites

Before getting started, make sure you have the following installed:

| Tool | Recommended Version |
|------|----------------------|
| **Docker Engine** | ≥ 24.x |
| **Docker Compose (v2)** | ≥ 2.39 |

> 💡 **Docker Desktop** can be used on macOS and Windows for an easier setup, but it’s optional.  
> This project runs on **Linux**, **macOS**, and **Windows**.

---

## 📁 Project Structure

```

InboxJobs/
├── backend/
│   ├── Dockerfile.dev
│   ├── Dockerfile.prod
│   ├── requirements.txt
│   └── InboxJobs/
│       ├── manage.py
│       └── ...
│
├── frontend/
│   ├── Dockerfile.dev
│   ├── Dockerfile.prod
│   └── inboxjobs/
│       ├── index.html
│       └── ...
│
├── docker-compose.yml
└── .env

````

---

## ⚙️ Configuration

Create a `.env` file at the root of the project (same level as `docker-compose.yml`):

```bash
POSTGRES_DB=inboxjobs
POSTGRES_USER=inboxuser
POSTGRES_PASSWORD=inboxpass
````

---

## 🧱 Running the Project

### 🔧 Development Mode

Run the **backend** and **frontend** with hot reload enabled:

```bash
docker compose --profile dev up --build
```

**Access:**

* Frontend → [http://localhost:3000](http://localhost:3000)
* Backend → [http://localhost:8000](http://localhost:8000)

---

### 🏗️ Production Mode

Run the optimized, built version (using Nginx and Django without reload):

```bash
docker compose --profile prod up --build
```

**Access:**

* Application → [http://localhost:3000](http://localhost:3000)

---

## 🧩 Docker Profiles

| Profile        | Description                                    | Containers Launched                            |
| -------------- | ---------------------------------------------- | ---------------------------------------------- |
| `dev`          | Development mode (hot reload, mounted volumes) | `backend-dev`, `frontend-dev`, `db`, `redis`   |
| `prod` or `''` | Optimized production mode                      | `backend-prod`, `frontend-prod`, `db`, `redis` |

> If no profile is specified, `prod` is used by default.

---

## 💾 Database

* Container: `postgres_db`
* Exposed port: `5432`
* Data is persisted using the `postgres_data` volume

Local connection:

```
host: localhost
port: 5432
user: ${POSTGRES_USER}
password: ${POSTGRES_PASSWORD}
db: ${POSTGRES_DB}
```

---

## ⚙️ Useful Commands

Create a Django superuser:

```bash
docker compose exec backend-dev python manage.py createsuperuser
```

Connect to the database:

```bash
docker exec -it postgres_db psql -U ${POSTGRES_USER} -d ${POSTGRES_DB}
```

Check Redis keys:

```bash
docker exec -it redis redis-cli
```

---

## 🧠 Author

**Robin Landraud**
AI, Fullstack, and Graphics Computing Developer
💼 [GitHub](https://github.com/RobinLandraud)

---