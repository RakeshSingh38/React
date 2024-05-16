const User = ({ Fname,
                fullName,
                age,
                hobby,
                address:add="india" }) => {
    return <section className="p-10 text-3xl">
        <h1>My name is {Fname}</h1>
        <h1>Full name is {fullName}</h1>
        <h1>Age is {age}</h1>
        <h1>Hobbies are {hobby.join(", ")}</h1>
        <h1>City is {add.city}</h1>
        <h1>State is {add.state}</h1>
        <h1>Country is {add.country}</h1>
    </section>
};
const Properties = () => {
    return (
        <User Fname="Rakesh"
            fullName="Rakesh Singh"
            age="21"
            hobby={["Coding", "Gaming", "Reading"]}
            address={{
                city: "Mumbai",
                state: "Maharashtra",
                country: "India"
            }}
        />
    )
}

export default Properties