function List() {
    const items = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange' }
    ];
    return (
        <>
            {/* <ol start={5}> */}
            <ol>
                {/* {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))} */}
                {items.map((item, index) => (
                    <li key={item.id}>{item.name}</li>
                    // <li key={index}>{item.name}</li>
                ))}
            </ol>
        </>
    )
}

export default List;