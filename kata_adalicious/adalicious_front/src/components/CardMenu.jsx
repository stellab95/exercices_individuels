import '../styles/CardMenu.css'

function CardMenu({menu}){

    return (
        <div className="container-card-menu">
            <div className='img-container-card-menu'>
            <p className="img-card-menu">{menu.image}</p>
            </div>
            <div className='menu-content-card-menu'>
            <div className="description-card-menu">
            <h3 className="title-card-menu">{menu.plate}</h3>
            <p className="description-card-menu">{menu.description}</p>
            </div>
            <div className='button-container'>
            <button className="button-order-card-menu">Commander</button>
            </div>
            </div>
        </div>
    )
}

export default CardMenu