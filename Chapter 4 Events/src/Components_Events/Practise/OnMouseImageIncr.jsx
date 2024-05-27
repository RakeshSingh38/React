
// Assignment 1 Make a simple page with 1 Image, 1button, 1 form Input text box and try to apply these events on them use onMouseOver , onMouseOut, onClick, onKeyPress, onBlur, onFocus and onDoubleClick
const handleMouseOver = (e) => {
    // imp      target refers to the element that triggered the event. In this case, it represents the element that the event listener is attached to.
    e.target.style.transition = 'transform .2s';
    e.target.style.transform = 'scale(1.2)';
}
const handleMouseOut = (e) => {
    e.target.style.transform = 'scale(1)';
}
const onPress = (e) => e.key === 'Enter' ? alert("pressed Enter") : console.log("pressed something else");
const onBox = (e) => e.preventDefault(); // preventDefault is used to prevent the default behaviour of the event

// tip    if there are same type of events defined then the last one will be executed

// onBlur and onFocus are used to detect when mouse is on focus or out of focus
const handleMouseFocus = () => console.log("Mouse is on focus");
const OnMouseImageIncr = () => {
    return (
        <>
            <img className='inline m-auto flex-none w-[30rem] h-80' src="https://images.unsplash.com/photo-1716551615759-ddec6536eb11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D" alt="Scenery"
                onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
            />
            <h1>OnMouseImageIncr</h1>
            {/* we put e.preventDefault()  on form */}
            <form onFocus={handleMouseFocus}
                onClick={onBox}

                onBlur={() => console.log("Mouse is out of focus")}
                onCut={() => console.log("Stop Cutting this")}
                onSelect={() => console.log("Stop Selecting this")}
                action="get" className='grid place-items-center'>
                <input className='text-black w-[50%] h-10 ps-3' type="text" name="name" id="name" />
                <button type="submit"
                >Submit</button>
            </form>
            {/* events such as onCopy, onCut, onPaste */}
            <p onCopy={() => alert("Stop Stealing this content")}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi blanditiis ullam non nulla nostrum error tempora aliquid minima quam quisquam, adipisci voluptas ducimus. Ullam, incidunt. Alias cum facilis velit dignissimos Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto dolorum molestiae obcaecati soluta id voluptatem adipisci sequi earum a.
            </p>
            <form action="get" className='grid place-items-center'
                //  its Enter not enter
                onKeyDown={onPress}
                // onClick={onBox}
            >
                <input className='text-black w-[50%] h-10 ps-3' type="text" name="name" id="name" />
                <button type="submit"
                >Submit</button>
            </form>

        </>
    )
}

export default OnMouseImageIncr