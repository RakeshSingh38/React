import { useState } from 'react';
/* note     Writing TypeScript with React is very similar to writing JavaScript with React. The key difference when working with a component is that you can provide types for your component’s props. These types can be used for correctness checking and providing inline documentation in editors. */

// tip      always define your main component interface first
interface MybuttonProps
{
    title: string;
    disabled: boolean;
}

const Mybutton = ({ title, disabled }: MybuttonProps) =>
{

    const [showHey, setHey] = useState(false);
    const handleClick = () =>
    {
        setHey(!showHey);
    }

    //  Hey component with conditionally rendered component
    const Hey = () => <div>Hey</div>;
    return (
        <div>This is something else
            <button disabled={disabled} onClick={handleClick} className='text-4xl border border-blue-600 px-2 bg-black text-white rounded-md hover:scale-125 m-2 '>{title}</button>
            {!disabled && showHey && <Hey />}
        </div>
    )
}
const App = () =>
{


    {
        return (
            <>
                <h1>Hello</h1>
                <Mybutton title="Heyy how are u" 
                
                // imp      if disabled is false button wont work else it will work 
                disabled={false} />
            </>
        )
    }
}

export default App