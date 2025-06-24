import React from "react"
import './ColorPalette.css'


function ColorPalette (props) {

   
    const lista_colores_jx = props.colors.map(
    function(color, index){
        
        return (
            <div 
                key={color + index}
                className={`card_palette__content__color card_palette__content__color${index}`}
                style={
                    { backgroundColor: color }
                }
            >
                <span className="card_palette__content__color-text">{color}</span>
            </div>
        )
    }
    )
    return(
        <article className="card_palette">
            <a href="" className="card_palette__content"> {lista_colores_jx} </a>
          <div className="card_palette__footer">
                <div className="card_palette__likes">
                    <button className="card_palette__likes-button">
                        <span className="card_palette__likes-icon">❤️</span>
                        <span className="card_palette__likes-count">{props.likes}</span>
                    </button>
                </div>
                <div className="card_palette__time">
                    <p>{props.time}</p>
                </div>
            </div>
        </article>
 
    )
}

export default ColorPalette;
