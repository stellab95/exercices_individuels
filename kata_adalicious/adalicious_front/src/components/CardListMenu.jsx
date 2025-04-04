import { useState, useEffect } from 'react';
import CardMenu from './CardMenu';

function CardListMenu(){
    const [menus, setMenus] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const url = 'http://localhost:3000/menus'

            const response = await fetch(url)
            
                const data = await response.json()
            setMenus(data)
            console.log(menus)
        }
        fetchData()
    }, [])

    return (
        <div>
            {menus.map((menu) =>(
            <CardMenu key={menu.id} menu={menu}/>
            ))}
        </div>
    )

}

export default CardListMenu