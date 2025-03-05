![Image of a Conference Landing Page](/public/images/Landing-Page.jpg)

A dynamic, responsive event landing page built with Next.js and Framer Motion, featuring interactive animations and stunning visual effects.

## ✨ Features

- **Interactive Animations**: Engaging motion graphics powered by Framer Motion and Anime.js
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dynamic Components**: Interactive dot grid, crosshairs, and speaker cards
- **Modern UI**: Clean, professional design with customizable theming
- **Optimized Images**: Efficient image loading with Next.js Image component

## 🚀 Live Demo

[View Demo](https://framer-motion-event-page.vercel.app/)

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/) - React framework for production
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Anime.js](https://animejs.com/) - JavaScript animation engine
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## 📋 Project Structure

```
├── components/
│   ├── buttons/
│   │   └── StandardButton.tsx
│   ├── nav/
│   │   ├── Heading.tsx
│   │   └── Sidebar.tsx
│   └── sections/
│       ├── contact/
│       ├── hero/
│       ├── info/
│       ├── speakers/
│       └── time/
├── public/
│   └── images/
├── utils/
│   ├── Reveal.tsx
│   └── SectionHeader.tsx
└── pages/
    └── index.tsx
```

## 🔧 Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/event-page.git
   cd event-page
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📱 Key Components

### Interactive Dot Grid

The dot grid creates an engaging visual effect that responds to user clicks with ripple animations.

### Speaker Showcase

A dynamic grid displaying event speakers with smooth animations and professional styling.

### Crosshairs Animation

Visual elements that enhance the modern tech aesthetic of the page.

### Contact Section

Easy-to-use contact form for event inquiries.

## 🎨 Customization

### Theming

The project uses CSS variables for theming. You can customize colors by modifying:

```css
:root {
  --background: #0f0f0f;
  --background-dark: #080808;
  --text: #ffffff;
  --primary: #f0f;
  /* Add your custom colors here */
}
```

### Content

Replace placeholder text and images in the component files to match your event details.

## 📝 License

[MIT](LICENSE) (Replace with your actual license)

## 👏 Acknowledgements

- Design inspiration: [Source](https://your-inspiration-source.com)
- Images: [Unsplash](https://unsplash.com)

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

Built with ❤️ by [Your Name](https://your-website.com)
