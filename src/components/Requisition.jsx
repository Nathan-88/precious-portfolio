import React, { useState, useRef} from "react"
import purchase from "../assets/requisiiiii.svg"
import product from "../assets/Filled product requisition- Send for approval.svg"
import img1 from "../assets/Imagepic1.png"
import img from "../assets/Imagepic.png"
import img3 from "../assets/Image.png"
import img4 from "../assets/Purchase requisition - single item.png"
import request from "../assets/request.png"
import rf from "../assets/RFQ REPORT PAGE.png"
import quotation from "../assets/Quotation received.png"
import reqimg from "../assets/reqImage.png"
import purchaseo from "../assets/Purchase order.png"
import purimg from "../assets/PurchImage.png"
import purreq from "../assets/Purchase requisition - single item - draft.png"
import venimg from "../assets/VenImage.png"
import venimg2 from "../assets/VenImage (1).png"
import venimg3 from "../assets/VenImage (2).png"
import c1 from "../assets/cImage.png"
import c2 from "../assets/cImage (1).png"
import c3 from "../assets/Configurations- Create Custom Approval Workflow.png"
import c4 from "../assets/Configurations- Create Custom Approval Workflow-1.png"
import c5 from "../assets/Configuration- Custom Approval Workflow.png"
import c6 from "../assets/Configuration- Custom Approval Workflow-2.png"
import c7 from "../assets/Configuration- Custom Approval Workflow-1.png"
import c8 from "../assets/Configuration- Custom Approval Workflow-3.png"
import c9 from "../assets/Configurations- Approval Workflow-1.png"

const pr1 = [
    {img: purchase, p:[
    <p>This is where requisition starts from. A user can create a product or service requsition
    </p>]},
    {img: product, p:[
        <div className="mb-6">
            <p className="">Create product requisition. Here you are required to do two things;
            </p>
            <p className="font-semibold">-Fill in the basic information</p>
            <p className="font-semibold">-Add items to the request</p>
        </div>,
        <p className="">The user can also see the approval workflow for the request below the page. This flow is set from the onboarding and can be managed from configuration module</p>
    ]} 
]

const pr2 = [
    {img: img3, p:[
    <p className="xl:w-[80%]">Requisition request page Here a user can see and manage all the request they have made
    </p>]},
    {img: img4, p:[
        <div className="mb-4">
            <p className="">A single requisition page
            </p>
            <p className="">-User can see the status of the requisition</p>
            <p className="">-They can see all the details of their request</p>
        </div>,
        <p className="mb-4">-Actions they can take will vary according to the approval state of the requisition</p>,
        <p className="mb-4">-Users can add or respond to comments</p>,
        <p className="mb-4">-History, which is the last thing on the page; here anyone can follow up on any actions done to this request</p>
    ]} 
]

const pr3 = [
    {img: request, p: [
        <p className="mb-4 w-[80%]">After an approved request, a procurement officer can move on to creating a request for quotation as the next step which is done to receive/bid for quotes from a vendor.
        </p>,
        <p className="">This step in 3 parts</p>,
        <p className="mb-4"><span className="font-medium">-Purchase information</span>: This is where the procurement officer enters information pertinent to the purchase. They also select a list of vendors from their database to send the request to.</p>,
        <p className="mb-4"><span className="font-medium">-Line item information</span>: This is items that is being requested for. This is pre-filled from the requisition phase</p>,
        <p className=""><span className="font-medium">-Add Note</span>:Procurement officers can also write notes to the prospective vendors.</p>
    ]},
    {img: rf, p: [
        <p className="xl:w-[80%]">Here the procurement officer can see and manage all request for quotes raised. Several different actions depending on the status of the quote can be done using the “action” button</p>
    ]},
    {img: quotation, p: [
        <p className="xl:w-[80%]">An admin officer can use the single quote page to track the status of his request. He can see the information sent out, he can see vendor responses and select a vendor to go with. He can also compare vendor quotes on different data points like price, delivery date etc</p>
    ]},
    {img: reqimg, p: [
        <p className="mb-6 xl:w-[80%]">One of the actions that can be taken from the requisition report page above is; being able to compare several quotes received from vendors before taking an informed decision. <span className="font-medium">Here, the best quote is highlighted based on price and delivery date for easy decision making </span></p>
    ]}

]

const pr4 =[
    {img: purchaseo, p: [
        <p className="xl:w-[80%]">Purchase order form. Once filled, it is sent for internal approval and then sent out to the vendor. An invoice is generated also after internal approval</p>
    ]},
    {img: purimg, p:[
        <p className="xl:w-[80%]">This page shows a list of purchase orders. At this stage, a vendor has been selected and the fine details of the procurement are being ironed out.</p>
    ]},
    {img: purreq, p: [
        <p className="mb-4 xl:w-[80%]">Single purchase order screen showing in-depth details about the selected purchase order
        </p>
    ]}
]

const pr5 = [
    {img: venimg, p:[
        <h3 className="font-semibold text-hueblack">Dashboard</h3>,
        <p className="">The vendor gets an overview of all request coming from the buyers, from requisition to received orders. the vendor/supplier can also quickly initiate an action from the dashboard</p>
    ]},
    {img: venimg2, p: [
        <h3 className="font-semibold text-hueblack">Buyer management</h3>,
        <p className="">Just like the vendor management on the buyer’s end, the vendor/supplier also has the buyer management page where they manage all their buyers in one place</p>
    ]},
    {img: venimg3, p: [
        <h3 className="font-semibold text-hueblack">Vendor Catalog</h3>,
        <p className="mb-4">The vendors manage their inventory on this page. This page has two features;</p>,
        <p className="mb-4 xl:w-[80%]">-Items in catalog: For managing item Inventory </p>,
        <p className="mb-4 xl:w-[80%]">-Catalog request: This is where every request received as “request for vendor’s catalog” from the buyers end is managed</p>
    ]}
]

const pr6 = [
    {img: c1, p: [
        <p className="">Most of the pages in configurations module were mostly form fields. Of the about 60 pages in the module, only the approval workflow was different and I’d discuss it below</p>
    ]}
]

const pr7 = [
    {img: c2, p: [
        <p className="">A new admin/procurement officer navigates to the configuration module</p>
    ]},
    {img: c3, p: [
        <p className="">To create a workflow, the user first has to fill in the basic details; workflow name and description</p>
    ]},
    {img: c4, p: [
        <p className="mb-4">The next step is selecting approval process. Starting approval from a department means that the approval process will start from a requesters department. </p>,
        <p className="">Example is “a requester requests”, here, the approval starts from his head of department before going to the company’s procurement office.</p>,
        <p className="mb-4">If the approval flow is set to the second type, the request will go the specific individuals selected. Usually the procurement office first</p>,
        <p className="mb-6">The advantage of this type is that if the request goes to the procurement office, they can confirm if the item is available or its within budget, hereby reducing the chances of the request being cancelled down the line.</p>
    ]},
    {img: c5, p: [
        <p className="mb-6">The next step is selecting the branch and department this approval workflow will affect. As well as the individuals within the department.</p>
    ]},
    {img: c6, p: [
        <p className="mb-6">The final step is to select external approvals. Examples of external approval is procurement office, finance, C-level suite. etc</p>
    ]},
    {img: c7, p: [
        <p className="mb-6 xl:w-[85%]">Selecting external approvers’ step progresses</p>
    ]},
    {img: c8, p: [
        <p className="mb-6 xl:w-[85%]">Selecting external approvers’ step progresses</p>
    ]},
    {img: c9, p: [
        <p className="mb-6 xl:w-[85%]">Approval flow page. All approvals will be located here. An admin can edit, delete or add more approval flows.</p>
    ]},
]

const Requisition = () => {
    const [modalImage, setModalImage] = useState(null); 
    const [zoomLevel, setZoomLevel] = useState(1); // Start with zoom level 1 (no zoom)
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const imgRef = useRef(null);
    const dragStartPosition = useRef({ x: 0, y: 0 });
    const currentTranslate = useRef({ x: 0, y: 0 });

    // Open the modal with the selected image
    const handleImageClick = (img) => {
        setModalImage(img); // Set the clicked image to the state
        setZoomLevel(1); // Reset zoom on new image
        setPosition({ x: 0, y: 0 }); // Reset image position
    };

    // Function to close the modal when the background is clicked
    const closeModal = () => {
        setModalImage(null);
        setZoomLevel(1); // Reset zoom when closing
    };

    // Zoom In
    const zoomIn = () => {
        setZoomLevel(prevZoomLevel => Math.min(prevZoomLevel + 0.2, 3)); // Limit zoom-in to 3x
    };

    // Zoom Out
    const zoomOut = () => {
        setZoomLevel(prevZoomLevel => Math.max(prevZoomLevel - 0.2, 0.5)); // Limit zoom-out to 0.5x
    };

     // Start dragging the image
    const startDragging = (e) => {
        setIsDragging(true);
        dragStartPosition.current = { x: e.clientX, y: e.clientY };
    };

    // Handle dragging movement
    const onDrag = (e) => {
        if (isDragging) {
            const deltaX = e.clientX - dragStartPosition.current.x;
            const deltaY = e.clientY - dragStartPosition.current.y;

            const newX = currentTranslate.current.x + deltaX;
            const newY = currentTranslate.current.y + deltaY;

            setPosition({ x: newX, y: newY });
        }
    };

    // Stop dragging the image
    const stopDragging = () => {
        if (isDragging) {
            currentTranslate.current = position; // Save the current position after dragging
        }
        setIsDragging(false);
    };
    
    return(
        <section className="bg-tertiary pt-12 md:px-16 md:pt-20 xl:px-24 h-auto">
            <div className="px-8 mb-6">
                <h3 className="text-marino mb-6 font-bold text-3xl">Requisition</h3>
                <p className="font-work-sans font-[400] xl:w-[75%] text-sm">A requisition is a formal request for a product or service, it is a request to procure, purchase or provide an item or service that is required. The requisition process is the start of the purchase-to-pay process, as it initiates the purchasing activity. The requisition process includes the process of defining the exact need down to the most basic details that will be required.</p>
            </div>
            <div className="mb-16 xl:mb-24 bg-white pt-16 h-auto">
                {pr1.map((pr, index)=>(
                    <div key={index} className=" px-6 mb-10 items-center xl:items-start flex flex-col xl:flex-row xl:justify-around">
                        <div className="mb-6">
                            <img src={pr.img} className="cursor-pointer" alt="frame"
                            onClick={() => handleImageClick(pr.img)} />
                        </div>
                        <div className="xl:w-[22%] font-work-sans font-[400] text-sm">
                            {pr.p.map((x, index)=>(
                                <React.Fragment key={index}>{x}</React.Fragment>
                            ))}
                        </div>
                    </div>
                ))}
                <div className="xl:px-28 mb-10 ">
                    <div className="bg-[#F6F6F6] rounded-lg grid grid-cols-1 px-8 pt-8 gap-4 md:grid-cols-2">
                        <div className=" mb-8 md:mb-0 space-y-6">
                            <h3 className="text-center font-bold text-xl">Add item</h3>
                            <img src={img1} className="xl:h-[296.36px] w-[322.6px]" alt="image"/>
                        </div>
                        <div className=" space-y-6">
                            <h3 className="text-center font-bold text-xl">Add item from catalogue</h3>
                            <img src={img} className="" alt="image"/>
                        </div>
                    </div>
                </div>
                {pr2.map((pr, index)=>(
                    <div key={index} className=" px-8 mb-10 items-center xl:items-start flex flex-col xl:flex-row xl:justify-around">
                        <div className="mb-6">
                            <img src={pr.img} 
                            alt="frame"
                            className="cursor-pointer" 
                            onClick={() => handleImageClick(pr.img)} />
                        </div>
                        <div className="xl:w-[29%] font-work-sans font-[400] text-sm">
                            {pr.p.map((x, index)=>(
                                <React.Fragment key={index}>{x}</React.Fragment>
                            ))}
                        </div>
                    </div>
                )
                )}
            </div>

            {/*  */}

            {modalImage && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-modal" onClick={closeModal}>&times;</span>
                        <img
                            src={modalImage}
                            ref={imgRef}
                            alt="Zoomable"
                            style={{
                                transform: `translate(${position.x}px, ${position.y}px) scale(${zoomLevel})`,
                                cursor: isDragging ? 'grabbing' : 'grab'
                            }}
                            onMouseDown={startDragging}
                            onMouseMove={onDrag}
                            onMouseUp={stopDragging}
                            onMouseLeave={stopDragging}
                        />
                        {/* Zoom Controls */}
                        <div className="controls">
                            <button className="hover:bg-white bg-primary hover:text-primary text-white px-4 py-2 font-bold font-work-sans rounded-full text-md" onClick={zoomIn}>Zoom In</button>
                            <button className="hover:bg-white bg-primary hover:text-primary text-white px-4 py-2 font-bold font-work-sans rounded-full text-md" onClick={zoomOut}>Zoom Out</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="px-8 mb-6">
                <h3 className="text-marino mb-6 font-bold text-3xl">Request for quotation</h3>
                <p className="font-work-sans font-[400] xl:w-[85%] text-sm mb-6">A request for quotation is a request to a supplier/ Vendor to provide an item or service and details at what price, time and terms the item can be provided. It is issued by a company to get comparative feedback on the different terms at which an item/ service can be provided. Due to global procurement standards it is a requirement to receive a minimum of 3 different quotations before making a purchase to ensure that a number of options have been viewed.</p>
                <p className="font-work-sans font-[400] xl:w-[85%] text-sm"> While a Quotation is sent from a Vendor to a buyer providing the terms that they are willing to supply the item/ service at which includes the prices, date of delivery and payment terms</p>
            </div>
            <div className="mb-16 xl:mb-24 bg-white pt-16 h-auto">
                {pr3.map((pr, index)=>(
                    <div key={index} className=" px-8 mb-10 items-center xl:items-start flex flex-col xl:flex-row xl:justify-around">
                        <div className="mb-6">
                            <img src={pr.img} 
                            alt="frame"
                            className="cursor-pointer" 
                            onClick={() => handleImageClick(pr.img)} />
                        </div>
                        <div className="xl:w-[35%] font-work-sans font-[400] text-sm">
                            {pr.p.map((x, index)=>(
                                <React.Fragment key={index}>{x}</React.Fragment>
                            ))}
                        </div>
                    </div>
                )
                )}
            </div>
            <div className="px-8 mb-6">
                <h3 className="text-marino mb-6 font-bold text-3xl">Purchase Order</h3>
                <p className="font-work-sans font-[400] text-sm mb-6">A purchase order or (PO), is a document a buyer sends to a supplier or vendor to authorise a purchase based on pre-agreed terms and conditions (Quotation). A purchase order is issued after the Vendor/ Supplier has confirmed ability to deliver the item or service, confirmed the time that the delivery can be done and also contains the terms of the delivery such as the shipping method or delivery method, the date and location for the delivery, the billing information and agreed price/ cost of the item or service.</p>
            </div>
            <div className="mb-16 xl:mb-24 bg-white pt-16 h-auto">
                {pr4.map((pr, index)=>(
                    <div key={index} className=" px-8 mb-10 items-center xl:items-start flex flex-col xl:flex-row xl:justify-around">
                        <div className="mb-6">
                            <img src={pr.img} 
                            alt="frame"
                            className="cursor-pointer" 
                            onClick={() => handleImageClick(pr.img)} />
                        </div>
                        <div className="xl:w-[35%] font-work-sans font-[400] text-sm">
                            {pr.p.map((x, index)=>(
                                <React.Fragment key={index}>{x}</React.Fragment>
                            ))}
                        </div>
                    </div>
                )
                )}
            </div>
            <div className="px-8 mb-6">
                <h3 className="text-marino mb-6 font-bold text-3xl">Vendor Portal</h3>
                <p className="font-work-sans font-[400] text-sm mb-6 xl:w-[90%]">A  Supplier portal, or also known as a vendor portal, is the solution that allows companies to manage and connect with 3rd party suppliers of goods and/or services. The portal allows companies to exchange information and requests seamlessly with suppliers with real-time responses, cloud data storage and automated processing of requests. The companies are able to send information directly to the Vendors who receive the request on the portal and can respond appropriately.</p>
            </div>
            <div className="mb-16 xl:mb-24 bg-white pt-16 h-auto">
                {pr5.map((pr, index)=>(
                    <div key={index} className=" px-8 mb-10 items-center xl:items-start flex flex-col xl:flex-row xl:justify-around">
                        <div className=" mb-6">
                            <img src={pr.img} 
                            alt="frame"
                            className="cursor-pointer" 
                            onClick={() => handleImageClick(pr.img)}/>
                        </div>
                        <div className="xl:w-[29%] font-work-sans font-[400] text-sm">
                            {pr.p.map((x, index)=>(
                                <React.Fragment key={index}>{x}</React.Fragment>
                            ))}
                        </div>
                    </div>
                )
                )}
            </div>
            <div className="px-8 mb-6">
                <h3 className="text-marino mb-6 font-bold text-3xl">Configurations</h3>
                <p className="font-work-sans font-[400] text-sm mb-6 xl:w-[90%]">A configuration of a system refers to the arrangement of each of its functional units, according to their nature, number and characteristics. It determines how the system functions and also guides the rules that apply to users on the system. The configurations module is where administrators are able to set up the system, set up and invite other users into the system and also configure the other modules in the system and how they will operate</p>
            </div>
            <div className="bg-white pt-16 h-auto">
                {pr6.map((pr, index)=>(
                    <div key={index} className=" px-8 mb-10 items-center xl:items-start flex flex-col xl:flex-row xl:justify-around">
                        <div className=" mb-6">
                            <img src={pr.img}
                            alt="frame"
                            className="cursor-pointer" 
                            onClick={() => handleImageClick(pr.img)}/>
                        </div>
                        <div className="xl:w-[29%] font-work-sans font-[400] text-sm">
                            {pr.p.map((x, index)=>(
                                <React.Fragment key={index}>{x}</React.Fragment>
                            ))}
                        </div>
                    </div>
                )
                )}
                <h3 className="px-8 xl:px-24 mb-8 font-bold text-3xl">Approval workflow</h3>
                {pr7.map((pr, index)=>(
                    <div key={index} className=" px-8 items-center xl:items-start flex flex-col xl:flex-row xl:justify-around">
                        <div className=" mb-6">
                            <img src={pr.img}
                            alt="frame"
                            className="cursor-pointer" 
                            onClick={() => handleImageClick(pr.img)} />
                        </div>
                        <div className="xl:w-[29%] font-work-sans font-[400] text-sm">
                            {pr.p.map((x, index)=>(
                                <React.Fragment key={index}>{x}</React.Fragment>
                            ))}
                        </div>
                    </div>
                )
                )}
            </div>
        </section>
    )
}
export default Requisition;