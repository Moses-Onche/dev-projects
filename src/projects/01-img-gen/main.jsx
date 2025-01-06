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
import nose from "./assets/nose.png"

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
import html2canvas from 'html2canvas';

const alpacaPage = () => {
    const parts = [
        {
            feature: {title: "Hair", id: 1},
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
            feature: {title: "Ears", id: 2},
            names: [
                {title: "Default", image: normalEars,id: 1},
                {title: "Backward", image: backwardEars, id: 2},
                {title: "Forward", image: forwardEars, id: 3}, 
            ]
        },

        {
            feature: {title: "Eyes", id: 3},
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
            feature: {title: "Mouth", id: 4},
            names: [
                {title: "Default", image: normalMouth,id: 1},
                {title: "Astonished", image: astonished, id: 2},
                {title: "Eating", image: eating, id: 3}, 
                {title: "Laugh", image: laugh, id: 4},
                {title: "Tongue", image: tongue, id: 5}
            ]
        },

        {
            feature: {title: "Neck", id: 5},
            names: [
                {title: "Default", image: normalNeck,id: 1},
                {title: "Backward", image: backwardNeck, id: 2},
                {title: "Forward", image: forwardNeck, id: 3}, 
                {title: "Thick", image: thickNeck, id: 4},
            ]
        },

        {
            feature: {title: "Leg", id: 6},
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
            feature: {title: "Accessories", id: 7},
            names: [
                {title: "Earings", image: earings,id: 1},
                {title: "Flower", image: flower, id: 2},
                {title: "Glasses", image: glasses, id: 3}, 
                {title: "Headphone", image: headphone, id: 4}
            ]
        },

        {
            feature: {title: "Background", id: 8},
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
    const [currentHair, setCurrentHair] = useState(normalHair);
    const [currentEars, setCurrentEars] = useState(normalEars);
    const [currentEyes, setCurrentEyes] = useState(normalEyes);
    const [currentMouth, setCurrentMouth] = useState(normalMouth);
    const [currentNeck, setCurrentNeck] = useState(normalNeck);
    const [currentLeg, setCurrentLeg] = useState(normalLeg);
    const [currentAcc, setCurrentAcc] = useState(earings);
    const [currentBg, setCurrentBg] = useState(blue50);

    const currentFeature = [
        setCurrentHair,
        setCurrentEars,
        setCurrentEyes,
        setCurrentMouth,
        setCurrentNeck,
        setCurrentLeg,
        setCurrentAcc,
        setCurrentBg
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

    // Generate randomized features
    const randomizeFeature = (parts) => {
        let randomHair = Math.trunc(Math.random() * 7);
        let randomEars = Math.trunc(Math.random() * 3);
        let randomEyes = Math.trunc(Math.random() * 6);
        let randomMouth = Math.trunc(Math.random() * 5);
        let randomNeck = Math.trunc(Math.random() * 4);
        let randomLeg = Math.trunc(Math.random() * 6);
        let randomAcc = Math.trunc(Math.random() * 4);
        let randomBg = Math.trunc(Math.random() * 18);
        setCurrentHair(parts[0].names[randomHair].image);
        setCurrentEars(parts[1].names[randomEars].image);
        setCurrentEyes(parts[2].names[randomEyes].image);
        setCurrentMouth(parts[3].names[randomMouth].image);
        setCurrentNeck(parts[4].names[randomNeck].image);
        setCurrentLeg(parts[5].names[randomLeg].image);
        setCurrentAcc(parts[6].names[randomAcc].image);
        setCurrentBg(parts[7].names[randomBg].image);
    }

    // Download alpaca image with html2canvas
    const downloadImage = async () => {
        const alpacaArt = document.getElementById("download-image");
        const canvas = await html2canvas(alpacaArt);
        const data = canvas.toDataURL('image/png');
        const link = document.createElement('a');

        link.href = data;
        link.download = "alpaca.png";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <>
            <h1 className="ml-6 text-4xl">ALPACA GENERATOR</h1>
            <a href="https://www.github.com/Moses-Onche" className="ml-6 text-slate-900">by @meo_joule</a>
            
            {/* Alpaca Image div */}
            <div className="flex flex-col md:flex-row w-full h-2/3 ml-6 mt-4">
                <div 
                    className="w-4/5 h-max sm:w-96 relative"
                    id="download-image">
                    <img 
                        className="absolute z-30 right-1"
                        src={ currentHair }
                        alt="alpaca hair" />

                    <img 
                        className="absolute z-10 top-0"
                        src={ currentEars } 
                        alt="alpaca ears" />
                    
                    <img 
                        className="absolute z-40 top-0"
                        src= { currentEyes } 
                        alt="alpaca eyes" />

                    <img 
                        className="absolute z-20 top-2"
                        src= { nose } 
                        alt="alpaca mouth" />

                    <img 
                        className="absolute z-20 top-2"
                        src= { currentMouth } 
                        alt="alpaca mouth" />

                    <img 
                        className="absolute z-10 bottom-0"
                        src={ currentNeck }
                        alt="alpaca neck" />

                    <img 
                        className="absolute z-10 bottom-0"
                        src={ currentLeg }
                        alt="alpaca leg" />

                    <img 
                        className="absolute z-30 top-3"
                        id="accessories"
                        src={ currentAcc }
                        alt="alpaca accessories" />

                    <img 
                        className=""
                        src={ currentBg }
                        alt="alpaca background" />
                </div>

                {/* Button div */}
                <div className="sm:ml-16 w-4/5">
                    <div>
                        <h4>ACCESSORIZE THE ALPACA</h4>
                        <FeatureButtons parts={ parts } />
                        <div className="w-2/3">
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
                    <div className="mt-8 w-4/5">
                        <h4>STYLE</h4>
                        <ButtonRender 
                            parts={ parts[style] } 
                            style={ style }
                            currentFeature = { currentFeature } 
                        />
                    </div>
                </div>
            </div>

            {/* Random and Download Buttons */}
            <div className="ml-6 mt-6 w-1/4 flex justify-between">
                <button
                    className="text-slate-900 bg-white"   
                    onClick={ () => randomizeFeature(parts) }
                    >Random</button>

                <button
                    className="text-slate-900 bg-white" 
                    onClick={ downloadImage }
                    >Download</button>
            </div>
            
        </>
    )
}

// Render the feature buttons
const FeatureButtons = ({ parts }) => {
    const buttons = parts.map(item => 
        <button key={item.id}>{ item.feature }</button>
    )

    return (
        <div> { buttons }</div>
    )
}

// Render the style options according to the selected feature
const ButtonRender = ({ parts, style, currentFeature }) => {
    const changeFeature = (button) => {
        currentFeature[style](button);
    }

    const buttons = parts.names.map(item => 
        <button key={item.id} onClick={ () => changeFeature(item.image) } >{ item.title }</button>
    )
    
    return (
        <div>{ buttons }</div>
    );
}

export default alpacaPage;