import { useState } from "react";
import "./styles.css";

const MyApp = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        {
            quote: "I tried to steal it, but it was so good I ended up paying for it instead.",
            author: "Robin of Loxley",
        },
        {
            quote: "Strong enough to swing as a weapon... but I mostly use it for everyday life.",
            author: "Little John",
        },
        {
            quote: "I read the manual in Latin. Still confused, but it looks impressive on my shelf.",
            author: "Friar Tuck",
        },
        {
            quote: "I once predicted this product would change history. Turns out, I was right.",
            author: "Herne the Hunter",
        },
        {
            quote: "I tried to ban it in Nottingham, but even I secretly use it.",
            author: "The Sheriff of Nottingham",
        },
          {
        quote: "It’s reliable, unlike most men in tights.",
        author: "Lady Marian",
         },
        {
        quote: "I don’t fully understand it, but Robin told me it’s brilliant — so I agree.",
        author: "Much, the Miller’s Son",
         },
    ];

/** Modulus %
 * ඉතුරු නැතුව බෙදෙනවනO බින්දුවයි. නැත්නO අර ඉතුරු ගානමයි.
 * 7 % 7 = 0
 * 1 % 7 = 1
 * 5 % 7 = 5
 * 6 % 7 = 6
 */

    const handlePrevClick = () => 
        setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length);

    const handleNextClick = () => 
        setCurrentIndex((currentIndex + 1) % testimonials.length);

    return(
        <>
        <div>
            <h2>Project 7: Testimonials App</h2>
            <div className="testimonials">
                <div className="testimonials-quote">
                {testimonials[currentIndex].quote}
                </div>
                <div className="testimonials-author">
                ~{testimonials[currentIndex].author}
                </div>
                <div className="testimonials-nav">
                    <button onClick={handlePrevClick}>Prev</button>
                    <button onClick={handleNextClick}>Next</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default MyApp; 