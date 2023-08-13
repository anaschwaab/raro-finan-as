import './style.css';

interface cardProps {
    title: string;
    valor: number;
    icon: string;
}

export function Card({title, valor, icon}: cardProps) {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">{title}</h2>
                    <img src={icon} alt="" />
                </div>
                <p className="card-value">{valor}</p>
            </div>
        </>
    )
}