import { useState } from 'react';
import './styles.css'

const MyApp = () => {
    const [backgroundColor, setBackgroundColor] = useState("#0e0606ff");
    const [textColor, setTextColor] = useState("#cf2323");
    const [buttonStyle, setButtonStyle] = useState("#0e68f0");
    const [theme, setTheme] = useState("Blood Moon");//mine

    const handleClick = () => {
        setTheme(theme === "Blood Moon"? "Whispers of Winter": "Blood Moon");
        setBackgroundColor(backgroundColor === "#0e0606ff" ? "#0ec3f0" : "#0e0606ff");
        setTextColor(textColor === "#cf2323"? "#0e68f0" : "#cf2323");
        setButtonStyle(buttonStyle === "#0e68f0" ? "#cf2323" : "#0e68f0");
    };


    //mine
    const story1 = <div>
                        
            <p>The full moon hung like a pale eye over the town, casting streets in silver and shadows in black. In those shadows, he moved with deliberate patience, savoring the night’s silence as if it belonged to him alone.</p>
            <p>He had watched his victims for weeks, memorized their routines, and tonight, the moonlight would bear witness to his work. Each step was measured, each breath controlled. Tonight, blood would flow, and terror would thrive.</p>
            <p>The first door gave way with a soft creak. A single scream tore the quiet, short and sharp, then silence. Limbs were arranged grotesquely, blood pooled like ink on the floor, and symbols, carved with surgical precision, marked the walls.</p>
            <p>From alleyways to abandoned courtyards, he painted a trail of horror. Windows reflected shards of red and silver, each glint echoing the screams that would haunt the town forever. The night air carried the coppery scent of fear, intoxicating and sharp.</p>
            <p>By midnight, the streets were deserted, save for the dripping blood and the faint shuffle of his footsteps. He paused atop a rooftop, looking down at the town trembling beneath the moon’s cold gaze. Satisfaction curled in his chest like fire.</p>
            <p>His final prey waited unknowingly, oblivious to the predator in the shadows. He descended swiftly, silent as death itself, leaving the last scene meticulously arranged, a signature of his calculated madness.</p>
            <p>When the first hints of dawn crept across the sky, he vanished. The town awoke to streets lined with carnage, a silence heavy with terror. The full moon faded, but its witness lingered, a reminder that horror could strike under any night’s quiet eye.</p>
                    </div>;

     const story2 = <div>

            <p>Elena stepped carefully through the snow-covered forest, the blizzard’s icy fingers clawing at her cheeks. She ignored the village warnings, determined to gather the rare winter herbs, unaware that the forest itself was alive with memory and grief.</p>
            <p>Shadows twisted in the snow, faint shapes resembling lost travelers frozen mid-step. The wind carried whispers, soft at first, then urgent, curling around her mind, coaxing her deeper into the white wilderness.</p>
            <p>Through the haze, a pale, ghostly figure emerged, its eyes hollow and filled with sorrow. It vanished before she could speak, leaving only an icy chill that sank to her bones and whispers that beckoned her forward.</p>
            <p>Branches groaned under heavy snow, and the path before her became indistinct. The voices grew clearer, telling stories of those trapped, their spirits bound to the forest by sudden storms and cruel winter nights.</p>
            <p>At the heart of the forest, she found an abandoned cabin, snow piled high against the walls. Inside were remnants of lost travelers — scattered belongings, frozen footprints, faint echoes of past screams — a tableau of tragedy preserved in ice.</p>
            <p>The ghost reappeared, guiding her out, and she obeyed, heart hammering. The forest seemed to exhale as she left, the blizzard carrying the whispers far behind her, yet they lingered in her mind, an invisible frost on her soul.</p>
            <p>When she emerged at dawn, the village lay quiet beneath a pale sun. The storm had passed, but Elena knew the forest had not let go of her — the whispers of winter would follow, unseen, forever haunting the edge of memory.</p>
                    </div>               

  return (
    <section style={{ backgroundColor, color: textColor}}>
        <button onClick={handleClick} 
            style={{backgroundColor, color: buttonStyle}}>
            {theme == "Blood Moon" ? "Whispers of Winter" : "Blood Moon" }
        </button><br/>
        <div>
            <h2>Project 5: Theme selector</h2>
            </div>
        <div className="content">
             <br/>
            <h1>
                {theme === "Blood Moon" ? "When the Moon Bleeds, Even the Stars Tremble in Fear..." : "Whispers of Winter Travel on the Cold Winds, Telling Tales Only the Snow Can Keep..."}
            </h1> <br/> <br/>

        <div className="story content">
                {theme === "blood moon" ? story1: story2}
        </div>
            
        </div>
    </section>
  );
};

export default MyApp;

/**I expanded on the teacher version*/