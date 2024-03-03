/** @type {import('tailwindcss').Config} */
import {Cormorant} from 'next/font/google'

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'landscape' : {'raw': '(min-height: 800px)'},
        
      },
      fontFamily: {
        'cormorant' : ['var(--font-cormorant)']
      },
      
    },
  },
  plugins: [require("daisyui")],
 
  daisyui: {
    themes: [
      {
        
        mytheme: {
          "primary" : '#272823',
          "secondary": '121212ff',
          "accent": '#9c0000',
          
        },
      },
      
    ]
  }
};
