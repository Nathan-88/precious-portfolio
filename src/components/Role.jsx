import RoleImg from '../../src/assets/cuate.svg'
const Role = () => {
    return(
        <section className="h-auto p-10 xl:px-20  w-full flex flex-col items-center xl:flex-row gap-x-10 xl:justify-between">
                <div className="text-white font-light mb-10 xl:mb-0 xl:w-2/5">
                    <h3 className="font-bold text-5xl pb-5">My Role</h3>
                    <p className="text-sm mb-3 xl:mb-7">
                        I worked with a lead UX designer, 2 product managers, QA’s and a team of front and back end developers. I later became the only designer on the procurement team; 
                    </p>
                    <p className="text-sm pb-1">Creating visual designs</p>
                    <p className="text-sm v">Working closely with developers</p>
                    <p className="text-sm">Collaborating with product managers to define growth</p>
                    <p className="text-sm">opportunities for this product</p>
                </div>
                <div className="">
                    <img src={RoleImg} alt="people walking together" className=""/>
                </div>
            </section>
    )
}

export default Role