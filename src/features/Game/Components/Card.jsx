import {useContext} from "react";
import {AppContext} from "../../context/AppContext.jsx";
import '../Styles/Card.css'
import useSound from "../../../Hooks/useSound.jsx";

export default function Card({id,image,handleFlip,name}){
    const { flipping, setFlipping, isFlipped, setIsFlipped } = useContext(AppContext);

    const handleFlipI = () => {
        setFlipping(true);
        setIsFlipped((prev) => !prev);
        useSound('click');
        setTimeout(()=> {
            setIsFlipped(false)
        }, 1000);
    };

    return (
        <div className="cube-container" id={id} onClick={(x)=> {
            handleFlipI();
            handleFlip(x.target.id);
        }}
        >
            <div id={id} className={`cube ${isFlipped ? "flip" : ""}`}>
                <div id={id} className="cube-face front">
                    <img id={id} src={image} alt={name} style={{width: "100%"}}/>
                </div>
                <div className="cube-face back"></div>
                <div className="cube-face right"></div>
                <div className="cube-face left"></div>
                <div className="cube-face top"></div>
                <div className="cube-face bottom"></div>
            </div>
        </div>
    )
}