## 🛠 Project Setup Documentation

### 📦 Project Name: `online-shop-frontend`

---

### ✅ How to Run the Project Locally

1. **Clone the repository**:

   ```bash
   git clone <your-repo-url>
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

You can deploy this project using platforms like:

- **Vercel (Recommended for Next.js)**:

  1. Push the code to GitHub.
  2. Go to [vercel.com](https://vercel.com), sign in, and import the GitHub repository.
  3. Add your environment variables in Vercel settings.
  4. Click **Deploy**.

- **Other options**:

  - Netlify (using Next.js adapter)
  - Docker
  - Custom VPS with Node.js and reverse proxy (e.g., NGINX)

---

### 📁 Folder Structure Overview

```
online-shop-frontend/
├── components/          # Reusable UI components
├── features/            # RTK Query slices & features
├── pages/               # Next.js pages (routes)
├── public/              # Static assets
├── styles/              # Tailwind and global styles
├── utils/               # Utility functions/helpers
├── .env.local           # Local environment variables
├── tailwind.config.ts   # Tailwind configuration
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

---

### 🧪 Testing (Optional)

- Currently manual testing is done during development.
- For unit/integration testing, you can use tools like **Jest**, **React Testing Library**, etc.

---

Let me know if you want me to generate a complete `README.md` file with badges, descriptions, and contributor sections.
