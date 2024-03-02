import React from 'react';

// recieving data from the app component

const Fruit = ({ data }) => {

    // filtering fruits from the products collection    

    const fruits = data.filter((item) => item.catagory == "fruit")

    return (
        <div class="d-flex flex-wrap m-4  justify-content-center">

            {/* displaying filtered items            */}

            {fruits.map((item, index) => {
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

export default Fruit;