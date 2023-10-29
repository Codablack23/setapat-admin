interface BackHeaderProps{
    text:string
}

export default function BackHeader(props:BackHeaderProps){
  return (
    <header className="my-3 mb-8 flex gap-16 items-center">
        <button><i className="bi bi-arrow-left"></i></button>
        <p className="uppercase font-semibold text-xs">{props.text}</p>
    </header>
  )
}