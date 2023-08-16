import './style.css';

interface cardProps {
    title: string;
    valor: number;
    icon: string;
    color: string;
}

export function Card({title, valor, icon, color}: cardProps) {

    const valorFormatado = valor.toLocaleString("pt-br", {style: "currency", currency: "BRL"}).split(",")
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">{title}</h2>
                    <div className="icon" style={{backgroundColor: color}}>
                    <img src={icon} alt="" />
                    </div>
                </div>
                <p className="card-value">{valorFormatado[0]},<span className="centavos">{valorFormatado[1]}</span></p>
            </div>
        </>
    )
}