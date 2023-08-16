import { FormEvent, useState } from 'react';
import './style.css';
import { FormData } from '../../types/types';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (e: FormEvent, dados: FormData) => void;

}

export function Modal({ open, onClose, onSubmit }: ModalProps) {

    if (!open) return null;

    const [formData, setFormData] = useState<FormData>({
        nome: '',
        data: '',
        categoria: '',
        valor: 0,
        tipo: true,
    });

    return (
        <>
            <div className="modal-container-content">
                <div className="modal-container">
                    <h1 className="modal-title">Nova transação</h1>
                    
                        <form className="modal-form">
                            <div className="form-group">
                                <label htmlFor="nome">Nome</label>
                                <input
                                    type="text"
                                    id="nome"
                                    placeholder="Digite o nome da sua transação"
                                    name="nome"
                                    required
                                    value={formData.nome}
                                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="data">Data</label>
                                <input
                                    type="date"
                                    id="data"
                                    required
                                    placeholder="Digite a data da transação"
                                    name="data"
                                    value={formData.data}
                                    onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="categoria">Categoria</label>
                                <input
                                    type="text"
                                    id="categoria"
                                    required
                                    placeholder="Digite a categoria da transação"
                                    name="categoria"
                                    value={formData.categoria}
                                    onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="valor">Valor</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    id="valor"
                                    required
                                    placeholder="Digite o valor da transação"
                                    name="valor"
                                    onChange={(e) => setFormData({ ...formData, valor: Number(e.target.value) })}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tipo">Tipo</label>
                                <div className="form-group-radio">
                                    <input
                                        className="input"
                                        name="tipo"
                                        value="Entrada"
                                        checked={formData.tipo === true}
                                        type="radio"
                                        onChange={() => setFormData({ ...formData, tipo: true})} />
                                    <img src="src/assets/trending-up.svg" alt="" />
                                    <p>Entrada</p>

                                    <input
                                        className="input"
                                        name="tipo"
                                        value="Saída"
                                        checked={formData.tipo === false}
                                        type="radio"
                                        onChange={() => setFormData({ ...formData, tipo: false })} />
                                    <img src="src/assets/trending-down.svg" alt="" />
                                    <p>Saída</p>
                                </div>
                            </div>
                        </form>
                    
                    <div className="form-button-container">
                        <button className="modal-form-button-cancel" onClick={onClose}>
                            <img src="src/assets/x.svg" alt="cancelar" />
                            Cancelar
                        </button>
                        <button className="modal-form-button" onClick={(e) => onSubmit(e, formData)}>
                            <img src="src/assets/check.svg" alt="confirmar" />
                            Adicionar
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}