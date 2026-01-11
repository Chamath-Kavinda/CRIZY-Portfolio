import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Initialize AOS
AOS.init({
  duration: 1000, // Animation duration in milliseconds
  once: true, // Animations happen only once when scrolling
  mirror: false, // Don't animate when scrolling back up
});

function App() {

  return (
    <div className="bg-primary pb-[200px] w-full">
      <Header/>
      <HomePage/>
    </div>
  )
}

export default App
