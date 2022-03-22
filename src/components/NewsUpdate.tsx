
const NewsUpdate = () => {
    return(
        <div className="bg-warning d-flex flex-column align-items-center py-5 px-5 text-center">
            <h2>Newsletter - Stay tune and get the latest update</h2>
            <p className="text-dark pb-4">Far far away, behind the word mountains</p>
            <div className="border border-1 border-dark px-2 d-flex py-1">
            <input type="text" placeholder="Enter email address" className="bg-warning  border-0 " />
            <button className="text-uppercase bg-dark text-white fw-bold py-1 rounded">subscribe</button>
            </div>
        </div>
    )
}

export default NewsUpdate

