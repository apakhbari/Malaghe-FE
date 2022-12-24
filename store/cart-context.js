import { createContext, useState } from 'react'

const CartsContext = createContext({
  carts: [],
  totalCarts: 0,
  addCart: (goodToBeInCartId) => {},
  removeCart: (goodId) => {},
  itemIsInCart: (goodId) => {},
})

export function CartsContextProvider(props) {
  const [userCarts, setUserCart] = useState([])

  function addCartHandler(goodToBeInCartId) {
    setUserCart((prevUserCarts) => {
      return prevUserCarts.concat(goodToBeInCartId)
    })
  }

  function removeCartHandler(goodId) {
    setUserCart((prevUserCarts) => {
      return prevUserCarts.filter((good) => good.id !== goodId)
    })
  }

  function itemIsInCartHandler(goodId) {
    return userCarts.some((good) => good.id === goodId)
  }

  const context = {
    carts: userCarts,
    totalCarts: userCarts.length,
    addCart: addCartHandler,
    removeCart: removeCartHandler,
    itemIsInCart: itemIsInCartHandler,
  }

  return (
    <CartsContext.Provider value={context}>
      {props.children}
    </CartsContext.Provider>
  )
}

export default CartsContext
