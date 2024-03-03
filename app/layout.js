import { Inter, Cormorant } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer'
import ScrollTopBtn from './components/Button/ScrollTopBtn'

const inter = Inter({ subsets: ["latin"] });
const cormorant = Cormorant({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-cormorant',
})

export const metadata = {
  title: "Davinch Leather Co.",
  description: "Davinch Leather Co specializes in luxury handcrafted leather goods.  Each piece is unique and custom to the individual.  At Davinch Leather your bespoke leather goods will withstand the test of time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme" className="h-screen w-screen font-cormorant">
      <head>      
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
        {/* <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap" rel="stylesheet"/> */}
        <link rel='icon' type="image/png" href="https://www.flaticon.com/free-icons/leather"/>
        <script src="https://kit.fontawesome.com/5c59429581.js" defer></script>
      </head>
      <body className={`${cormorant.variable}bg-gray-50 text-gray-950 w-full overflow-x-hidden`}>
        <NavBar/>
        <ScrollTopBtn/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
