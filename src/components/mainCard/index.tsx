import './style.css';

export function MainCard() {
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
                            <tr className="main-card-table-data">
                                <td>Venda de celular antigo</td>
                                <td>01/08/2023</td>
                                <td>Renda extra</td>
                                <td>R$ 1.853,12</td>
                                <td>+</td>
                            </tr>
                            <tr className="main-card-table-data">
                                <td>Ida ao cinema</td>
                                <td>05/08/2023</td>
                                <td>Lazer</td>
                                <td>R$ 82,53</td>
                                <td>-</td>
                            </tr>
                            <tr className="main-card-table-data">
                                <td>Compras do mês</td>
                                <td>07/08/2023</td>
                                <td>Alimentação</td>
                                <td>R$ 1.853,12</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};