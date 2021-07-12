function Counter(props) {
    return (
        <div className="Counter">
            <h5>Quantidade de livros</h5>
            <div> {props.value} </div>
        </div>
    )
}

export default Counter