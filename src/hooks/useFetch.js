export default function useFetch(url) {
    const [ data, setData] = useState([]);

    useEffeft(() => {
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setWords(data);
        });
    }, [url]);
    return data;
}
