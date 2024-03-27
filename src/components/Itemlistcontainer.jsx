const ItemListContainer = ({ greeting }) => {
    return (
      <main>
        <div className="container mx-auto h-40 mt-3">
            <p className="font-bold text-center pt-5 p-5">{greeting}</p>
        </div>
      </main>
    )
  }
  
  export default ItemListContainer