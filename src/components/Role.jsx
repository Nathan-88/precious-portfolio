import RoleImg from '../../src/assets/cuate.svg'
const Role = () => {
    return(
        <section className="h-auto px-10 xl:px-20  w-full flex flex-col items-center xl:flex-row gap-x-10 xl:justify-between">
                <div className="text-white md:mx-10 xl:m-0 xl:w-2/5">
                    <h3 className="font-bold text-4xl py-5">My Role</h3>
                    <p className="text-sm pb-2 font-[400] font-work-sans xl:pb-5">
                        I worked with a lead UX designer, 2 product managers, QA’s and a team of front and back end developers. I later became the only designer on the procurement team and it was my responsibility for end-to-end ideation through implementation of everything our team built.
                    </p>
                    <p className="text-sm pb-1 font-[400] font-work-sans">Creating visual designs</p>
                    <p className="text-sm font-[400] font-work-sans">Working closely with developers</p>
                    <p className="text-sm font-[400] font-work-sans">Collaborating with product managers to</p>
                    <p className="font-[400] pb-3 text-sm font-work-sans">define growth opportunities for this product</p>
                </div>
                <div className="pt-8">
                    <img src={RoleImg} alt="people walking together" className=""/>
                </div>
            </section>
    )
}

export default Role