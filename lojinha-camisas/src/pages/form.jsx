class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: 'Nome de teste',
            msg: 'Esse produto tem uma excelente qualidade'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Nome:
                    <input
                        name="nome" type="text"
                        checked={this.state.nome}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Mensagem:
                    <textarea
                        name="msg"
                        value={this.state.msg}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

