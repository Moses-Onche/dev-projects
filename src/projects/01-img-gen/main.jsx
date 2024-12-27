// Background images
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

// Accessories
import earings from "./assets/accessories/earings.png"
import flower from "./assets/accessories/flower.png"
import glasses from "./assets/accessories/glasses.png"
import headphone from "./assets/accessories/headphone.png"

// Ears
import normalEars from "./assets/ears/default.png"
import backwards from "./assets/ears/tilt-backward.png"
import forward from "./assets/ears/tilt-forward.png"

// Eyes
import normalEyes from "./assets/eyes/default.png"
import angryEyes from "./assets/eyes/angry.png"
import naughtyEyes from "./assets/eyes/naughty.png"
import pandaEyes from "./assets/eyes/panda.png"
import smartEyes from "./assets/eyes/smart.png"
import starEyes from "./assets/eyes/star.png"

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

    const accessories = [
        earings,
        flower,
        glasses,
        headphone
    ]

    const earType = [
        normalEars,
        backwards,
        forward
    ]

    // console.log(bgImages.length - 1)
    const [bgImg, setBgImg] = useState(0);
    const [acc, setAcc] = useState(0);
    const [ears, setEars] = useState(0);
    const [eyes, setEyes] = useState(0);

    const changeBg = () => {
        if (bgImg === bgImages.length - 1) setBgImg(bgImg * 0);
        else setBgImg(bgImg + 1);
    };

    const changeAcc = () => {
        if (acc === accessories.length - 1) setAcc(acc * 0);
        else setAcc(acc + 1);
    }

    const changeEars = () => {
        if (ears === earType.length - 1) setEars(ears * 0);
        else setEars(ears + 1);
    }

    const changeEyes = () => {
        if (eyes === eyesType.length - 1) setEyes(eyes * 0);
        else setEyes(eyes + 1);
    }

    return (
        <>
            <h1 className="text-3xl">ALPACA GENERATOR</h1>
            <div className="">
                <div className="w-60 md:w-80 relative">
                    <img 
                        className="w-full"
                        src={bgImages[bgImg]}
                        alt="background image" />

                    <img 
                        className="absolute top-0"
                        src={ accessories[acc] } 
                        alt="alpaca accessories" />
                    
                    <img 
                        className="absolute top-0"
                        src= { earType[ears] } 
                        alt="alpaca ears" />

                    <img src="" alt="" />
                </div>
                <div>
                    <div>
                        <h4>ACCESSORIZE THE ALPACA</h4>
                        <div>
                            <button>Hair</button>
                            <button onClick={ changeEars }>Ears</button>
                            <button onClick={ changeEyes }>Eyes</button>
                            <button>Mouth</button>
                            <button>Neck</button>
                            <button>Leg</button>
                            <button onClick={ changeAcc }>Accessories</button>
                            <button onClick={ changeBg }>Background</button>
                        </div>
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