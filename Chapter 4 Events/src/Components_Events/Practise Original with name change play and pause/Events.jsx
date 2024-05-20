import Button from '../Practise/PlayButton';

const Events = () => {
    const obj = [{
        id: 1,
        name: "Rakesh",
        age: 20,
        gender: "Male",
    },
    {
        id: 2,
        name: "Ramesh",
        age: 25,
        gender: "Male",
    }];
    return (
        <div className="p-5 text-white">
            {/* <Final {...obj[0]} /> */}
            {
                obj.map((events) => (

                    <Final
                        key={events.id}
                        id={events.id}
                        name={events.name}
                        age={events.age}
                        gender={events.gender}
                    >
                        <Button onPlay={() => console.log("Play")} onPause={() => console.log("Pause")} />
                    </Final>

                )
                    // imp      dont use any { } here as it wont return anything
                )
            }
            <>

                {/* <div className='flex gap-4'>
                <Button message='play-msg' >Play</Button>
                <Button message='pause-msg'>Pause</Button>
                u can change the onClick to any function name it doesnt matterr but makes sure its understandable 
                such as onSmash etc
                <Button onPlay={() => console.log("Play")} onPause={() => console.log("Pause")}></Button>
                <Button onPlay={() => console.log("Play")} onPause={() => console.log("Pause")}></Button>
            </div> */}
            </>
        </div>
    );
};

const Final = ({ id, name, age, gender, children }) => {
    return (
        <div className="capitalize flex flex-col flex-wrap">
            <h1 className="mt-3 text-4xl mb-2">Details</h1>
            <h1 className="text-lg">id is {id}</h1>
            <h1 className="text-lg">name is {name}</h1>
            <h1 className="text-lg">age is {age}</h1>
            <h1 className="text-lg mb-2">Gender is {gender}</h1>
            {/* <br />    this break line giving new line and  i thought i leave a margin by mistake somewhere */}
            <div>
                {children}
            </div>
        </div>
    )
}

export default Events;
