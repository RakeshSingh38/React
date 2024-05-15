function UserInfo() {
    const Users = [
        {
            username: "Rakesh",
            email: "rakesh@gmail.com",
            loaction: "India"
        },
        {
            username: "Nikesh",
            email: "Nikesh@123",
            loaction: "USA"
        },
        {
            username: "John Doe",
            email: "rajesh@123",
            loaction: "UK"
        }
    ];
    return (
        <>
            {Users.map(user => (
                <ul key={Math.random() * 10}>
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>{user.loaction}</li>
                    <hr style={{border: '1px solid green'}}/>
                </ul>
            ))}
        </>
    )
}

export default UserInfo;