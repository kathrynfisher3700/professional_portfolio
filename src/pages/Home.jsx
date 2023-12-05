import '../styles/Home.css'
import icon from '../assets/kathryn-icon.png'
import paint from '../assets/paint.png'


function Home() {

    return (
        <div>
            <div>
           <img src={icon} id='icon'></img> 
           </div>
           <div>
            <img src={paint} id='paint'></img>
            <h1>Hello!</h1>
           </div>
        </div>
    )
}

export default Home;