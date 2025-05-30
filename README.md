## 🛠 Project Setup Documentation

### 📦 Project Name: `fresh-harvests-website`

---

### ✅ How to Run the Project Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/jannatul-akhi/fresh-harvests-website
   cd online-shop-frontend
   ```

2. **Install dependencies**:
   Ensure you have Node.js (v18 or higher) and npm installed.

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add the necessary environment variables (as required by API/auth integration).

   Example:

   ```env
   NEXT_PUBLIC_API_BASE_URL=https://your-api-url.com/api/v1
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_secret_key
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

### 🚀 Steps to Build and Deploy the Application

#### Build for production:

```bash
npm run build
```

#### Start the production server:

```bash
npm start
```

This will start the optimized Next.js production server on port 3000 (default).

#### Deployment Options:



- **Vercel (Recommended for Next.js)**:

  1. I have deployed my code in Vercel
  2. Go to Live link: https://fresh-harvests-website-phi.vercel.app/




### 📁 Folder Structure Overview

```
online-shop-frontend/
├── src/                 # Hold the full project
├── components/          # Reusable UI components
├── pages/               # Next.js pages (routes)
├── public/              # Static assets
├── styles/              # Tailwind and global styles
├── redux/               # Redux functions/helpers
├── tailwind.config.ts   # Tailwind configuration
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

---

### 🧪 View:

Github Link: https://github.com/jannatul-akhi/fresh-harvests-website
Live Link: https://fresh-harvests-website-phi.vercel.app/



---
