import React from "react"

const App = () => {
    const stories = [
        {
            title: 'React Hooks',
            author: 'John Doe',
            content: 'React Hooks is a new feature in React 16.8.0.'
        },
        {
            title: 'Redux',
            author: 'Jane Smith',
            content: 'Redux is a predictable state container for JavaScript apps.'
        }
        , {
            title: 'GraphQL',
            author: 'Adam Johnson',
            content: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries.'
        }
    ]
    return (
        // stories.map(({ title, author, content }) => {
        // < List title = { title } author = { author } content = { content } />
        <>
            {/* <h1>Hiii</h1> */}
            < List list={stories} />
        </>
        // })
    )
}

const List = ({ list }) => {
    return (
        <>

            {
                list.map(({ title, author, content }, index) => <ul className="text-left p-10 text-black ">

                    {/* tip     i forgot to return */}

                    <li key={index}>{title} </li>
                    <li key={index}>{author} </li>
                    <li key={index}>{content} </li>

                </ul>
                )
            }


            {/*   <ul className="text-left p-10 text-black ">
                {list.map((item) =>
                    <Item key={Math.random() * 100 + 1} item={item} />
                )
                }

            </ul> */}

        </>
    )
}

/* const Item = ({item}) => {
    const {title, author, content} = item;

            return (

            <ul className="text-left p-10 text-black ">

                <li>
                    <span>{title}</span>
                    <span>{author}</span>
                    <span>{content}</span>
                </li>

            </ul>
            )
} */

export default App;