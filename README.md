# ⚡ Zappy

**The premium URL shortener for modern teams**

A lightning-fast, secure URL shortening service built with Next.js 16, React 19, Prisma, and PostgreSQL. Zappy provides an elegant interface to create short, shareable links with a modern, responsive design.

![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Prisma](https://img.shields.io/badge/Prisma-6.18.0-2D3748)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC)

## ✨ Features

- **⚡ Lightning Fast**: Instant URL shortening with optimized performance
- **🔒 Secure & Private**: Built with security best practices
- **🎨 Modern UI**: Beautiful, responsive design with premium aesthetics
- **📊 Analytics Ready**: Database structure ready for analytics expansion
- **🚀 Production Ready**: Built on enterprise-grade technologies
- **💾 Persistent Storage**: PostgreSQL database with Prisma ORM
- **📱 Responsive**: Works seamlessly on desktop, tablet, and mobile

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Frontend**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **ID Generation**: [nanoid](https://github.com/ai/nanoid)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 20.x or higher
- pnpm (recommended) or npm
- PostgreSQL database

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/shahriar-ridom/zappy-url-shortener.git
cd zappy
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
```

Replace `USER`, `PASSWORD`, `HOST`, `PORT`, and `DATABASE` with your PostgreSQL credentials.

### 4. Run database migrations

```bash
pnpm prisma migrate dev
```

### 5. Generate Prisma Client

```bash
pnpm prisma generate
```

### 6. Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
zappy/
├── app/
│   ├── [shortCode]/          # Dynamic route for URL redirection
│   │   └── page.ts
│   ├── api/
│   │   └── link/             # API endpoint for URL shortening
│   │       └── route.ts
│   ├── generated/            # Prisma generated client
│   │   └── prisma/
│   ├── lib/
│   │   └── prisma.ts         # Prisma client configuration
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── prisma/
│   ├── migrations/           # Database migrations
│   └── schema.prisma         # Prisma schema
├── public/                   # Static assets
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js configuration
├── postcss.config.mjs        # PostCSS configuration
├── prisma.config.ts          # Prisma configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## 🔧 Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the production application
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code quality checks
- `pnpm prisma studio` - Open Prisma Studio to view/edit database
- `pnpm prisma migrate dev` - Run database migrations

## 🎯 How It Works

1. **URL Shortening**: Users enter a long URL in the input field
2. **API Processing**: The URL is sent to `/api/link` endpoint
3. **Short Code Generation**: A unique 7-character code is generated using nanoid
4. **Database Storage**: The long URL and short code are stored in PostgreSQL
5. **Response**: A shortened URL is returned and displayed to the user
6. **Redirection**: When users visit the short URL, they're redirected to the original URL

## 🗄️ Database Schema

```prisma
model Link {
  id        Int      @id @default(autoincrement())
  longUrl   String
  shortCode String   @unique
  createdAt DateTime @default(now())
}
```

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy Zappy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add your `DATABASE_URL` environment variable
4. Deploy!

### Database Hosting

For production, consider using:

- [Supabase](https://supabase.com/)
- [Railway](https://railway.app/)
- [Neon](https://neon.tech/)
- [Vercel Postgres](https://vercel.com/storage/postgres)

## 🔮 Future Enhancements

- [ ] Click analytics and statistics
- [ ] Custom short codes
- [ ] QR code generation
- [ ] Link expiration
- [ ] User authentication
- [ ] Dashboard for managing links
- [ ] Link analytics (views, geographic data, referrers)
- [ ] API rate limiting
- [ ] Custom domains

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

**Shahriar Ridom**

- GitHub: [@shahriar-ridom](https://github.com/shahriar-ridom)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Prisma team for the excellent ORM
- The open-source community

---

<div align="center">
  <strong>Built with ❤️ using Next.js and TypeScript</strong>
</div>
