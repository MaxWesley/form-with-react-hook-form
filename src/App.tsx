import './index.css'

function App() {
  return (
    <div className="App">
      <section>
        <h2>Formulário com React Hook Form</h2>
        <form>
          <label>
            <span>Nome: </span>
            <input
              type="text"
            />
          </label>
          <label>
            <span>Telefone: </span>
            <input
              type="number"              
            />
          </label>
          <label>
            <span>E-mail: </span>
            <input
              type="e-mail"
            />
          </label>
          <label>
            <span>Genero: </span>
            <select>
              <option>Selecionar ...</option>
              <option>Masculino</option>
              <option>Feminino</option>
              <option>Outro</option>
            </select>
          </label>
          <button>Enviar</button>
        </form>
      </section>
    </div>
  )
}

export default App
