const Resume_info = () => {
    let resume = {
        name: "Rakesh Singh",
        experience: [{ year: 2012, company: 'xyz', role: 'something' }],
        education: [{
            title: "Bachelor of Science",
            school: "University of Texas",
            location: "Austin, TX",
        }],
        skills: ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'Express', 'MongoDB', "Next Js"],
        Education: [{
            title: "Bachelor of Science",
            school: "University of Texas",
            location: "Austin, TX",

        }],
        // skills: {
        //     level: "Expert",
        //     FrontEnd: 'HTML , CSS ,  JS ,  React ,  Redux ,  Node ,  Express ,  MongoDB ,'
        // },
        // ExtraCurriculars: {
        //     title: "Google Developer Group",
        //     location: "Mountain View, CA",
        // },
    }
    return (
        <div className="p-10">
            <h1 className="text-5xl p-2">{resume.name} </h1>
            <h1 className="text-3xl mb-2 bg-cyan-200">
                Experiences
            </h1>
            <div className="flex flex-wrap">
                {/* imp     experience  */}
                {resume.experience.map((res, index) => (
                    <ul key={index} className="list-disc ml-7 w-1/3">
                        <li>{res.year}</li>
                        <li>{res.company}</li>
                        <li>{res.role}</li>
                    </ul>
                ))}
            </div>
            <h1 className="text-4xl bg-orange-300 my-4">Education</h1>
            <div className="flex flex-wrap">
                {/* imp     education */}
                {resume.education.map(({ title, school, location }, index) => {
                    return (
                        <ul key={index} className="list-disc ml-7 w-1/3">
                            <li>{title}</li>
                            <li>{school}</li>
                            <li>{location}</li>
                        </ul>
                    )
                })}
            </div>
            <h1 className="text-4xl bg-green-300 my-4">Skills</h1>
            <div className="flex flex-wrap">
                {/* imp      Skills */}
                {resume.skills.map((skill, index) => {
                    return (
                        <ul key={index} className="list-disc ml-7 w-1/4">
                            <li className="">{skill}</li>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}

const ResumeBuilder = () => {

    return (
        <div>
            <Resume_info />
        </div>
    )
}

export default ResumeBuilder;