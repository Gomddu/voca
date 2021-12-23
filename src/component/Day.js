import Word from './Word.js'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function Day() {
    // dummy.words
    const {day} = useParams();
    const [words, setWords] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:3001/words?day=${day}`)
            .then(res=>{
                return res.json()
            })
            .then(data => {
                setWords(data);
            });
    }, []);

    return (
        <>
        <h2>Day {Day}</h2>
        <table>
            <tbody>
                {words.map(word => (
                    <Word word={word} key={word.id}/>
                
                ))}
            </tbody>
        </table>
        </>
    );
}