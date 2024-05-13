const myName = 'Rakesh Singh';
const multiply = (a, b) => a * b;
const specialClass = {
    backgroundColor: 'cyan',
    fontSize: '25px',
    padding: '10px 0',
}

function Expressions() {
    return (
        <>
            <h1>{myName}</h1>

            <p>2+2={2 + 2}</p>

            <p style={specialClass}>My Friends list : {['Rakesh', 'Nikesh', 'Sukesh', 'Mukesh']}</p>

            <p>2*2={multiply(2, 2)}</p>

            <p className={specialClass}>This is a specialClass , it can be used for styling</p>


        </>
    )
}
export default Expressions;