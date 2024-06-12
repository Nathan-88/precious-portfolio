import Imgflow from "../assets/User_flow_image.png"
import Imgmobile from "../assets/User_flow_image_mobile.png"

const UserGroup = () => {
    return(
        <section id="User" className="bg-white px-8 py-12 md:px-10 xl:px-16 md:py-20 h-auto">
            <h2 className="text-5xl font-bold mb-10">User Groups</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-8 md:p-12 space-y-4 bg-tertiary rounded-lg md:col-span-1 md:row-span-2">
                    <h3 className="text-3xl font-bold">Requester</h3>
                    <p className="text-md">GOAL</p>
                    <p className="text-secondary">I want to get an item/ service to meet a need.</p>
                    <h4 className="">TASK</h4>
                    <ul className="text-secondary pl-4 list-disc marker:text-listcol space-y-2 xl:w-[70%]">
                        <li>Initiate a request for an item/service</li>
                        <li>Track the progress of the request</li>
                        <li>Receive the item</li>
                        <li>Generate reports</li>
                    </ul>
                    <h4 className="">WHERE DO I INTERACT WITH THE SYSTEM</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <ul className="text-secondary pl-4 list-disc marker:text-listcol space-y-2 xl:w-[70%]">
                        <li>Login/ onboarding</li>
                        <li>Requisition</li>
                        <li>Inventor</li>
                        </ul>
                        <ul className="text-secondary pl-4 list-disc marker:text-listcol space-y-2 xl:w-[70%]">
                        <li>Catalog</li>
                        <li>Report</li>
                        </ul>
                    </div>
                    <h4>PAIN POINT</h4>
                    <ul className="text-secondary pl-4 list-disc marker:text-listcol space-y-2 xl:w-[70%]">
                        <li>Would want to be able to create requests that are outside of the pre-agreed budget.</li>
                        <li>I would like a view of how much each purchase takes from the budget for my team</li>
                        <li>I would like to be notified at each stage of the purchasing processes.</li>
                    </ul>
                </div>

                {/* div 2 */}
                <div className="p-8 md:p-12 space-y-4 bg-tertiary rounded-lg md:col-span-1 md:row-span-1">
                    <h3 className="text-3xl font-bold">Approver</h3>
                    <p className="text-md">GOAL</p>
                    <p className="text-secondary">I  want to confirm details of requests and approve or reject</p>
                    <h4 className="">TASK</h4>
                    <ul className="text-secondary pl-4 list-disc marker:text-listcol space-y-2 xl:w-[70%]">
                        <li>Review details of request</li>
                        <li>Approve/ reject/ defer request</li>
                        <li>Generate reports</li>
                    </ul>
                    <h4 className="">WHERE DO I INTERACT WITH THE SYSTEM</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <ul className="text-secondary pl-4 list-disc marker:text-listcol space-y-2 xl:w-[70%]">
                        <li>Login/ onboarding</li>
                        <li>Requisition</li>
                        <li>Inventor</li>
                        </ul>
                        <ul className="text-secondary pl-4 list-disc marker:text-listcol space-y-2 xl:w-[70%]">
                        <li>Catalog</li>
                        <li>Report</li>
                        </ul>
                    </div>
                    <h4>PAIN POINT</h4>
                    <ul className="text-secondary pl-4 list-disc marker:text-listcol space-y-2 xl:w-[70%]">
                        <li>I would like to be notified once I have an approval requiring my attention automatically.</li>
                    </ul>
                </div>
                {/* div 3 */}
                <div className="p-8 md:p-12 space-y-4 bg-tertiary rounded-lg md:col-span-1 md:row-span-2">
                    <h3 className="text-3xl font-bold">Procurement Officer</h3>
                    <p className="">GOAL</p>
                    <p className="text-secondary">I want to complete the purchases of required items/services and manage Vendor relationships</p>
                    <h4 className="">TASK</h4>
                    <ul className="text-secondary pl-4 list-disc marker:text-listcol space-y-2 xl:w-[70%]">
                        <li>Review details of requests</li>
                        <li>Engage Vendors</li>
                        <li>Receive Quotes/ Purchase orders/ Invoices</li>
                        <li>Manage contracts</li>
                        <li>Generate reports</li>
                    </ul>
                    <h4 className="">WHERE DO I INTERACT WITH THE SYSTEM</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <ul className="text-secondary pl-4 list-disc marker:text-listcol space-y-2 xl:w-[70%]">
                        <li>Login/ onboarding</li>
                        <li>Requisition</li>
                        <li>Inventory</li>
                        <li>Vendor Management</li>
                        <li>Purchasing</li>
                        </ul>
                        <ul className="text-secondary pl-4 list-disc marker:text-listcol space-y-2 xl:w-[70%]">
                        <li>Catalog</li>
                        <li>Reports</li>
                        <li>Contract</li>
                        <li>Quotation</li>
                        </ul>
                    </div>
                    <h4>PAIN POINT</h4>
                    <ul className="text-secondary pl-4 list-disc marker:text-listcol space-y-2 xl:w-[70%]">
                        <li>Do not want to have to start searching for new Vendors whenever I have a purchase request.</li>
                        <li>I would like to be able to receive budgets from different branches directly to a central location for consolidation.</li>
                    </ul>
                </div>
                {/* div 4 */}
                <div className="p-8 md:p-12 space-y-4 bg-tertiary rounded-lg md:col-span-1 md:row-span-1">
                    <h3 className="text-3xl font-medium">Senior management</h3>
                    <p className="">Goal</p>
                    <p className="text-secondary">I want to monitor the efficiency and productivity/approve high level requests</p>
                    <h4 className="">TASK</h4>
                    <ul className="text-secondary pl-4 list-disc marker:text-listcol space-y-2 xl:w-[70%]">
                        <li>Review details of requests</li>
                        <li>Approve/ reject/ defer requests</li>
                        <li>Generate reports</li>
                    </ul>
                    <h4 className="">WHERE DO I INTERACT WITH THE SYSTEM</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <ul className="text-secondary pl-4 list-disc marker:text-listcol space-y-2 xl:w-[70%]">
                        <li>Login/ onboarding</li>
                        <li>Requisition</li>
                        <li>Inventory</li>
                        </ul>
                        <ul className="text-secondary pl-4 list-disc marker:text-listcol space-y-2 xl:w-[70%]">
                        <li>Catalog</li>
                        <li>Reports</li>
                        </ul>
                    </div>
                    <h4>PAIN POINT</h4>
                    <ul className="text-secondary pl-4 list-disc marker:text-listcol space-y-2 xl:w-[70%]">
                        <li>I would like to be notified once I have an approval requiring my attention automatically.</li>
                    </ul>
                </div>
                {/* div 5 */}
                <div className="p-8 md:p-12 space-y-4 md:space-y-0 gap-4 grid grid-cols-1 md:grid-cols-2 bg-tertiary rounded-lg md:col-span-2 md:row-span-1">
                    <div className="space-y-3 md:space-y-4">
                        <h3 className="text-3xl font-bold">Vendor</h3>
                        <p className="">GOAL</p>
                        <p className="text-secondary">I want to supply requested items/ service</p>
                        <h4 className="">TASK</h4>
                        <ul className="text-secondary pl-4 list-disc marker:text-listcol space-y-2 xl:w-[70%]">
                            <li>Send in PO/ Quotes/ Invoices</li>
                            <li>Contract engagement</li>
                            <li>Reports</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                    <h4 className="">WHERE DO I INTERACT WITH THE SYSTEM</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <ul className="text-secondary pl-4 list-disc marker:text-listcol space-y-2 xl:w-[70%]">
                        <li>Login/ onboarding</li>
                        <li>Requisition</li>
                        <li>Inventory</li>
                        <li>Contract</li>
                        </ul>
                    </div>
                    <h4>PAIN POINT</h4>
                    <ul className="text-secondary pl-4 list-disc marker:text-listcol space-y-2 xl:w-[70%]">
                        <li>I would like to be notified about request for quotation/purchase order/invoices.</li>
                        <li>I would like to manage my company information.</li>
                    </ul>
                    </div>
                </div>
            </div>

            <section className="bg-white md:px-8 space-y-10 py-12 md:py-20 h-auto">
                <h2 className="xl:w-[80%] font-bold underline text-4xl">Main Breakdown Flow For Procurement Users</h2>
                <img src={Imgflow} alt="User Flow" className="hidden xl:block w-full object-cover"/>
                <img src={Imgmobile} alt="User Flow" className="xl:hidden w-full object-cover"/>
            </section>
        </section>
    )
}
export default UserGroup;