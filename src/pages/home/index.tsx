import { Card } from "../../components/card";
import { MainCard } from "../../components/mainCard";
import iconEntrada from '../../assets/trending-up.svg';
import iconSaida from '../../assets/trending-down.svg';
import iconCifrao from '../../assets/$.svg';
import './style.css';
import { CardAdd } from "../../components/cardAdd";

export function Home() {

    const valor: number = 1853.12;
    const valor2: number = 532.52;
    const valor3: number = 1320.60;

    return (
        <>
            <div className="card-container">
                <Card icon={iconEntrada} valor={valor} title="Entradas"/>
                <Card icon={iconSaida} valor={valor2} title="Saídas"/>
                <Card icon={iconCifrao} valor={valor3} title="Saldo"/>
                <CardAdd />
            </div>
            <MainCard />
        </>
    )
}