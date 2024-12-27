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

// Hair
import normalHair from "./assets/hair/default.png"
import bang from "./assets/hair/bang.png"
import curls from "./assets/hair/curls.png"
import elegant from "./assets/hair/elegant.png"
import fancy from "./assets/hair/fancy.png"
import quiff from "./assets/hair/quiff.png"
import short from "./assets/hair/short.png"

// Leg
import normalLeg from "./assets/leg/default.png"
import bubbleTea from "./assets/leg/bubble-tea.png"
import cookie from "./assets/leg/cookie.png"
import gameConsole from "./assets/leg/game-console.png"
import backwardLeg from "./assets/leg/tilt-backward.png"
import forwardLeg from "./assets/leg/tilt-forward.png"

// Mouth
import normalMouth from "./assets/mouth/default.png"
import astonished from "./assets/mouth/astonished.png"
import eating from "./assets/mouth/eating.png"
import laugh from "./assets/mouth/laugh.png"
import tongue from "./assets/mouth/tongue.png"

// Neck
import normalNeck from "./assets/neck/default.png"
import backwardNeck from "./assets/neck/bend-backward.png"
import forwardNeck from "./assets/neck/bend-forward.png"
import thickNeck from "./assets/neck/thick.png"

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

    const eyeType = [
        normalEyes,
        angryEyes,
        naughtyEyes,
        pandaEyes,
        smartEyes,
        starEyes
    ]

    const hairType = [
        normalHair,
        bang,
        curls,
        elegant,
        fancy,
        quiff,
        short
    ]

    const legType = [
        normalLeg,
        bubbleTea,
        cookie,
        gameConsole,
        backwardLeg,
        forwardLeg
    ]

    const mouthType = [
        normalMouth,
        astonished,
        eating,
        laugh,
        tongue
    ]

    const neckType = [
        normalNeck,
        backwardNeck,
        forwardNeck,
        thickNeck
    ]

    // console.log(bgImages.length - 1)
    const [bgImg, setBgImg] = useState(0);
    const [acc, setAcc] = useState(0);
    const [ears, setEars] = useState(0);
    const [eyes, setEyes] = useState(0);
    const [hair, setHair] = useState(0);
    const [leg, setLeg] = useState(0);
    const [mouth, setMouth] = useState(0);
    const [neck, setNeck] = useState(0);

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
        if (eyes === eyeType.length - 1) setEyes(eyes * 0);
        else setEyes(eyes + 1);
    }

    const changeHair = () => {
        if (hair === hairType.length - 1) setHair(hair * 0);
        else setHair(hair + 1);
    }

    const changeLeg = () => {
        if (leg === legType.length - 1) setLeg(leg * 0);
        else setLeg(leg + 1);
    }

    const changeNeck = () => {
        if (neck === neckType.length - 1) setNeck(neck * 0);
        else setNeck(neck + 1);
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

                    <img 
                        className="absolute top-2"
                        src= { eyeType[eyes] } 
                        alt="alpaca eyes" />

                    <img 
                        className="absolute top-1 right-2"
                        src={ hairType[hair] }
                        alt="alpaca hair" />
                </div>
                <div>
                    <div>
                        <h4>ACCESSORIZE THE ALPACA</h4>
                        <div>
                            <button onClick={ changeHair }>Hair</button>
                            <button onClick={ changeEars }>Ears</button>
                            <button onClick={ changeEyes }>Eyes</button>
                            <button>Mouth</button>
                            <button onClick={ changeNeck }>Neck</button>
                            <button onClick={ changeLeg }>Leg</button>
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