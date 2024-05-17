import './index.css'

const Video = () => {
    return (
        <>
            <Video
                title="React Js Tutorial"
                views="1000000"
                timestamp="10 days ago"
                image="https://i.ytimg.com/vi/7C2z4GqqS5E/hqdefault.jpg"
            />
            <h1>React Js </h1>
        </>
    )
}


const YTbox = (props) => {
    return (
        <div>
            <Video />
            <h1>React Js Tutorial</h1>
            <h1>views</h1>
        </div>
    )
}

export default YTbox