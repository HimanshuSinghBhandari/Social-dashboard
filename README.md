# Social-dashboard
## 
I developed a miniature social media dashboard using Django for the backend and React for the frontend.

# Django Authentication and Login & Signup
First off, I built a whole new social media dashboard starting from scratch, beginning with creating a simple yet friendly sign-up form. On this page, folks fill out necessary details like their email address, username, and password. To keep things safe, I made sure each username is unique throughout the entire platform, and passwords need at least eight characters. Plus, I took steps to protect your email addresses because privacy matters!

Using Python's Django framework, I connected these forms to the back end. When you submit your sign-up info, Django checks everything carefully before adding you to the system. It also keeps track of your personal details securely in a database, utilizing reliable methods to store crucial user data safely.

Django's strength lies in handling data flow from the front end to the back end. As soon as you enter something on the website, Django takes care of it behind the scenes, keeping your information intact and protected. And thanks to Django's thorough verification and authentication techniques, logging in becomes a breeze too.

With Django powering the back end and React driving the front end, I combined two potent forces to deliver a harmonious user experience. My goal was to ensure ease of use, top-notch security, and outstanding performance, proving that modern technology can come together beautifully in web development.

## 
# Features
To enhance ours app's usability, I added some extra features that let users adjust their experience and see important info clearly. One new option lets people switch between light and dark modes for better reading and comfort while using it for longer periods. Additionally, I included detailed graphs within the main screen so users can understand how their platform performs over time, helping them make smart choices about their strategy.

A unique aspect of my app is showing all the followers someone has across popular social networks—Facebook, Instagram, Twitter, and YouTube—in one place. This helps users get a complete picture of their audience size and interaction levels.

Initially, I used fake data to create the dashboard's design and test its functionality. After perfecting the look and feel, I switched to a "mock" API (a simulation) that mimics actual data retrieval and processing. Using JSON format, this API smoothly connects with React components, making sure the displayed information stays updated dynamically.

Through careful iteration, I created a rich and engaging social media dashboard where users can efficiently monitor and improve their online presence. Integrating mock data and APIs streamlines development and guarantees a smooth and enjoyable user experience.

## Prerequisites

Ensure you have the following installed before starting:

-  npm
- Python and pip
- Django

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/HimanshuSinghBhandari/Social-dashboard
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
