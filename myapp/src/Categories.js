import React from 'react'

function Categories() {
  return (

       <div>
  <h3 className='categories'>Explore by categories</h3>
  <div className="container">


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
      <div className=" card-img-overlay-name">Meat & Fish</div>
      <a Link to="/Bakery">
          <div>  <img src={process.env.PUBLIC_URL + '/Image/meatcook.jpg'} className="mg-fluid-name" alt="meat" height={150} width={200} /> </div>
          </a>
        </div>
      </div>
    <div className="col-md-3">
      <div className="card p-2">
      <div className=" card-img-overlay-name">Veggies</div>
      <a Link to="/Bakery">
          <div> <img src={process.env.PUBLIC_URL + '/Image/veggies.jpg'} className="mg-fluid-name" alt="vegies" height={150} width={200} /> </div>
          </a>
        </div>
      </div>
    <div className="col-md-3">
      <div className="card p-2">
      <div className=" card-img-overlay-name">Organic</div>
      <a Link to="/Bakery">
          <div>  <img src={process.env.PUBLIC_URL + '/Image/organic1.jpeg'} className="mg-fluid-name" alt="veg"  height={150} width={200} /> </div>
          </a>
        </div>
      </div>
    <div className="col-md-3">
      <div className="card p-2">
      <div className=" card-img-overlay-name">Oil</div>
      <a Link to="/Bakery">
          <div>  <img src={process.env.PUBLIC_URL + '/Image/oil.jpeg'} className="mg-fluid-name" alt="oil"  height={150} width={200} /> </div>
          </a>
        </div>
      </div>
    <div className="col-md-3">
      <div className="card p-2">
      <div className=" card-img-overlay-name">Backery</div>
      <a Link to="/Bakery">
          <div>  <img src={process.env.PUBLIC_URL + '/Image/backery.jpg'} className="mg-fluid-name" alt="Bakery" height={150} width={200} /> </div>
          </a>
        </div>
      </div>
    <div className="col-md-3">
      <div className="card p-2">
      <div className=" card-img-overlay-name">Rice</div>
      <a Link to="/Bakery">
          <div>  <img src={process.env.PUBLIC_URL + '/Image/rice.jpg'} className="mg-fluid-name" alt="rice" height={150} width={200} /> </div>
          </a>
        </div>
      </div>

    <div className="col-md-3">
      <div className="card p-2">
      <div className=" card-img-overlay-name">Cake</div>
      <a Link to="/Bakery">        
      <div>  <img src={process.env.PUBLIC_URL + '/Image/cake.jpg'} className="mg-fluid-name" alt="Cake" height={150} width={200} /> </div>
      </a>
      </div>
      </div>

  </div>
</div>

      </div>
  )
}

export default Categories