# ContentCraft AI # 🚀

An AI-powered content generation platform built with the **MERN Stack** and **Google Gemini AI**. Users can generate high-quality content, manage AI usage credits, subscribe to premium plans, and view their content generation history.

---

## 📖 Overview

 AI is a full-stack SaaS application that allows users to generate AI-powered content using OpenAI's GPT models. The application includes user authentication, a credit-based usage system, free trial support, subscription plans with Stripe payments, and content history management.

---

## ✨ Features

### 🔐 Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Password Encryption

### 🤖 AI Content Generation
- Generate AI-powered content
- Multiple content categories
- Select writing tone
- Topic-based generation
- Instant AI responses

### 📊 User Dashboard
- Profile Information
- Credit Usage
- Remaining Credits
- Current Subscription
- Trial Status
- Payment History

### 💳 Subscription System
- 3-Day Free Trial
- Free Plan
- Basic Plan
- Premium Plan
- Stripe Payment Integration
- Payment Verification

### 📜 Content History
- Save generated content
- View previous generations
- Reuse generated content

### ⚡ Credit System
- Credits decrease on each AI request
- Trial credits
- Monthly subscription credits
- Credit usage tracking

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router
- React Query (TanStack Query)
- Axios
- CSS / Tailwind CSS (Optional)

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcrypt
- Mongoose

### Database
- MongoDB

### AI
- OpenAI GPT API

### Payment
- Stripe

---

## 📂 Project Structure

```
contentforge-ai/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── package.json
│   └── server.js
│
├── README.md
└── .env
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/contentforge-ai.git
```

```bash
cd contentforge-ai
```

---

## Backend Setup

```bash
cd server
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

OPENAI_API_KEY=your_openai_api_key

STRIPE_SECRET_KEY=your_stripe_secret_key

CLIENT_URL=http://localhost:3000
```

Run backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd client
```

Install dependencies

```bash
npm install
```

Start frontend

```bash
npm start
```

---

## 🔄 Application Flow

```
Register User
      │
      ▼
3-Day Free Trial
      │
      ▼
Receive Credits
      │
      ▼
Generate AI Content
      │
      ▼
Credits Decrease
      │
      ▼
Credits Exhausted
      │
      ▼
Upgrade Plan
      │
      ▼
Stripe Payment
      │
      ▼
Payment Verification
      │
      ▼
Credits Updated
```

---

## 📊 Subscription Plans

| Plan | Credits | Payment |
|------|---------|----------|
| Trial | 100 Credits | Free |
| Free | 5 Credits | Free |
| Basic | 50 Credits | Paid |
| Premium | 100 Credits | Paid |

---

## 📌 API Endpoints

### Authentication

```
POST /api/auth/register

POST /api/auth/login

GET /api/auth/profile
```

---

### AI

```
POST /api/content/generate

GET /api/content/history
```

---

### Subscription

```
GET /api/plans

POST /api/plans/subscribe

POST /api/plans/upgrade
```

---

### Payments

```
POST /api/payments/create-checkout-session

POST /api/payments/webhook

GET /api/payments/history
```

---

## 📷 Screens

- Home Page
- Pricing Page
- Login
- Register
- Dashboard
- Generate Content
- Content History
- Payment History
- Stripe Checkout

---

## 🔒 Security

- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Environment Variables
- Stripe Payment Verification
- Input Validation

---

## 🚀 Future Improvements

- Google Authentication
- Email Verification
- Forgot Password
- Team Workspace
- AI Image Generation
- AI Chat Assistant
- Dark Mode
- Export Content as PDF
- Multiple AI Models
- Usage Analytics
- Admin Dashboard

---

## 📚 Learning Outcomes

This project demonstrates:

- MERN Stack Development
- REST API Development
- JWT Authentication
- MongoDB Integration
- React Query
- Stripe Integration
- OpenAI API Integration
- SaaS Application Architecture
- Credit-Based Billing System
- Payment Verification
- Protected Routes
- Full-Stack Development

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit changes

```bash
git commit -m "Add new feature"
```

4. Push

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Suresh Kumar**

GitHub: https://github.com/yourusername

LinkedIn: https://linkedin.com/in/yourprofile

---

⭐ If you found this project helpful, please give it a Star on GitHub!