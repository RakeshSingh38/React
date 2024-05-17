import './index.css'
const Video = () => {
    return (
        // what i learn is react is recursively returning the same component which leads to an infinite loop
        // and thats the reason why my vscode is crashing too much

        <div className=" text-white flex gap-3 gap-y-6">
            <Youtube
                channel="Rakesh Singh"
                title="React js"
                views="10K"
                timestamp="10 days ago"
                image="https://i.ytimg.com/vi/7C2z4GqqS5E/hqdefault.jpg"
            />
            <Youtube
                channel="Rakesh Singh"
                title="Node js"
                views="100K"
                timestamp="1 week ago"
                image="https://i.ytimg.com/vi/7C2z4GqqS5E/hqdefault.jpg"
            />
            <Youtube
                channel="Rakesh Singh"
                title="Next js"
                views="10M"
                timestamp="10 month ago"
                image="https://i.ytimg.com/vi/7C2z4GqqS5E/hqdefault.jpg"
            />
        </div>
    )
}


const Youtube = ({ channel, title, views, timestamp: time, image }) => {
    return (
        <div className="ml-1 mt-1">
            <img className="w-[15em]" src={image} alt={title} />
            <h1 className="text-xl font-bold mb-3">{title}</h1>
            <div className="text-[#c5c0c0] font-normal text-sm">
                <h1>{channel}</h1>
                <div className="flex gap-4">
                    <p >{views} views</p>
                    <p >{time}</p>
                </div>
            </div>
        </div>
    )
}


// whatever contains a component we will return here
export default Video