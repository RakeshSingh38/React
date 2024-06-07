import { useState } from "react";
const NameCounter = ({ named }) => {
    // let [name, setName] = useState("unknown");
    // const changeName = () => {
    //     setName(named);
    //     // console.log(name);
    //     // if(changeName)  setName(!name);
    // }
    // const doubleclickName=() => setName("Not known");
    const [friends, setFriends] = useState(['Rakesh', 'Nikesh']);

    const addFriends = () => {
        setFriends([...friends, 'Mukesh']);
    }

    const removeFriends = () => {
        setFriends(friends.slice(1),friends.length - 1);
    }
    const updateFriends = () => {
        setFriends([...friends, 'Rakesh', 'Nikesh']);
    }
    return (
        <div className='w-screen h-screen  grid place-content-center text-center'>
            <div >
                {
                    friends.map((f, index) => (
                        <li key={index}>{f}</li>
                    ))
                }
            </div>
            <div className="flex place-content-center flex-row gap-5">

            <button
                onClick={addFriends}
                className='flex-none mt-5 border border-gray-500 px-7 py-3 bg-black text-white rounded-lg'>Add Friends</button>
            <button
                onClick={removeFriends}
                className='flex-none mt-5 border border-gray-500 px-7 py-3 bg-black text-white rounded-lg'>Remove Friends</button>
            <button
                onClick={updateFriends}
                className='flex-none mt-5 border border-gray-500 px-7 py-3 bg-black text-white rounded-lg'>Update Friends</button>
            {/* <button
                    onDoubleClick={doubleclickName}
                    onClick={changeName} className='mt-5 border border-gray-500 px-7 py-3 bg-black text-white rounded-lg'>+</button> */}
            </div>

        </div>
    )
}

export default NameCounter