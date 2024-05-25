import Button from '../Practise/PlayButton';
import OnMouseImageIncr from '../Practise/OnMouseImageIncr';
const Events = () => {
    const obj = [{
        id: 1,
        name: "Rakesh",
        skills: "React JS",
        age: 20,
        gender: "Male",
    },
    {
        id: 2,
        name: "Ramesh",
        skills: "Node JS",
        age: 25,
        gender: "Male",
    }];
    return (
        <div className="p-5 text-white flex flex-col gap-2">
            {/* <Final {...obj[0]} /> */}
            {
                obj.map((events) => (

                    <Final
                        key={events.id}
                        id={events.id}
                        name={events.name}
                        skills={events.skills}
                        age={events.age}
                        gender={events.gender}
                    >
                        <Button onPlay={() => console.log("Play", events.skills)} onPause={() => console.log("Pause", events.skills)}>{events.skills}</Button>
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

            {/* image size increase when onMouseOver ,else normal when moveOut*/}
            <OnMouseImageIncr />

        </div>
    );
};

const Final = ({ id, name, age, gender, skills, children }) => {
    return (
        <div className="capitalize flex flex-col flex-wrap">
            <h1 className="mt-3 text-4xl mb-2">Details</h1>
            <h1 className="text-lg">id is {id}</h1>
            <h1 className="text-lg">name is {name}</h1>
            <h1 className="text-lg">skills is {skills}</h1>
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
