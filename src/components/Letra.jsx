import useLetras from "../hooks/useLetras"

const Letra = () => {
    const { letra } = useLetras()
  return (
    <div>{letra}</div>
  )
}

export default Letra