Next.js Login and Signup Project
<img src="https://img.shields.io/badge/Next.js-15.2.1-blue" alt="Next.js" />
<img src="https://img.shields.io/badge/TypeScript-5.0.0-blue" alt="TypeScript" />
<img src="https://img.shields.io/badge/MongoDB-6.0.0-blue" alt="MongoDB" />
<img src="https://img.shields.io/badge/bcrypt-5.0.0-blue" alt="bcrypt" />

A modern Login and Signup system built with Next.js, TypeScript, and MongoDB. This project demonstrates how to implement user authentication with password hashing using bcrypt.

Features
User Authentication:

Login with email and password.

Signup with email and password.

Password Hashing:

Passwords are securely hashed using bcrypt.

Database Integration:

Uses MongoDB to store user data.

Modern UI:

Built with Next.js and Tailwind CSS (optional).

Type Safety:

Fully typed with TypeScript for better developer experience.

Tech Stack
Frontend:

Next.js

TypeScript

Tailwind CSS (optional)

Backend:

Next.js API Routes

MongoDB

bcrypt (for password hashing)

Tools:

ESLint

Prettier

Getting Started
Follow these steps to set up the project locally.

Prerequisites
Node.js (v18 or higher)

MongoDB (local or cloud instance)

Git

Installation
Clone the repository:

bash
Copy
git clone https://github.com/your-username/nextjs-login-signup.git
cd nextjs-login-signup
Install dependencies:

bash
Copy
npm install
Set up environment variables:
Create a .env.local file in the root directory and add your MongoDB connection string:

plaintext
Copy
MONGODB_URI=mongodb://localhost:27017/nextjs-auth
Run the development server:

bash
Copy
npm run dev
Open the app:
Visit http://localhost:3000 in your browser.

Project Structure
Copy
nextjs-login-signup/
├── src/
│   ├── app/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── signup/
│   │   │   └── page.tsx
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── api/
│   │   ├── login/
│   │   │   └── route.ts
│   │   ├── signup/
│   │   │   └── route.ts
│   ├── lib/
│   │   └── db.ts
│   ├── types/
│   │   └── global.d.ts
│   └── styles/
│       └── globals.css
├── .env.local
├── .eslintrc
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
API Endpoints
POST /api/login:

Authenticates a user.

Request Body:

json
Copy
{
  "name": "user@example.com",
  "password": "password123"
}
Response:

json
Copy
{
  "message": "Login successful"
}
POST /api/signup:

Registers a new user.

Request Body:

json
Copy
{
  "name": "user@example.com",
  "password": "password123"
}
Response:

json
Copy
{
  "message": "User created successfully"
}
Screenshots
Login Page
Login Page

Signup Page
Signup Page

Dashboard
Dashboard

Contributing
Contributions are welcome! Follow these steps:

Fork the repository.

Create a new branch:

bash
Copy
git checkout -b feature/your-feature-name
Commit your changes:

bash
Copy
git commit -m "Add your feature"
Push to the branch:

bash
Copy
git push origin feature/your-feature-name
Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Next.js Documentation

MongoDB Documentation

bcrypt Documentation

Contact
If you have any questions or feedback, feel free to reach out:

Name: Roshan Sharma

Email: hackerroshan58@gmail.com

GitHub: roshanabcd

Enjoy the project! 🚀# nextjs-login-signup
