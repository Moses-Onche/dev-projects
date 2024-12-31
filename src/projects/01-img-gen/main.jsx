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
import backwardEars from "./assets/ears/tilt-backward.png"
import forwardEars from "./assets/ears/tilt-forward.png"

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
    const parts = [
        {
            names: [
                {title: "Default", image: normalHair,id: 1},
                {title: "Bang", image: bang, id: 2},
                {title: "Curls", image: curls, id: 3}, 
                {title: "Elegant", image: elegant, id: 4},
                {title: "Fancy", image: fancy, id: 5},
                {title: "Quiff", image: quiff, id: 6},
                {title: "Short", image: short, id: 7}
            ]
        },
        
        {
            names: [
                {title: "Default", image: normalEars,id: 1},
                {title: "Backward", image: backwardEars, id: 2},
                {title: "Forward", image: forwardEars, id: 3}, 
            ]
        },

        {
            names: [
                {title: "Default", image: normalEyes,id: 1},
                {title: "Angry", image: angryEyes, id: 2},
                {title: "Naughty", image: naughtyEyes, id: 3}, 
                {title: "Panda", image: pandaEyes, id: 4},
                {title: "Smart", image: smartEyes, id: 5},
                {title: "Star", image: starEyes, id: 6},
            ]
        },

        {
            names: [
                {title: "Default", image: normalMouth,id: 1},
                {title: "Astonished", image: astonished, id: 2},
                {title: "Eating", image: eating, id: 3}, 
                {title: "Laugh", image: laugh, id: 4},
                {title: "Tongue", image: tongue, id: 5}
            ]
        },

        {
            names: [
                {title: "Default", image: normalNeck,id: 1},
                {title: "Backward", image: backwardNeck, id: 2},
                {title: "Forward", image: forwardNeck, id: 3}, 
                {title: "Thick", image: thickNeck, id: 4},
            ]
        },

        { 
            names: [
                {title: "Default", image: normalLeg,id: 1},
                {title: "Bubble Tea", image: bubbleTea, id: 2},
                {title: "Cookie", image: cookie, id: 3}, 
                {title: "Game Console", image: gameConsole, id: 4},
                {title: "Backward", image: backwardLeg, id: 5},
                {title: "Forward", image: forwardLeg, id: 6},
            ]
        },

        {
            names: [
                {title: "Earings", image: earings,id: 1},
                {title: "Flower", image: flower, id: 2},
                {title: "Glasses", image: glasses, id: 3}, 
                {title: "Headphone", image: headphone, id: 4}
            ]
        },

        {
            names: [
                {title: "Blue 50", image: blue50,id: 1},
                {title: "Blue 60", image: blue60, id: 2},
                {title: "Blue 70", image: blue70, id: 3}, 
                {title: "Dark Blue 30", image: darkblue30, id: 4},
                {title: "Dark Blue 50", image: darkblue50, id: 5},
                {title: "Dark Blue 70", image: darkblue70, id: 6},
                {title: "Green 50", image: green50, id: 7},
                {title: "Green 60", image: green60, id: 8},
                {title: "Green 70", image: green70, id: 9},
                {title: "Grey 40", image: grey40, id: 10},
                {title: "Grey 70", image: grey70, id: 11},
                {title: "Grey 80", image: grey80, id: 12},
                {title: "Red 50", image: red50, id: 13},
                {title: "Red 60", image: red60, id: 14},
                {title: "Red 70", image: red70, id: 15},
                {title: "Yellow 50", image: yellow50, id: 16},
                {title: "Yellow 60", image: yellow60, id: 17},
                {title: "Yellow 70", image: yellow70, id: 18},
            ]
        }
    ]

    const [style, setStyle] = useState(0);
    const [feature, setFeature] = useState("");
    const currentFeature = [
        normalHair,
        normalEars,
        normalEyes,
        normalMouth,
        normalNeck,
        normalLeg,
        earings,
        blue50
    ]

    const selectHair = () => {
        setStyle(0);
    }

    const selectEars = () => {
        setStyle(1);
    }

    const selectEyes = () => {
        setStyle(2);
    }

    const selectMouth = () => {
        setStyle(3);
    }

    const selectNeck = () => {
        setStyle(4);
    }

    const selectLeg = () => {
        setStyle(5);
    }

    const selectAccessories = () => {
        setStyle(6);
    }

    const selectBg = () => {
        setStyle(7);
    }

    return (
        <>
            <h1 className="text-3xl">ALPACA GENERATOR</h1>
            <div className="flex w-full h-2/3">
                <div className="w-60 md:w-96 relative">
                    <img 
                        className="absolute z-20"
                        src={ currentFeature[0] }
                        alt="alpaca hair" />

                    <img 
                        className="absolute z-10 top-0"
                        src={ currentFeature[1] } 
                        alt="alpaca ears" />
                    
                    <img 
                        className="absolute z-20 top-0"
                        src= { currentFeature[2] } 
                        alt="alpaca eyes" />

                    <img 
                        className="absolute z-20 top-2"
                        src= { currentFeature[3] } 
                        alt="alpaca mouth" />

                    <img 
                        className="absolute z-10 bottom-0"
                        src={ currentFeature[4] }
                        alt="alpaca neck" />

                    <img 
                        className="absolute z-10 bottom-0"
                        src={ currentFeature[5] }
                        alt="alpaca leg" />

                    <img 
                        className="absolute z-10 bottom-0"
                        src={ currentFeature[6] }
                        alt="alpaca accessories" />

                    <img 
                        className=""
                        src={ currentFeature[7] }
                        alt="alpaca background" />
                </div>
                <div className="w-1/2">
                    <div>
                        <h4>ACCESSORIZE THE ALPACA</h4>
                        <div>
                            <button onClick={ selectHair }>Hair</button>
                            <button onClick={ selectEars }>Ears</button>
                            <button onClick={ selectEyes }>Eyes</button>
                            <button onClick={ selectMouth }>Mouth</button>
                            <button onClick={ selectNeck }>Neck</button>
                            <button onClick={ selectLeg }>Leg</button>
                            <button onClick={ selectAccessories }>Accessories</button>
                            <button onClick={ selectBg }>Background</button>
                        </div>
                    </div>
                    <div>
                        <h4>STYLE</h4>
                        <ButtonRender 
                            parts={ parts[style] } 
                            setFeature={ setFeature } 
                            feature={ feature }
                            style={ style }
                            currentFeature = { currentFeature } 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

const Accessorize = () => {
    
}

const ButtonRender = ({ parts, feature, style, currentFeature }) => {
    const changeFeature = (button) => {
        console.log(currentFeature[style]);
        // setFeature(button);
        currentFeature[style] = button;
    }

    const buttons = parts.names.map(item => 
        <button key={item.id} onClick={ () => changeFeature(item.image) } >{ item.title }</button>
    )
    
    return (
        <div >{ buttons }</div>
    );
}

export default alpacaPage;