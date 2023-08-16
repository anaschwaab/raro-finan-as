import './style.css';
import { FormData } from '../../types/types';

interface MainCardProps {
    dados: FormData[];
}

export function MainCard({ dados }: MainCardProps) {

    return (
        <>
            <div className="main-card-container">
                <div className="main-card">
                    <h1 className="main-card-title">Histórico de transações</h1>
                    <table className="main-card-table">
                        <thead>
                            <tr className="main-card-table-header">
                                <th>Nome</th>
                                <th>Data</th>
                                <th>Categoria</th>
                                <th>Valor</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dados.map((dado, index) => {
                                const valorFormatado = dado.valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" }).split(",")

                                const data = new Date(dado.data);
                                const dia = String(data.getUTCDate()).padStart(2, '0');
                                const mes = String(data.getUTCMonth() + 1).padStart(2, '0');
                                const ano = data.getUTCFullYear();
                                const dataFormatada = `${dia}/${mes}/${ano}`;

                                return (
                                    <tr className="main-card-table-data" key={index}>
                                        <td>{dado.nome}</td>
                                        <td>{dataFormatada}</td>
                                        <td>{dado.categoria}</td>
                                        <td>{`${valorFormatado[0]}, ${valorFormatado[1]}`}</td>
                                        <td className="data-type">{dado.tipo ? <span className="true">+</span> : <span className="false">-</span>}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};