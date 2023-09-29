import { useState } from 'react'
import './Homescreen.css'
import './container.css'
import './sliders.css'

function Homescreen() {
  const [moodNumber, setMood] = useState("5");
  const [maxHurt, setMaxHurt] = useState("5");
  const [averageHurt, setAverageHurt] = useState("5");
  const [pilleGenommen, setGenommen] = useState("Pille");
  const [heart, setheart] = useState("heartNo");
  const [bannerVisible, setVisible] = useState("notVisible");


  return (
    <>
      <div className='all'>
        <div className={bannerVisible}>
          Änderungen wurden gespeichert!
          <br/>
          <button className={"closeAlert"} onClick={() => setVisible("notVisible")}>
            close
            </button>
        </div>
        <div>
          <div className='header'>
            Hallo Ami
          </div>
        </div>
        <div className='main-page'>
          <div className='firstrow'>
            <div className='howFeel'>
              <button className={pilleGenommen} onClick={() => setGenommen(pilleGenommen === "PilleGenommen" ? "Pille" : "PilleGenommen")}>
                Genommen
              </button>
            </div>
            <div className='slidecontainer'>
              <div className='mood-text'>Mood :)</div>
              <div className='slidecontainer2'>
                <input type="range" min="0" max="10" defaultValue="5" className="slider" id="myRange" onChange={(e) => setMood(e.currentTarget.value)} />
                <div className="moodslidernumber">
                  {moodNumber}
                </div>
              </div>
            </div>
            <div className='sex'>
              <button className={heart} onClick={() => setheart(heart === "heartYes" ? "heartNo" : "heartYes")}>
                ♥︎
              </button>
            </div>
            <div className='schmerzencontainer'>
              <div className='max-container'>
                <div className='hurt-text'>
                  Maximale schmerzen: {maxHurt}
                </div>
                <input type="range" min="0" max="10" defaultValue="5" className="slider-hurt" id="myRange" onChange={(e) => setMaxHurt(e.currentTarget.value)} />
              </div>
              <div className='average-container'>
                <div className='hurt-text2'>
                  durchschnittlich über den ganzen Tag:
                  <br />
                  {averageHurt}
                </div>
                <input type="range" min="0" max="10" defaultValue="5" className="slider-hurt" id="myRange" onChange={(e) => setAverageHurt(e.currentTarget.value)} />
              </div>
            </div>
          </div>
        </div>
      </div>
        <div>
          <button className={"check"} onClick={()=>setVisible("visible")}>✔︎</button>
        </div>
    </>
  )
}


export default Homescreen
