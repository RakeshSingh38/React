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
                    />
                )
                    // imp      dont use any { } here as it wont return anything
                )
            }
            <div className='flex gap-4'>
                {/* <Button message='play-msg' >Play</Button>
                <Button message='pause-msg'>Pause</Button> */}
                {/*
                u can change the onClick to any function name it doesnt matterr but makes sure its understandable 
                such as onSmash etc
                */}
                <Button message='play-msg'>Play</Button>
                <Button message='play-msg'>Pause</Button>
            </div>
        </div>
    );
};

const Final = ({ id, name, age, gender }) => {
    return (
        <div className="capitalize ">
            <h1 className="text-4xl">Details</h1>
            <h1 className="text-lg">id is {id}</h1>
            <h1 className="text-lg">name is {name}</h1>
            <h1 className="text-lg">age is {age}</h1>
            <h1 className="text-lg">Gender is {gender}</h1>
            <br />

        </div>
    )
}

export default Events;
