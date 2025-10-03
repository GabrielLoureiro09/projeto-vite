const TemplateExpressions = () => {
    const name = "Rodox";
    const data = {
        age: 39,
        job: 'Programador'
    };
    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{4 + 4}</p>
        </div>
    )
}

export default TemplateExpressions