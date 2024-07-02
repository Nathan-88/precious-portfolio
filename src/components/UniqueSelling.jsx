import Research from '../assets/Research 2.png'
const UniqueSelling = () => {
    return(
        <section id="Unique" className="bg-tertiary px-8 py-12 md:px-16 xl:px-22 md:py-20 h-auto">
            <div className="xl:px-4 flex flex-col xl:flex-row xl:justify-between">
                <div className="mb-10 xl:my-auto font-bold xl:w-[30%]">
                    <h2 className=" text-5xl xl:text-xxl text-secondary">Unique Selling <span className="text-black">Proposition</span></h2>
                </div>
                <div className=" xl:w-[43%]">
                    <h3 className="mb-4 font-bold text-2xl xl:w-[90%]">To build a world class SaaS product with the following modules as solution</h3>
                    <ul className="list-disc pl-4 marker:text-listcol space-y-2 xl:w-[87%] font-work-sans text-sm font-[400]">
                        <li>Requisition module: Where users can make request for goods or services</li>
                        <li>Purchase order: Where procurement officers can manage requests</li>
                        <li>Quotations: Where procurement officers can manage quotes with vendors</li>
                        <li>Invoicing: Where procurement officers can manage invoices with vendors</li>
                        <li>Vendor Portal: Where procurement officers can manage invoices with vendors</li>
                        <li>Others: Receiving & returning, Budgeting, vendor management, inventory, configuration</li>
                    </ul>
                </div>
            </div>
            {/* Research */}
            <div className='my-10 pt-10 flex flex-col gap-10 xl:gap-x-32 xl:flex-row xl:justify-center xl:items-center'>
                <div className='xl:w-[38%]'>
                    <h2 className='text-[36px] font-bold mb-3'>Research</h2>
                    <p className='text-hueblack font-[400] font-work-sans  pb-2 text-sm'>Please note that research was done already before I joined the team. So to get started, I started with learning everything I could about the industry and the vision of the product through documentation, having calls with the team, signing up to existing platforms and talking to people who already had a good understanding of the goal of the product is and must-have features.
                    </p>
                    <p className='text-hueblack font-[400] font-work-sans text-sm'>
                        I closed in on my knowledge gap about the users, business goals and product needs and then I set out to work, working closely with the product owner and the rest of the team.
                    </p>
                </div>
                <div className='xl:w-[50%]'>
                    <img src={Research} alt='research'/>
                </div>
            </div>
            
            {/* Market insite */}
            <div className='grid grid-cols-1 space-y-4 xl:space-y-0 xl:grid-cols-3 gap-4'>
                <div className=''>
                    <h2 className='mb-3 font-bold text-4xl'>Market Insight</h2>
                    <div className='text-hueblack font-[400] font-work-sans text-sm w-[70%] space-y-2'>
                        <p className=''>
                            The procurement software application market will bring in an estimated 5.94 billion U.S. dollars in total revenue in 2021.
                        </p>
                        <p className=''>
                            90% + of new eProcurement solution implementations are cloud based, due to benefits around agility, upgrades, collaboration and innovation
                        </p>
                        <p className=''>
                            The “User experience” is no longer a nice to have. In the digital age – it is (and should be) the number 1 requirement for clients.
                        </p>
                    </div>
                </div>
                <div className=''>
                    <h2 className='mb-3 font-bold  text-4xl'>Top Insight</h2>
                    <p className='text-hueblack font-[400] font-work-sans text-sm xl:w-[73%]'>
                        According to Gartner Research 2019, 72% of Top CPO’s interviewed identified “Underutilisation of analytics technologies” as the top critical issue to tackle, and 64% identified “Inability to accurately gauge supplier performance” as the next.
                    </p>
                </div>
                <div className='space-y-3'>
                    <h2 className='font-bold text-4xl'>Industry Challenges</h2>
                    <ul className="text-sm text-hueblack font-[400] font-work-sans list-disc marker:text-listcol space-y-2 xl:w-[70%] pl-4">
                        <li>Lack of skilled Procurement resources with a strategic view</li>
                        <li>Legacy structures and practices</li>
                        <li>Disparate technology provisio</li>
                        <li>Incidence of fraud</li>
                        <li>Poor user experience</li>
                        <li>Lack of standardization of processes and inefficiency</li>
                        <li>Lack of consistent measurement of procurement savings</li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default UniqueSelling