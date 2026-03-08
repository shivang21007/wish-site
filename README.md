# Universal Celebration App 🎉

A highly aesthetic, fully responsive, and completely customizable 1-page web application. Use it for **Anniversaries, Birthdays, Weddings, or any Occasion**. It features a sequenced interactive intro animation, dynamic floating elements, continuous background blur carousels, and an immersive swipable image gallery!

Built with **Next.js (App Router, Pure Frontend)**, **TailwindCSS**, **Framer Motion**, and **Shadcn UI**. Pre-configured for seamless static export deployment (e.g., Cloudflare Pages, Vercel, Netlify).

---

## 🚀 Quick Setup & Customization

The entire site is controlled by a single configuration file! You **do not** need to touch any React code to customize the experience.

### 1. The Configuration Spec (`app.config.ts`)
Open `app.config.ts` located in the root folder. Here you can change:
- **Occasion Type**: e.g. "Anniversary" -> "Birthday" (automatically updates metadata and headings).
- **Names & Dates**: Set the celebrants' names and the large focal date.
- **Intro Story Timing & Text**: Full control over the wording, bouncy emojis (🤔, 🎈, 🎂), and exactly what millisecond each element appears on screen!
- **Theme**: Swap out the Tailwind gradients for the names, change the floating emojis (🌸), or modify the confetti blast colors.
- **Carousel Speeds**: Speed up or slow down the horizontal and vertical image reels.

### 2. Adding Your Images
You have two options for loading images, configurable inside `app.config.ts` under the `images` block:

**Option A: Local Images (Default)**
1. Ensure `useCdn: false` in your config.
2. Drop your images inside the `public/assets/` folder.
3. Keep them named sequentially (e.g., `memory-1.jpg`, `memory-2.jpg`).
4. Update `images.local.totalImages` to the exact count of images you added.

**Option B: Remote hosted/CDN Images**
1. Set `useCdn: true` in your config.
2. Provide an array of direct image links inside `images.cdnUrls`. You can host these anywhere (Imgur, AWS S3, Cloudflare R2).
3. The app is already configured (in `next.config.ts`) to permit all secure (`https://`) remote images across any domains.

---

## 🛠️ Running the App Locally

Ensure you have [Node.js](https://nodejs.org/) installed along with `npm`.

1. **Install Dependencies**:
```bash
npm install
```

2. **Run Dev Server**:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## ☁️ Deployment (Cloudflare Pages, Static Hosts)

The app is fully pre-configured to build a completely static folder (`dist/`), making it extremely fast, cheap, and easy to host on Cloudflare Pages, GitHub Pages, or any static provider.

To generate the production build:
```bash
npm run build
```

This will run `next build`, compile all required assets, and output them perfectly to a newly created `dist/` directory at the project root. Just upload the `dist/` folder to your static provider!
