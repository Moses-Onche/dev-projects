import AlpacaImgGen from "./projects/01-img-gen/main";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import alpaca from "./assets/alpaca.png";

const Home = () => {
  return (
    <>
      <h1>Dev Projects</h1>
      <a href="https://www.github.com/Moses-Onche" className="text-slate-900">by @meo_joule</a>
      <div>
        <div className="mt-10">
          <Link to="/alpaca-image-gen">
            <img src={ alpaca } alt="alpaca image generator" />
            <h3>Alpaca Image Generator</h3>
          </Link>
          <span className="bg-slate-900 text-white p-1 mr-1">Reactjs</span>
          <span className="bg-slate-900 text-white p-1 mr-1">TailwindCSS</span>
          <span className="bg-slate-900 text-white p-1 mr-1">html2canvas</span>
        </div>
      </div>
    </>
  )
}

function App() {

  return (
    <>
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/alpaca-image-gen" element={ <AlpacaImgGen /> }/>
        </Routes>
      </Router>
      {/* <AlpacaImgGen /> */}
    </>
  )
}

export default App
