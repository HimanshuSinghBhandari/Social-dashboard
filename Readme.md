# React + Django Authentication

A simple authentication app with frontend in react and backend in python (django)


## Prerequisites

Ensure you have the following installed before starting:

-  npm
- Python and pip
- Django

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/HimanshuSinghBhandari/Social-dashboard.git
    cd React-Django-authentication
    ```

2. Install frontend dependencies:

    ```bash
    cd frontend
    npm install
    ```

3. Install backend dependencies:

    ```bash
    cd backend
    ```
    create virtural environment and activate it.
    ```bash
    pip install -r requirements.txt
    ```

6. Apply migrations and start the backend server:

    ```bash
    cd backend
    python manage.py migrate
    python manage.py runserver
    ```

7. Start the frontend development server:

    ```bash
    cd frontend
    npm start
    ```

## First time use

Now register the user and then try to log in.

If error is there then try to upadate this code in settings.py
```bash
CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',
    'http://127.0.0.1:3000'
]
```
## Folder Structure

backend
frontend
readme.md

