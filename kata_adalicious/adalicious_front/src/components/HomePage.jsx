import '../styles/HomePage.css'

function HomePage(){
    return (
        <div className="homepage">
            <div className='kitchen-button-container'>
                <button className="access-kitchen-button">Accès cuisine</button>
            </div>
            <div className="welcome-content">
                <p className="logo-welcome-page">🥦</p>
                <h1 className="welcome-message">Bienvenue sur Adalicious</h1>
                <p>pour commencer, peux-tu me donner ton prénom</p>
                <input className='input-name-welcome-page' type="text" name="name-input" id="input-name-welcome-age" />
                <button className="access-welcome-button">Valider</button>
            </div>
        </div>
    )
}

export default HomePage