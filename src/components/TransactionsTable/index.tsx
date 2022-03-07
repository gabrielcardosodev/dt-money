import { useEffect } from "react"
import { api } from "../../services/api"
import { Container } from "./styles"

export function TransactionsTable() {
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }
    , []) 

  return (
    <Container>
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Frella</td>
                    <td className="deposit">R$ 3.000,00</td>
                    <td>Work</td>
                    <td>22/04/21</td>
                </tr>

                <tr>
                    <td>Aluguel</td>
                    <td className="withdraw">-R$ 1.500,00</td>
                    <td>Home</td>
                    <td>10/05/21</td>
                </tr>
            </tbody>
        </table>
    </Container>
  )
}