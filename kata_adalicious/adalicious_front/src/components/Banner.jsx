import '../styles/Banner.css'

function Banner({text, userName}){
    return (
        <div>
            <h1 className='logonav'>Adalicious 🥦</h1>
            <p className='subtitle'>{text} {userName}</p>
        </div>
    )
}

export default Banner