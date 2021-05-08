import './App.css';
import Header from './Components/Header';
import SubHeader from './Components/SubHeader';
import Experience from "./Components/Experience";
import ApplyNow from "./Components/ApplyNow";
import CatchUp from './Components/CatchUp';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      {/* Westminster app */}
      <Header />
      <SubHeader />
      <Experience />
      <ApplyNow />
      <CatchUp />
      <Footer />

    </div>
  );
}



export default App;
