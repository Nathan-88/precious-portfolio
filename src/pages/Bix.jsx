import pana from "../assets/pana.png"
import Generalrespon from "../components/Generalrespon";
import Projectinfo from "../components/Projectinfo";
const Bix = () => {
    return(
        <section>
            <div className="bg-listcol h-auto flex items-center justify-center pt-48">
                <img src={pana} alt="pic"/>
            </div>
            <Projectinfo/>
            <Generalrespon/>

        </section>
    )
}
export default Bix;