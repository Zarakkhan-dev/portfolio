import '@/styles/globals.css';
import "@/Component/Header/header.css";
import "@/Component/Arrow/arrow.css";
import "@/Component/Navbar/navbar.css";
import "@/Component/About_Page/information/about.css";
import "@/Component/Contact_Page/contact.css";
import "@/Component/Portfolio_Page/portfolio.css"
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
