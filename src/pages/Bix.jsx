import pana from "../assets/pana.png"
import Designprocess from "../components/Designprocess";
import End2 from "../components/End2";
import Fun from "../components/Fun";
import Generalrespon from "../components/Generalrespon";
import Learning from "../components/Learning";
import Numbers from "../components/Numbers";
import Projectinfo from "../components/Projectinfo";
import Team from "../components/Team";
import Way from "../components/Way";
const Bix = () => {
    return(
        <section>
            <div className="bg-listcol h-auto flex items-center justify-center pt-48">
                <img src={pana} alt="pic"/>
            </div>
            <Projectinfo/>
            <Generalrespon/>
            <Designprocess/>
            <End2/>
            <Way/>
            <Numbers/>
            <Team/>
            <Fun/>
            <Learning/>

        </section>
    )
}
export default Bix;