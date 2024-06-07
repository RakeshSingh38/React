import '../index.css'
const FullPage = ({ bgColor, text }) => {
    // imp      the reason its not working because tailwind expects the entire class name to be a valid utility class.
    // thats the reason it wont work with concatenation of -400 too
    let check = `${bgColor} h-screen w-screen text-center text-4xl`;
    console.log(check);
    // console.log(temp.concat("-500"));
    return (
        <div className={`${check}`}>
            {text}
        </div>
    )
}

export default FullPage