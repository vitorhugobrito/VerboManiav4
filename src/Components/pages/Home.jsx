import { useState, Animated, useEffect } from 'react'
import style from './layouts/Home.module.css'

function Home({trocarTela, QuestoesAcertadas}) {

const frases = [
    {
        id: 1,
        pergunta1: "¿Iasmin te",
        pergunta2: "de baba este domingo?",
        alternativas: ["he quedado", "has quedado", "ha quedado", "hemos quedado", "habeis quedado", "han quedado"],
        correto: 2
    },
    {
        id: 2,
        pergunta1: "En viernes yo",
        pergunta2: "mi abuela con mi madre y hermano.",
        alternativas: ["he visitado","has visitado", "ha visitado", "hemos visitado", "habeis visitado", "han visitado"],
        correto: 1
    },
    {
        id: 3,
        pergunta1: "En lunes ellos",
        pergunta2: "en TCC.",
        alternativas: ["he programado","has programado", "ha programado", "hemos programado", "habeis programado", "han programado"],
        correto: 6
    },
    {
        id: 4,
        pergunta1: "En miercoles nosotros",
        pergunta2: "mucha musica brasileña.",
        alternativas: ["he escuchado","has escuchado", "ha escuchado", "hemos escuchado", "habeis escuchado", "han escuchado"],
        correto: 4
    },
    {
        id: 5,
        pergunta1: "¿Vosotros",
        pergunta2: "en el parque?",
        alternativas: ["he caminado","has caminado", "ha caminado", "hemos caminado", "habeis caminado", "han caminado"],
        correto: 5
    },
    {
        id: 6,
        pergunta1: "En martes él",
        pergunta2: "verbo en la escuela.",
        alternativas: ["he conjugado","has conjugado", "ha conjugado", "hemos conjugado", "habeis conjugado", "han conjugado"],
        correto: 3
    }
]


const [frasecerta, setFrasecerta] = useState(0);
const [jaRespondeu, setJaRespondeu] = useState(false);
const [color, setColor] = useState("#FFF");
const [colortext, setColorText] = useState("#000");
const [disable, setDisable] = useState(false);
const [Acertos, setAcertos] = useState(0)

function ConfirmarResposta() {
    if (!jaRespondeu) {
        setJaRespondeu(true);
        setDisable(true);
        if (selectedOptionIndex + 1 === frases[frasecerta].correto) {
            setAcertos(Acertos + 1);
            setColor("green")
            setColorText("#FFF")
        }
        else {
            setColor("red")
            setColorText("#FFF")
        }
    }
    else {
        setDisable(false)
        setJaRespondeu(false);
        setColor("#fff");
        setColorText("#000")
        if (frases[frasecerta].id === 6) {
            trocarTela(Acertos);
        }
        else {
            setFrasecerta(frasecerta + 1);
        }
    }
}


const targetColors = ['#0B0531', '#040113','#080427','#06031d','#020009'];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) =>
        (prevIndex + 1) % targetColors.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);



    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
    const handleSelectChange = (event) => {
      const selectedIndex = parseInt(event.target.value);
      setSelectedOptionIndex(selectedIndex - 1);
    };

    
    return (
        <>
        <div className={style.containerHome} style={{backgroundColor: targetColors[currentColorIndex]}}>
            <header className={style.header}>
                <h1>VerboMania</h1>
            </header>

            <div style={{ width: '50%', backgroundColor: 'rgba(225, 3, 90, 0.22)', height: 12, borderRadius: 5, marginTop: 20}}>
                <div style={{ width: `${frases[frasecerta].id / 6 * 100}%`, backgroundColor: '#E1035A', height: 12, borderRadius: 5 }}></div>
            </div>

            <main className={style.main}>
                <h3>PERGUNTA {frases[frasecerta].id}</h3>
                <div className={style.frase}>
                    <p className={style.name}>{frases[frasecerta].pergunta1}
                    <select onChange={handleSelectChange} disabled={disable} style={{fontSize: 25, padding: 5, backgroundColor: color, color: colortext}}>
                        
                        {
                            frases[frasecerta].alternativas.map((option, index) => {
                                return (
                                    <option value={index} style={{fontSize: 20}}>{option}</option>
                                )
                            })
                        }

                    </select>
                    {frases[frasecerta].pergunta2}
                    </p>
                </div>
                <div className={style.button}>
                    <button className={style.buttonNext} onClick={ConfirmarResposta}>
                        <text>{jaRespondeu ? "Confirmar" : "Próximo"}</text>
                    </button>
                </div>
            </main>

            <footer>
            </footer>
        </div>

        {}

        </>
    )
}

export default Home
