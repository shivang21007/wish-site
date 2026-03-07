/**
 * ============================================================================
 * UNIVERSAL CELEBRATION APP CONFIGURATION SPECIFICATION
 * ============================================================================
 * 
 * This file contains all the configurable elements of the application.
 * You can customize the site for ANY occasion (Anniversary, Birthday, Wedding, etc.)
 * simply by editing this file. The build process will automatically bake these
 * settings into the static output.
 * 
 * INSTRUCTIONS:
 * 1. Read through the comments for each section.
 * 2. Swap out texts, emojis, and timings as needed.
 * 3. Add your images to the `public/assets/` folder and update the `images` config.
 * 4. Run `npm run dev` to preview, and `npm run build` to generate the Cloudflare export.
 */

export const siteConfig = {
  // --------------------------------------------------------------------------
  // 1. GLOBAL DETAILS
  // --------------------------------------------------------------------------
  // The type of occasion (used in the tab title and metadata)
  occasion: "Birthday", // e.g., "Birthday", "Graduation", "Wedding"
  
  // The date displayed on the top header of the main screen
  date: "1st Feb 2026", 
  
  // Names of the subjects. 
  // You can leave partner2 empty for a Birthday.
  names: {
    partner1: "Bachcha",
    partner2: "", // Set to "" for single-person events
    separator: "",         // e.g., "&", "and", or "" if single person
  },

  // --------------------------------------------------------------------------
  // 2. IMAGE ASSETS CONFIGURATION
  // --------------------------------------------------------------------------
  images: {
    // Set to true if you want to use external image URLs (like from a CDN or Imgur)
    useCdn: false, 
    
    // If useCdn is FALSE, the app will generate images from the local /public/assets folder
    local: {
      // The relative path and prefix for the images in your public folder.
      basePath: "/images/memory-", 
      // The extension of your images. Keep it consistent (e.g., ".jpg" or ".png")
      extension: ".svg",
      // EXACT count of images you placed in the folder.
      totalImages: 8, 
    },
    
    // If useCdn is TRUE, the app will load these exact URLs instead.
    // Replace with your own CDN links. Must have at least 8-10 for the best effect.
    cdnUrls: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
      // ...add all your image links here
    ]
  },

  // --------------------------------------------------------------------------
  // 3. INTRO SEQUENCE CONTENT & TIMINGS
  // --------------------------------------------------------------------------
  intro: {
    // Step 1: Inital sweeping text
    firstText: "Today is 1st Feb 2026",
    
    // Step 2: Second text holding question/statement
    secondText: "Guess what is special just before 24 years ago?",
    
    // Step 3: Big bounce emoji
    thinkingEmoji: "🤔",
    
    // Step 4: Small subtitle above the final heading
    subtitle: "Celebration Time",
    
    // Step 5: The final bold heading text shown at the end of the intro
    // (Note: The main page heading is automatically assembled from the names above)
    finalHeading: "Happy 24th Birthday Bachcha",
    
    // Animation timing sequence in milliseconds
    timings: {
      secondTextStart: 2500, // When the second text appears
      emojiStart: 6000,      // When the thinking emoji appears
      popupsStart: 7500,     // When the preview layout images begin popping up
      finalWishStart: 11000, // When the final greeting text appears
      introComplete: 14000,  // When the intro completely disappears into the main UI
      popupStaggerInterval: 600, // Time between each image preview popping up
    }
  },

  // --------------------------------------------------------------------------
  // 4. MAIN PAGE THEME, COLORS & ANIMATIONS
  // --------------------------------------------------------------------------
  theme: {
    // Tailwind classes for the background map dot styling
    background: {
      lightStyle: "bg-dot-black/[0.2]",     // Aceternity Dot Matrix Light
      darkStyle: "dark:bg-dot-white/[0.2]", // Aceternity Dot Matrix Dark
    },
    // Tailwind text gradients applied to the names on the main screen
    textGradients: {
      partner1: "from-pink-500 to-rose-500", // e.g., "from-blue-500 to-indigo-500" for boys
      partner2: "from-rose-500 to-pink-500",
    },
    // Canvas Confetti settings (triggered when intro finishes)
    confetti: {
      colors: ['#f87171', '#fb7185', '#f472b6'], // Hex colors for the confetti
      durationMs: 3000,                          // How long it shoots for
    },
    // The floating emojis constantly rising from the bottom
    floatingElements: {
      emoji: "🌸",     // Try "🎈", "✨", "🎂", or "🕊️"
      opacity: "0.8",  // CSS opacity string
    }
  },

  // --------------------------------------------------------------------------
  // 5. CAROUSEL SPEEDS AND DELAYS
  // --------------------------------------------------------------------------
  carousel: {
    // Horizontal Swipable Box Delay (in ms) before auto-swiping to next image
    horizontalSwipeDelay: 2000,
    
    // Background Vertical Blur Marquee Speeds (in seconds to complete one loop)
    // Lower means faster.
    verticalSpeeds: {
      leftStrip: 30,
      centerStrip: 40,
      rightStrip: 35,
    }
  }
};
