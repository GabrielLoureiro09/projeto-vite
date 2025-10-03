const Challenge = () => {
    const a = 10
    const b = 15

    const handleSomar = () => {
        alert(a + b)
    }

    return (
        <div>
            <p>A: {a}</p>
            <p>B: {b}</p>
            <button onClick={handleSomar}>Somar!</button>
        </div>
    )
}

export default Challenge