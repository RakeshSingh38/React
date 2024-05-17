
const User = ({ children }) => {
    return (
        <div className="grid place-content-center">
            <h3>let us see this from user</h3>
            {/* imp         it looks like this in h1 
                <p>User</p>
                <p>User</p> 
            */}
            <section className="text-2xl border border-gray-500 text-red-500 font-bold">
                {children}
            </section>
        </div>
    )
}
export default User;