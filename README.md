# Kaif Shaikh - Portfolio

A modern, performance-focused portfolio website built with Next.js 16, featuring an AI-powered chat assistant, animated UI components, PWA support, and a sleek dark theme.

## 🚀 Features

- **Modern Design**: Clean, minimalist interface with animated components and spotlight effects
- **AI Chat Assistant**: Built-in AI-powered chat widget to answer visitor questions about skills, projects, and contact info
- **Performance Optimized**: Built with Next.js 16 (App Router) and Turbopack for blazing-fast performance
- **Progressive Web App (PWA)**: Installable as a standalone app with offline support and custom icons
- **Rate Limiting**: API protection with Upstash Redis-based rate limiting
- **Responsive**: Mobile-first design that works on all devices
- **Interactive Animations**: Powered by Framer Motion with animated beams, spotlight effects, and micro-interactions
- **Contact Integration**: Direct email links and social media connections with deep linking support
- **SEO Optimized**: Includes sitemap.xml and robots.txt for search engine visibility

## 🛠️ Tech Stack

### Core
- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5
- **React**: React 19

### Styling
- **CSS Framework**: Tailwind CSS 4
- **Animations**: Framer Motion, Motion
- **Icons**: Lucide React, React Icons

### AI Integration
- **AI SDK**: Vercel AI SDK (`ai`, `@ai-sdk/react`)
- **AI Provider**: Hugging Face (`@ai-sdk/huggingface`)
- **Model**: Qwen/Qwen2.5-7B-Instruct

### Backend & Security
- **Rate Limiting**: Upstash Ratelimit (`@upstash/ratelimit`)
- **Redis**: Upstash Redis (`@upstash/redis`)

### Utilities
- **Class Merging**: clsx, tailwind-merge
- **Validation**: Zod
- **Deep Linking**: universal-app-opener

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Hugging Face API key (for AI chat feature)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sk-kaif/Kaifportfolio.git
   cd Kaifportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # AI Chat Configuration
   HF_API_KEY=your_huggingface_api_key

   # Rate Limiting (Upstash Redis)
   UPSTASH_REDIS_REST_URL=your_upstash_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## 📁 Project Structure

```
Kaifportfolio/
├── app/
│   ├── api/
│   │   ├── chat/              # AI chat API endpoint (rate-limited)
│   │   └── contact/           # Contact form API
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── ChatWidget.tsx     # AI chat widget
│   │   ├── CTABtn.tsx         # Call-to-action button
│   │   ├── CTAButton.tsx      # Alternative CTA button
│   │   ├── FAQSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── HowIBuild.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProofSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── SpotlightCard.tsx  # Spotlight effect card
│   │   ├── WhyWorkSection.tsx
│   │   └── projects/
│   │       ├── ProcessBeam.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── ProjectTags.tsx
│   │       ├── ProjectsSection.tsx
│   │       └── TechMarquee.tsx
│   ├── data/
│   │   ├── ai-config.ts       # AI assistant configuration
│   │   └── projects.ts        # Project data
│   ├── projects/[slug]/       # Dynamic project pages
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── uilayouts/             # Reusable UI components
│       ├── animated-beam.tsx  # Animated beam effects
│       ├── blocks.tsx         # Block components
│       ├── button.tsx         # Button component
│       ├── popover.tsx        # Popover component
│       ├── scroll-area.tsx    # Scroll area component
│       └── spotlight.tsx      # Spotlight effect component
├── lib/
│   ├── motion.ts              # Motion utilities
│   ├── rate-limit.ts          # Upstash rate limiting
│   └── utils.ts               # Utility functions
├── public/
│   ├── projects/              # Project screenshots
│   ├── manifest.json          # PWA manifest
│   ├── web-app-manifest-192x192.png  # PWA icon (192x192)
│   ├── web-app-manifest-512x512.png  # PWA icon (512x512)
│   ├── apple-icon.png         # Apple touch icon
│   └── favicon.ico            # Favicon
└── package.json
```

## 🎨 Key Components

- **ChatWidget**: AI-powered floating chat assistant for visitor inquiries
- **HeroSection**: Animated hero section with particle effects
- **Footer**: Social media links with animated beam connections
- **Navbar**: Responsive navigation with mobile menu
- **ProjectsSection**: Dynamic project showcase with filtering
- **SpotlightCard**: Interactive card with spotlight hover effect
- **ProcessBeam**: Animated process visualization with beam effects
- **ProjectCard**: Individual project card with tech tags and links

## 🤖 AI Chat Configuration

The AI assistant is configured with a custom persona focused on:
- Answering questions about skills and tech stack
- Providing project details
- Sharing contact information
- Guiding potential clients

Configuration can be found in `app/data/ai-config.ts`.

## 📧 Contact

- **Email**: Kaifcodes@gmail.com
- **GitHub**: [Kaifcodes](https://github.com/sk-kaif)
- **LinkedIn**: [Kaifdev](https://www.linkedin.com/in/shaikh-kaif-62ba3725b/)
- **Twitter**: [Kaifcodes](https://x.com/shaikhkaif_?s=11&t=IiJuhe8cESBqfifsYfgtZw)

## 🚀 Deployment

### Vercel (Recommended)

Deploy easily on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables (`HF_API_KEY`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`)
4. Deploy!

### Manual Build

```bash
npm run build
npm run start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Kaif Shaikh