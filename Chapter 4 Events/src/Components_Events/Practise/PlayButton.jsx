
const Button = ({ message, children, onClick }) => {
    const style = "rounded-md border-2 border-cyan-500 p-4 py-2 bg-cyan-500 text-black";
    // it will execute directly when the page loads no 
    // return <button onClick={console.log("hey its button")} className={style} >Play</button>
    // const handleClick = () => {
    //     console.log("hey its button");
    // }
    // r        Recommended way :-  now the button will execute only when we click on it
    // return <button onClick={handleClick} className={style}  > Play</button >

    // w        dont do this , this will immediately execute the function
    // return <button onClick={handleClick()} className={style}  > Play</button >

    // or we can do this directly
    // return <button onClick={() => console.log("hey its button")} className={style} > Play</button >

    /*    {
            // r        using props
            const handleClick = () => console.log(message);
            return <button onClick={handleClick} className={style}  > {children}</button >
        } */

    // w       let handleClick = () => { onClick };
    // we dont have to use it as a Js expression as we are using it as a function
    // so we need to directly use it as a function call
    const handleClick = () => {
        console.log("Single click");
    };

    const handleDoubleClick = () => {
        console.log("Double click");
        alert("Double click detected!");
    };
    // const handleClick = () =>  console.log("Single Click");;   // r    Recommended way
    // const onDoubleClick = () =>  console.log("Double Clicked"); alert("double clicked");   // r    Recommended way
    return <button onClick={handleClick} onDoubleClick={handleDoubleClick}  className={style}  > {children}</button >

}

export default Button;