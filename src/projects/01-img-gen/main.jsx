import blue50 from "./assets/blue50.png"
import blue60 from "./assets/blue60.png"
import blue70 from "./assets/blue50.png"
import darkblue30 from "./assets/darkblue30.png"
import darkblue50 from "./assets/darkblue50.png"
import darkblue70 from "./assets/darkblue70.png"
import green50 from "./assets/green50.png"
import green60 from "./assets/green60.png"
import green70 from "./assets/green70.png"
import grey40 from "./assets/grey40.png"
import grey70 from "./assets/grey70.png"
import grey80 from "./assets/grey80.png"
import red50 from "./assets/red50.png"
import red60 from "./assets/red60.png"
import red70 from "./assets/red70.png"
import yellow50 from "./assets/yellow50.png"
import yellow60 from "./assets/yellow60.png"
import yellow70 from "./assets/yellow70.png"
import { useState } from "react"

const alpacaPage = () => {
    const bgImages = [
        blue50,
        blue60,
        blue70,
        darkblue30,
        darkblue50,
        darkblue70,
        green50,
        green60,
        green70,
        grey40,
        grey70,
        grey80,
        red50,
        red60,
        red70,
        yellow50,
        yellow60,
        yellow70,
    ]

    // console.log(bgImages[0])
    const [bgImg, setBgImg] = useState(0);
    console.log(bgImg);
    const changeBg = () => {
        if (bgImg === 17) setBgImg(bgImg - 17);
        else setBgImg(bgImg + 1);
    };

    return (
        <>
            <h1 className="text-3xl">ALPACA GENERATOR</h1>
            <div className="">
                <div className="w-60 md:w-80 relative">
                    <img 
                        className="w-full"
                        src={bgImages[bgImg]}
                        alt="background image" />
                        <img src="" alt="" />
                </div>
                <div>
                    <div>
                        <h4>ACCESSORIZE THE ALPACA</h4>
                        <button onClick={ changeBg }>Background</button>
                    </div>
                    <div>
                        <h4>STYLE</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default alpacaPage;