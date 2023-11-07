import axios from 'axios';
import { useState, useEffect } from 'react'

import Input from "./Input"

import styles from './Form.module.css'

export default function Form() {
    const [ cep, setCep ] = useState('')
    const [ address, setAddress ] = useState([])
    const [ showDetails, setShowDetails ] = useState(false)

        //evento chamado quando ocorre um evento de mudança no campo do cep
        const handleChange = (e) => {
            setCep(e.target.value);
        }

        //mostra as infos quando o botão é clicado
        const handleClick = async (e) => {
            e.preventDefault()
            if (cep.length == 8) {
                try {
                    const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                    //quando der certo:
                    console.log(data)
                    setAddress(data)
                    setShowDetails(true);
                }
                catch(err) {
                    console.log(err)
                } 
                finally {
                    console.log('resultado')
                }
            }
        }


    return (
        <div className={styles.form_control}>
            <form>
                <Input
                    text="CEP:"
                    type="number"
                    placeholder="Digite seu CEP"
                    onChange={handleChange}
                />
                <button onClick={handleClick}>Buscar</button>
            </form>

            {showDetails && Object.keys(address).length > 0 && (
                <div className={styles.details}>
                    <h2>Seu endereço é:</h2>
                    <p>CEP: {address.cep}</p>
                    <p>Rua: {address.logradouro}</p>
                    <p>Bairro: {address.bairro}</p>
                    <p>Cidade: {address.localidade}</p>
                    <p>Estado: {address.uf}</p>
                </div>
            )}
        </div>
    )
}