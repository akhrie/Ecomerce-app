import React from 'react'

function AddProduct() {
  return (
    <div>

<div className="row mt-2 g-4">
  <div className="col-md-3">
      <div className="card p-2">
      <div className=" card-img-overlay-name">Fruits</div>
      <a Link to="/Bakery">
          <div>  <img src={process.env.PUBLIC_URL + '/Image/fruitcut.jpg'} className="mg-fluid-name" alt="fruit" height={150} width={200} /> </div>
          </a>
          
        </div>
        
      </div>
   
      <div className="col-md-3">
      <div className="card p-2">
        <div className="card-img-overlay-name">Cake</div>
        <a href="/Bakery"> {/* Use "href" instead of "Link to" for anchor tag */}
          <div>
            <img
              src={process.env.PUBLIC_URL + '/Image/cake.jpg'}
              className="img-fluid-name" // Correct the class name
              alt="Cake"
              height={150}
              width={200}
            />
          </div>
        </a>
        <ul>
          <li>Cake</li>
          <li>Rs. 100.00</li>
          <li>
            <label htmlFor="item-1-quantity">Quantity</label> {/* Correct the "lable" to "label" */}
            <input
              type="text"
              name="item-1-quantity"
              id="item-1-quantity"
              defaultValue="1" // Use "defaultValue" for initial input value
            />
          </li>
          <li>
            <button
              type="button"
              name="item-1-button"
              id="item-1-button"
              onClick={() => {
                // Handle the button click event here (e.g., add to cart logic)
              }}
            >
              Add to Cart
            </button>
          </li>
        </ul>
      </div>
    </div>

   

  </div>
</div>
  )
}

export default AddProduct