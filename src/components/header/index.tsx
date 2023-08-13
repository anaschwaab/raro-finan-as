import './style.css';
import iconProfile from '../../assets/icon-profile.svg';
import iconCard from '../../assets/credit-card.svg';

export function Header() {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src={iconCard} alt="Logo" />
                    <h1 className="header-title">Raro Finanças</h1>
                </div>
                <div className="profile">
                    <div className="profile-text">
                        <p>Samantha Freitas</p>
                        <span>sam.freitas@example.com</span>
                    </div>
                    <img src={iconProfile} alt="Profile Picture" />
                </div>
            </header>
        </>
    )
}
