const Properties = ({ user, style }) => {
    return (
        <>
        {/* imp         to apply different styling to different props make a style prop and add it in style={style}  */}
        {/*             this way we can apply styling to different props easily */}
        {/* this doesnt affect the orginal Component if the props.style or style is not passed as a prop to it */}
            <h1 style={style}>{user}</h1>
        </>
    )
}
export default Properties

