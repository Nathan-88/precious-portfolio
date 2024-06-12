import group from "../assets/Group.png"
import groupo from "../assets/Group 5488.png"
import groupoo from "../assets/Group 5490.png"
import groupooo from "../assets/Group 5491.png"
import React from "react"

const files = [
    {image: group, h3: "Easy navigation", p: ["A simple landing page designed to eliminate confusion and give control to the user. A well-thought-out call-to-action button that allows a user to either sign up or search for a job. The landing page also allows users to get a feel of the listed job options before signing up"] },
    {image: groupo, h3: "Easy to use & apply", p: [
        <span key="1" className='mb-5 inline-block'>The homepage has the important features our users are interested in, from navigating to their profile to easy access to their dashboard and they are also able to receive messages or alerts once they sign in</span>,
        <span key="2" className='in-block'>The decision to apply for a job and the action itself doesn't have to be tiring, as the information a job seeker is curious about is displayed on each job listing card which makes decision making quick and easy</span>
    ] },
    {image: groupoo, h3: "Filter out the noise", p: ["Get straight to the task of finding your desired job by using the filter button, this allows you to filter jobs by different options. Gives the user the desired transparency"] },
    {image: groupooo, h3: "Keep track easily", p: ["The dashboard allows users to track their job application status, create a friendly schedule of activities to help manage their time effectively and be able to compare jobs"] }
]

const EasyNaigate = () => {
    return (
        <section className="bg-tertiary px-8 py-12 md:px-16 xl:px-24 md:py-20 h-auto">
            {files.map((file, index) => (
                <div key={index} className="flex flex-col xl:flex-row xl:justify-between">
                    <div className="xl:w-1/2 mb-6">
                        <img src={file.image} alt="frame" />
                    </div>
                    <div className="mb-10 space-y-6 xl:w-2/6">
                        <h3 className="font-bold text-3xl">{file.h3}</h3>
                        <p className="font-[400] text-sm font-work-sans">
                            {file.p.map((part, idx) => (
                                typeof part === 'string' ? part : <React.Fragment key={idx}>{part}</React.Fragment>
                            ))}
                        </p>
                    </div>
                </div>
            )
            )}
            <div className="py-10 space-y-4">
                <h3 className="font-medium text-sm">De-prioritised feature</h3>
                <p className="font-bold text-2xl md:text-3xl text-hueblack">Please note that because of time constraint we were unable to complete the In-app messaging feature which is meant to help with two-way communication </p>
            </div>
        </section>
    )
}

export default EasyNaigate
