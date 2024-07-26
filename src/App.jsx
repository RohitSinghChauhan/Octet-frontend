import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar"
import ActiveJobs from "./sections/activejobs/ActiveJobs";
import CardContainer from "./sections/cardContainer/CardContainer"
import Statistics from "./sections/statistics/Statistics"

const App = () => {
  return (
    <div className="w-[100%] flex flex-col justify-center items-center">
      <Navbar />
      <CardContainer />
      <Statistics />
      <ActiveJobs />
      <Footer />
    </div>
  )
}

export default App