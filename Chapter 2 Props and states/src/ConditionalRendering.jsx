
const ValidPassword = () => <h1 className="skill">Valid Password</h1>;
const InvalidPassword = () => <h1 className="skill">Invalid Password</h1>;

// make sure that   this is in { } else it will always be true
//                     ↓
const Password = ({ isValid }) => {
    /*     if (isValid) {
            return <ValidPassword />
        }
    else {
            return <InvalidPassword />
        } */
    // reason its not working is because i am not returning anything
    // always return values from a function
    // imp       never wrap isValid with { } else it will always be truthy no matter what the content is
    return isValid ? <ValidPassword /> : <InvalidPassword />
}

const ConditionalRendering = () => {
    return (
        <div className="grid place-content-center">
            <Password isValid={9} />
        </div>
    )
}

export default ConditionalRendering;

/* const ValidPassword = () => <h1 className="skill">Valid Password</h1>;
const InvalidPassword = () => <h1 className="skill">Invalid Password</h1>;

// make sure that   this is in { } else it will always be true
//                     ↓
const Password = (isValid) => {
    return isValid ? <ValidPassword /> : <InvalidPassword />;
};

const ConditionalRendering = () => {
    return (
        <div className="grid place-content-center">
            <h1>{Password(true)}</h1>
        </div>
    );
};

export default ConditionalRendering; */