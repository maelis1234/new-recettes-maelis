# 🧁 Recettes de Maëlis 🍴

> A web app to browse delicious recipes, served with a bold neo-brutalist UI and a clean, modern tech stack.

---

## ⚙️ Tech Stack

| Technology             | Role                                                       |
| ---------------------- | ---------------------------------------------------------- |
| **Next.js 15**         | React-based fullstack framework using App Router           |
| **TypeScript**         | Strong typing to avoid production chaos                    |
| **Tailwind CSS**       | For styling with speed and precision (neo-brutalist vibes) |
| **Firebase Firestore** | NoSQL database to store recipes, real-time capable         |
| **Vercel**             | Lightning-fast deployment                                  |
| **Dark mode**          | Of course it’s included. Taste matters.                    |

---

## 🚀 Features

- 🔍 Browse all recipes
- 📄 View full recipe details
- ✨ Fully responsive & dark mode friendly
- 🔒 Firebase integration using secure env variables

---

## 🔧 Environment Variables

Create a `.env.local` file at the root of your project and paste in:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```
