interface SearchBarProps{
    title:string
}

export default function SearchBar(props:SearchBarProps){
    
    return(
        <div className="flex items-center bg-gray-50 px-3 p-2 rounded-sm justify-between">
            <input style={{outline:"none"}} type="text" className="bg-[transparent] w-[90%]" placeholder={`Search for ${props.title.toLowerCase()}`} />
            <button><i className="bi bi-search text-xl"></i></button>
        </div>
    )
}