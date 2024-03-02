import React from 'react';

// recieving data from the app component

const Vegetable = ({ data }) => {

    // filtering vegetable from the products collection

    const veg = data.filter((item) => item.catagory == "vegetable")
    return (
        <div class="d-flex flex-wrap m-4  justify-content-center">

            {/* displaying filtered items            */}

            {veg.map((item, index) => {
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

export default Vegetable;