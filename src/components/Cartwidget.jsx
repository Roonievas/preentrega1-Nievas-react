

function Cartwidget() {
  const handleClick = () => {
    console.log("click")
  }


  return (
    <>

      <div>
        <button onClick={handleClick}><img src="./cart.png" alt="" /><span>5</span> </button>

      </div>
    </>
  )
}

export default Cartwidget