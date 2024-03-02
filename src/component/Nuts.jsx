import React from 'react';

// recieving data from the app component

const Nuts = ({ data }) => {

  // filtering nuts from the products collection

  const nut = data.filter((item) => item.catagory == "nuts")
  return (
    <div class="d-flex flex-wrap m-4  justify-content-center">

      {/* displaying filtered items            */}

      {nut.map((item, index) => {
        return (
          <div class="card m-4" style={{ width: "18rem", height: "24rem" }} key={index}>
            <h3 class="text-center">{item.name}</h3>
            <img src={item.img} alt="images" style={{ height: "auto" }} />
            <h6 class="overflow-auto p-4 text-center">{item.benefits}</h6>


          </div>


        )
      })}

    </div>
  );
};

export default Nuts;



/*{ {<BrowserRouter>
  <Routes>
   <Route path="/" element={<Nav/>}>
     <Route path="home" element={<Home/>}/>
      <Route path="fruit" element={<Fruit/>}/>
       <Route path="vegetable" element={<Vegetable/>}/>
        <Route path="nuts" element={<Nuts/>}/>
</Route>




  </Routes>
</BrowserRouter>}*/