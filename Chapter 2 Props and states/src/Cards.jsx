import "./index.css";
const Cards = () => {
    return (
        <div className="box-border w-[350px] border border-gray-600 flex flex-col items-center justify-center mx-auto">
            <Avatar />
            <div className=" px-5">
                <h1 className="text-xl text-center my-2 font-bold">Rakesh Singh</h1>
                <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nostrum voluptatibus distinctio atque earum eaque dicta dolores iusto, quae sed!</p>
                <SkillList />
            </div>
        </div>
    )
}
function Avatar() {
    return (
        <div>
            <img src="./src/assets/Profile-pic.jpg" alt="" />
        </div>
    )
}

function SkillList() {
    return (
        <div className="flex flex-wrap gap-x-[8px] mt-6">
            <Skills skill="React" emoji="🔥" color="bg-cyan-500" />
            <Skills skill="HTML" emoji="✅" color="bg-cyan-400" />
            <Skills skill="CSS" emoji="🎉" color="bg-cyan-400" />
            <Skills skill="JS" emoji="💛" color="bg-cyan-400" />
            <Skills skill="Nextjs" emoji="👍" color="bg-cyan-600" />
            <Skills skill="Svelte" emoji="😊" color="bg-cyan-600" />
        </div>
    )
}
function Skills({ skill, emoji, color }) {
    const styling = "font-bold flex gap-3 border-2 p-2 mb-5 rounded-md";
    return (
        // to join two classes we use.join(' ')
        <div className={[styling, color].join(' ')} >
            <span>{skill} </span>
            <span>{emoji}</span>
        </div>
    )
}
export default Cards;