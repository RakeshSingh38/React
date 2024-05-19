import './index.css'

const Video = () => {
    let obj = [{
        id: 1,
        channel: "Rakesh Singh",
        title: "React js",
        views: "10K",
        timestamp: "10 days ago",
        verified: true,
    }, {
        id: 2,
        channel: "Rakesh Singh",
        title: "Nest js",
        views: "10M",
        timestamp: "10 days ago",
        verified: true,
    },
    {
        id: 3,
        channel: "Rakesh Singh",
        title: "Node js",
        views: "100K",
        timestamp: "1 week ago",
        verified: false,
    },
    {
        id: 4,
        channel: "Rakesh Singh",
        title: "Next js",
        views: "10M",
        timestamp: "10 month ago",
        verified: true,
    },
    ]

    return (
        // what i learn is react is recursively returning the same component which leads to an infinite loop
        // and thats the reason why my vscode is crashing too much

        <div className=" text-white flex gap-px">

            {/* imp         in case the 1st value is not accessible through spread operator use ...obj[0] , here obj is taken as a reference*/}
            <Youtube {...obj[0]} />

            {
                // imp       to skip first array of object then use slice
                //  i am doing this becoz in spread i have already used the 1st value and dont want to repeat it again

                // tip       make sure to use key value as a unique identifier becoz it helps React to help React identify which items have changed, been added, or been removed.
                obj.slice(1).map((vid) =>
                    <Youtube
                        key={vid.id}
                        id={vid.id}
                        channel={vid.channel}
                        title={vid.title}
                        views={vid.views}
                        // r     this timestamp will be same to write as we can only change it in while writing the function props i.e function Component({timestamp:time})
                        timestamp={vid.timestamp}
                        verified={vid.verified}
                    />
                )}
            {
                obj.slice(1).map(({ id, channel, title, views, timestamp: time, verified }) => (
                    <Youtube
                        key={id}
                        id={id}
                        channel={channel}
                        title={title}
                        views={views}
                        // r     this timestamp will be same to write as we can only change it in while writing the function props i.e function Component({timestamp:time})
                        timestamp={time}
                        verified={verified}
                    />
                ))}

            {/* {
                obj.map(vid =>
                    <Youtube
                        channel={vid.channel}
                        title={vid.title}
                        views={vid.views}
                        timestamp={vid.time}
                        image={vid.image}
                        verified={true}
                    />
                )} */}

            {/*    <Youtube
                channel="Rakesh Singh"
                title="React js"
                views="10K"
                timestamp="10 days ago"
                image="https://i.ytimg.com/vi/7C2z4GqqS5E/hqdefault.jpg"
                verified={true}
            />
            <Youtube
                channel="Rakesh Singh"
                title="Node js"
                views="100K"
                timestamp="1 week ago"
                image="https://i.ytimg.com/vi/7C2z4GqqS5E/hqdefault.jpg"
                verified={false}
            />
            <Youtube
                channel="Rakesh Singh"
                title="Next js"
                views="10M"
                timestamp="10 month ago"
                image="https://i.ytimg.com/vi/7C2z4GqqS5E/hqdefault.jpg"
                verified={true}
            /> */}
        </div>
    )
}

const Youtube = ({ channel, id, title, views, timestamp: time, image, verified }) => {
    return (
        <div className="m-2">
            <img src={`https://picsum.photos/id/${id}/200/300`} className="w-[13em] h-[9em]" alt={title} />
            <h1 className="text-xl font-bold mb-[6px] ">{title}</h1>
            <div className="text-[#c5c0c0] font-normal text-[14px]">
                {/* {verified ? <h1>{channel} ✅</h1> : null} */}
                {/* {verified ? <h1>{channel} ✅</h1> : <h1>{channel}</h1>} */}
                <h1>{channel} {verified && '✅'}</h1>

                <div className="flex gap-4 text-[13px] mt-[2px]">
                    <p >{views} views</p>
                    <p >{time}</p>
                </div>
            </div>
        </div>
    )
}

// whatever contains a component we will return here
export default Video;