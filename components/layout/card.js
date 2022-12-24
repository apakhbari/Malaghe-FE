function CardComponent(props) {
  return (
    <div
      className="card max-w-2xl w-96 bg-neutral shadow-xl drop-shadow-xl mt-5 p-2 max-h-[630px] overflow-scroll overscroll-contain"
      dir={props.direction}
    >
      {props.children}
    </div>
  )
}

export default CardComponent
