const GradientFillButton = (props) => {
  return (
    <button className="group/button relative overflow-hidden bg-transparent px-16 py-1 text-sm font-bold text-white transition-all duration-150 active:scale-95">
      <span className="absolute bottom-0 left-0 z-0 h-0 w-full bg-gradient-to-t from-blue-500 to-white transition-all duration-500 group-hover/button:h-full" />
      <span className="relative z-10 transition-all duration-500 group-hover/button:text-black">
        {props.name}
      </span>
    </button>
  )
}

export default GradientFillButton