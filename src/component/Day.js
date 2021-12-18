import dummy from "../db/data.json"
import Word from './Word.js'
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function Day() {
    // dummy.words
    const day = useParams.day;
    const wordList = dummy.words.filter(word => (
        word.day === Number(day)
    ))

    return (
        <>
        <h2>Day {Day}</h2>
        <table>
            <tbody>
                {wordList.map(word => (
                    <Word word={word} key={word.id}/>
                
                ))}
            </tbody>
        </table>
        </>
    );
}