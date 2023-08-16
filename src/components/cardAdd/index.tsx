import './style.css';
import iconPlus from '../../assets/plus-sm.svg';

interface CardAddProps   {
    showModal: () => void,
}

export function CardAdd({showModal}: CardAddProps) {
    

    return (
        <>
            <div className="cardAdd">
                <div className="cardAdd-img">
                    <button 
                        className="cardAdd-button"
                        onClick={showModal}>
                        <img src={iconPlus} alt="Ícone de adição"/>
                    </button>
                </div>
                <p className="cardAdd-text">TRANSAÇÃO</p>
            </div>
            
        </>
    )
}