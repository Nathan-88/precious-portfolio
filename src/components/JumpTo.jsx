import { Link } from "react-router-dom";
import MacBook from "../../src/assets/MacBook Pro 16-inch Space Black Front.png"

const Items = [
    {link: "#Unique", name: "Impact"},
    {link: "#High", name: "Final designs"},
    {link: "#Overview", name: "Ux Research"},
    {link: "#User", name: "User groups"}
]
const JumpTo = () => {
    return(
        <section className="bg-tertiary px-8 py-12 md:px-16 md:py-20 h-auto">
            <div className="space-y-3">
                <h2 id="Overview" className="text-5xl font-bold">Jump To</h2>
                <div className="flex flex-wrap space-x-2">
                    {Items.map((item, index) => (
                    <div key={index} className="border border-current py-2 px-4 mb-2 rounded-full">
                        <a href={item.link} className="">{item.name}</a>
                    </div>))}
                </div>
                <hr className=" border-current"/>
            </div>

            <section className="pt-10">
                <h2 className="text-5xl font-bold mb-10">Project Overview</h2>
                <div className="flex gap-4 flex-col xl:flex-row justify-center items-center">
                    <div className="p-2 space-y-4 xl:w-1/2">
                        <div className="space-y-2">
                            <h3 className="font-medium text-3xl">Why</h3>
                            <p className="">Seamless Procurement SaaS is designed to revolutionise the way organisations manage their procurement spend. It streamlines the entire procurement process, from requisition to payment, helping companies save time, reduce costs, and improve overall efficiency.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-medium text-3xl">Problem</h3>
                            <p className="">Procurement officers struggle with managing the entire procurement life cycle. From receiving requests from employees, to managing inventory, to getting approval for purchase from C-level suite and interacting with vendors.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-medium text-3xl">Solution</h3>
                            <p className="">To provide a world class procurement SaaS solution to empower companies to run their operations seamlessly, influence corporate strategy and drive business impact.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/2 px-3 pt-10 rounded-lg bg-white">
                        <img src={MacBook} alt="Macbook" className=""/>
                    </div>
                </div>
                <div className=" bg-primary py-3 mt-8 px-4  xl:w-fit rounded-full text-center">
                    <Link to="https://SeamlessHR.com" className="text-white">Go to SeamlessHR.com</Link>
                </div>
            </section>
        </section>
    )
}

export default JumpTo;