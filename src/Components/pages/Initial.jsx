import React, {useState, useEffect} from 'react'
import style from './layouts/Initial.module.css'


function Initial({trocarTela, acertos}) {

    const targetColors = ['#050742','#f70019','#191e42'];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentColorIndex((prevIndex) =>
            (prevIndex + 1) % targetColors.length
        );
        }, 5000);
        return () => clearInterval(interval);
  }, []);


    return (
        <div className={style.containerInitial} style={{backgroundColor: targetColors[currentColorIndex]}}>
            <h1 className={style.title}>VerboMania</h1>
            {
                acertos &&
                <h2 style={{fontSize: 15, color: 'grey'}}>Sua pontuação: {acertos}/6, {Math.floor(acertos / 6 * 100)}%</h2>
            }
            <button onClick={trocarTela} className={style.buttonInitial}><p style={{color: "#fff"}}>Jogar</p></button>
        </div>
    )
}

export default Initial