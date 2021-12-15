import dummy from "../db/data.json"
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
                    <tr key={word.id}>
                        <td>
                            <input type="checkbox"></input>
                        </td>
                        <td>
                            {word.eng}
                        </td>
                        <td>
                            {word.kor}
                        </td>
                        <td>
                            <button>뜻보기</button>
                            <button class="btn_del">삭제</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}