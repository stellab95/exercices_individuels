import Banner from './../components/Banner'
import '../styles/OrderTrackingPage.css'


function OrderTrackingPage(){
    return (
        <div>
            <Banner text="Merci pour ta commande" userName="Stella" />
            <p>Suivi :</p>
            <div className='menu-content'>
                <p className='order-traking'>En préparation</p>
                <p className='img-menu'>🍫</p>
                <p>Back-end brownie x1</p>
            </div>

        </div>
    )
}

export default OrderTrackingPage