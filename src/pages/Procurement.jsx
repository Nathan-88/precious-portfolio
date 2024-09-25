import Procur from "../../src/assets/Dashboard First.svg"
import Role from "../components/Role"
import UniqueSelling from "../components/UniqueSelling"
import UserGroup from "../components/UserGroup"
import JumpTo from "../components/JumpTo"
import HighFidelity from "../components/HighFidelity"
import Requisition from "../components/Requisition"
import Takeaw from "../components/Takeaw"

const Procurement = () => {

    return (
        <section className="bg-black pt-28">
            <section className="px-3 bg-black h-[90vh] md:h-auto overflow-hidden md:pt-10">
                <div className="flex flex-col justify-center items-center ">
                    <div className="flex flex-col items-center">
                        <p className="font-[200] text-white text-center text-sm">Enterprise SAAS spend management</p>
                        <p className="text-white font-bold text-center text-5xl mt-2">PROCUREMENT</p>
                        <p className="text-secondary text-sm text-center mt-2 ">REQUISITION / QUOTATIONS / BUDGET / CONFIGURATION / INVENTORY / </p>
                        <p className="text-secondary text-sm text-center">VENDOR MANAGEMENT / INVOICING / PURCHASE ORDER / VENDOR PORTAL</p>
                    </div>
                    <img className="mt-8" src={Procur} alt="" />
                </div>
            </section>

            {/* Jump To section */}
            <JumpTo/>

            {/* My role */}
            <Role/>
            
            {/* Unique selling proposition */}
            <UniqueSelling/>

            {/* UserGroup */}
            <UserGroup/>
            <HighFidelity/>
            <Requisition/>
            <Takeaw/>
        </section>
    );
}
export default Procurement;