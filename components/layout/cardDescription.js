function CardDescriptionComponent(props) {
  return (
    <div
      className="card max-w-2xl bg-neutral shadow-xl drop-shadow-xl mt-5 p-4 max-h-[630px] overflow-scroll overscroll-contain"
      dir={props.direction}
    >
      {props.children}
    </div>
  )
}

export default CardDescriptionComponent
