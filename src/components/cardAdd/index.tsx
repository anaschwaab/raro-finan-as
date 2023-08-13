import './style.css';
import iconPlus from '../../assets/plus-sm.svg';

export function CardAdd() {
    return (
        <>
            <div className="cardAdd">
                <div className="cardAdd-img">
                    <img src={iconPlus} alt="Ícone de adição" />
                </div>
                <p className="cardAdd-text">Transação</p>
            </div>
        </>
    )
}