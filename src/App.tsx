import './index.css'

import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm()
  
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="App">
      <section>
        <h2>Formulário com React Hook Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <span>Nome: </span>
            <input
              type="text"
              {...register('nome')}
            />
          </label>
          <label>
            <span>Telefone: </span>
            <input
              type="number"   
              {...register('telefone')}           
            />
          </label>
          <label>
            <span>E-mail: </span>
            <input
              type="e-mail"
              {...register('email')}
            />
          </label>
          <label>
            <span>Genero: </span>
            <select {...register('genero')}>
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
