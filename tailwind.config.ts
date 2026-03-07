import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
  	extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        romantic: ['var(--font-romantic)'],
      },
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		boxShadow: {
  			soft: '0 10px 30px rgba(17, 24, 39, 0.12)'
  		},
  		keyframes: {
  			floaty: {
  				'0%, 100%': {
  					transform: 'translateY(0px) rotate(0deg)',
  					opacity: '0.75'
  				},
  				'50%': {
  					transform: 'translateY(-25px) rotate(6deg)',
  					opacity: '1'
  				}
  			},
  			marqueeUp: {
  				'0%': {
  					transform: 'translateY(0%)'
  				},
  				'100%': {
  					transform: 'translateY(-50%)'
  				}
  			},
  			pulseBurst: {
  				'0%': {
  					transform: 'scale(0.4)',
  					opacity: '0'
  				},
  				'40%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'scale(1.2)',
  					opacity: '0'
  				}
  			}
  		},
  		animation: {
  			floaty: 'floaty 6s ease-in-out infinite',
  			marqueeUp: 'marqueeUp 22s linear infinite',
  			pulseBurst: 'pulseBurst 0.85s ease-out'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
