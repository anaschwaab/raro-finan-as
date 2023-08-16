import { Card } from "../../components/card";
import { MainCard } from "../../components/mainCard";
import iconEntrada from '../../assets/trending-up.svg';
import iconSaida from '../../assets/trending-down.svg';
import iconCifrao from '../../assets/$.svg';
import './style.css';
import { CardAdd } from "../../components/cardAdd";
import { Modal } from '../../components/modal';
import { FormEvent, useState } from 'react';

export function Home() {

    const [show, setShow] = useState<boolean>(false);

    const [formData, setFormData] = useState<FormData[]>([{
        nome: 'Ana',
        data: '02/08/2023',
        categoria: 'Compras do mês',
        valor: 100.60,
        tipo: false,
    }]);
    
    const [entradas, setEntradas] = useState<number>(100.60);
    const [saidas, setSaidas] = useState<number>(0);
    const [saldo, setSaldo] = useState<number>(100.60);

    interface FormData {
        nome: string;
        data: string;
        categoria: string;
        valor: number;
        tipo: boolean;
    }

    function showModal() {
        setShow(true);
    }

    function closeModal() {
        setShow(false);
    }

    function onSubmit(e: FormEvent, dados: FormData) {
        e.preventDefault();
        setFormData([...formData, dados]);
        closeModal();
        if (dados.tipo === true) {
            setEntradas(prevEntradas => prevEntradas + dados.valor);
            setSaldo(prevSaldo => prevSaldo + dados.valor);
        } else {
            setSaidas(prevSaidas => prevSaidas + dados.valor);
            setSaldo(prevSaldo => prevSaldo - dados.valor);
        }
    }

    return (
        <>
            <div className="card-container">
                <Card icon={iconEntrada} valor={entradas} title="Entradas" color="#DCFCE7"/>
                <Card icon={iconSaida} valor={saidas} title="Saídas" color="#FEE2E2"/>
                <Card icon={iconCifrao} valor={saldo} title="Saldo" color="#DBEAFE"/>
                <CardAdd showModal={showModal} />
                {show && <Modal open={show} onClose={closeModal} onSubmit={onSubmit} />}
                    
            </div>
            <MainCard dados={formData}/>
        </>
    )
}