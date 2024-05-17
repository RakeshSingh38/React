// i am importing User with the help of User.jsx file
// thats why i can use the User component here
// i dont have to mention the <User /> in app.jsx as i am already using it in Children.jsx

//imp       so i only have to use <Children /> in app.jsx

import User from './User'
function Layout(props) {
    return (
        <div className="flex place-content-center bg-teal-500 border">
            <header>header</header>
            {/* tip    border to shift a tag to left or right then use ml or mr-auto */}
            {/* <main className="text-2xl gap-x-5  border-2 border-black mr-auto">{props.children}</main> */}
            <main className="w-64 h-54 text-2xl gap-x-5  border-2 border-black ml-auto">{props.children}</main>
            <footer>Footer</footer>
        </div>
    )
}

function Children() {
    return (
        <>
            <Layout >
                <p >Children</p>
                <p>Children</p>
            </Layout>

            <User>
                <p>User</p>
                <p>User</p>
            </User>
        </>
    )
}

export default Children;