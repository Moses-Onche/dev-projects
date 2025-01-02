import AlpacaImgGen from "./projects/01-img-gen/main";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import alpaca from "./assets/alpaca.png";

const Home = () => {
  return (
    <>
      <h1>Dev Projects</h1>
      <a href="https://www.github.com/Moses-Onche" className="ml-14 text-slate-900">by @meo_joule</a>
      <div>
        <Link to="/alpaca-image-gen">
          <div>
            <img src={ alpaca } alt="alpaca image generator" />
            <h3>Alpaca Image Generator</h3>
            <span>Reactjs</span>
            <span>TailwindCSS</span>
            <span>html2canvas</span>
          </div>
        </Link>
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
