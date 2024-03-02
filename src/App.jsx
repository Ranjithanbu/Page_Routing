import React from 'react';
import { BrowserRouter, Routes, Route ,} from "react-router-dom";
import Navigation from './component/Navigation.jsx'
import Home from './component/Home.jsx'
import Fruit from './component/Fruit.jsx'
import Vegetable from './component/Vegetable.jsx'
import Nuts from './component/Nuts.jsx'

const App = () => {
 // storing needed items in data variable 
 let data=[
   {name:"Strawberry",
     catagory:"fruit",
     img:"https://leafyplace.com/wp-content/uploads/2023/02/strawberry.jpg",
    benefits:"Strawberries are a popular type of fruit known for their vibrant red color and sweet, juicy flavor. They are a type of red accessory fruit with a heart shape and many tiny seeds embedded in the skin. Strawberries grow on low-lying plants with green foliage and ripen in the summer Strawberries typically measure 1.2” to 1.6” (3 – 4 cm) in diameter. The bright red color and glossy appearance of strawberries make them visually appealing. The fruit’s juicy texture adds to their enjoyment. When selecting strawberries, look for firm and plump ones with a bright red color"}, {name:"Raspberry ",
     catagory:"fruit",
     img:"https://leafyplace.com/wp-content/uploads/2023/02/raspberries.jpg",
    benefits:"Raspberries are small, red, edible, berry-like fruits that grow on thorny shrubs, although thornless varieties are available too. Ripe raspberry fruits have a sweet and slightly tart flavor and juicy texture. The small aggregate fruits measure around 0.4” (1 cm) long and contain up to 100 drupelets, each containing a single seed.Raspberries are a good source of dietary fiber, vitamin C, and antioxidants. The red fruits are delicious as a snack or used in baked products like pies, tarts, and cakes. Additionally, raspberry jams, jellies, and sauces are highly popular.Because of their short shelf life, raspberries are commonly frozen. This process makes adding them to smoothies, yogurt, or cereal easy for a burst of flavor and added nutrition."},
     {name:"Red Apple",
     catagory:"fruit",
     img:"https://leafyplace.com/wp-content/uploads/2023/02/apples.jpg",
    benefits:"Red apples are one of the most widely consumed fruits worldwide. The round or oval-shaped pome fruits have a thin red skin surrounding crisp, juicy flesh. Common varieties of red apples include Gala, Red Delicious, Honeycrisp, Pink Lady, and Fuji. Red apple’s average size is 2.7” to 3.3” (7 – 8.5 cm) in diameter.Red apples have a balanced sweet-tart flavor. However, the taste of red apples depends on the specific cultivar. Some red varieties are exceedingly sweet, whereas others, like Macintosh apples, are tart. Red apples make a healthy and portable snack option for people of all ages."},
     {name:"Red Cherry",
     catagory:"fruit",
     img:"https://leafyplace.com/wp-content/uploads/2021/12/cherry-tree.jpg",
    benefits:"Red cherries are small, round drupes with a sweet or tart fleshy body, thin red skin, and a hard stone. The stone fruits can be various shades of red, from vibrant, bright red to deep burgundy. Red cherries grow in small clusters and ripen in summer when the stems easily pull off the tree"},
     {name:"Cranberry ",
     catagory:"fruit",
     img:"https://leafyplace.com/wp-content/uploads/2023/04/cranberry.jpg",
    benefits:"Cranberries are small, round, deep red berries that grow on low shrubs in bogs and marshes. The red berries have a glossy appearance and measure 0.5” (1.3 cm) in diameter. Red cranberries have a distinct tart flavor and can taste slightly bitter or sour. The red berry plants thrive in cold, temperate climates."},
     {name:"Red Grape",
     catagory:"fruit",
     img:"https://leafyplace.com/wp-content/uploads/2023/04/red-grapes.jpg",
    benefits:"Red grapes are red berry fruits that grow in large clusters on fast-growing woody vines. Grape varieties can be red, green, or purple. The round berries measure between 0.24” and 1.2” (0.6 – 3 cm) in diameter. Red grapes are known for their vibrant, deep red color and sweet flavor."}, {name:"Green Grape",
     catagory:"fruit",
    img:"https://leafyplace.com/wp-content/uploads/2021/10/green-grapes.jpg",

    benefits:"Green grapes are a type of green berry with sweet, juicy flavors. The round or oval-shaped berries typically have a crisp, firm texture. Depending on the grape variety, they can be seedless or contain small, edible seeds. There can be between 70 and 100 green grapes in a typical cluster"}, {name:"Common Pear",
     catagory:"fruit",
     img:"https://leafyplace.com/wp-content/uploads/2021/10/green-pears.jpg",
    benefits:"Pears are a type of green pome fruit with a distinctive shape—a round bottom and tapering top—that grow on pear trees. Pears are known for their sweet, juicy flesh with a taste containing hints of honey, citrus, and vanilla. The pear’s crisp flesh can be smooth or slightly grainy in texture."}, {name:"Lime",
     catagory:"fruit",
     img:"https://leafyplace.com/wp-content/uploads/2021/10/lime-tree.jpg",
    benefits:"Limes are a type of small, green citrus fruit with a tangy, sour taste and a refreshing aroma. Typically round or oval, green limes are slightly larger than a golf ball, up to 2.5” (6 cm) in diameter. Limes are known for their vibrant green color, although some varieties turn yellow when fully ripened."}, {name:"Avocado",
     catagory:"fruit",
     img:"https://leafyplace.com/wp-content/uploads/2022/02/avocado.jpg",
    benefits:"Avocado is a green fruit shaped like a pear. Botanically speaking, avocados are large single-seeded berries used like vegetables. The pear-like fruit has a dark-green smooth to bumpy skin and can ripen to dark green, almost black. The dark green avocado fruits typically measure 3” to 8” (7 – 20 cm) long"}, {name:"onion",
     catagory:"vegetable",
     img:"https://th.bing.com/th/id/OIP.b04Q2GBN5Djx8vXf5XD17QAAAA?rs=1&pid=ImgDetMain",
    benefits:"onion"}, {name:"potato",
     catagory:"vegetable",
     img:"https://media.gettyimages.com/id/51101394/photo/potatoes-photo-taken-august-1999.jpg?b=1&s=594x594&w=0&k=20&c=pCSenjlQvEe3-qbpWXtxo03A6y1R6D37gbSx5wAp6c4="
    ,benefits:"potato"}, {name:"carrot",
     catagory:"vegetable",
     img:"https://th.bing.com/th/id/OIP.aRxQ1HWKuPPZ1B9tvKcLGwHaFv?rs=1&pid=ImgDetMain",
    benefits:"carrot"}, {name:"ginger",
     catagory:"vegetable",
     img:"https://steptohealth.co.uk/wp-content/uploads/2015/03/Ginger2.jpg",
    benefits:"ginger"}, {name:"garlic",
     catagory:"vegetable",
     img:"https://th.bing.com/th/id/OIP.mYfefKXOXKjq02A0W_-tJAAAAA?rs=1&pid=ImgDetMain",
    benefits:"garlic"}, {name:"Radish",
     catagory:"vegetable",
     img:"https://th.bing.com/th/id/OIP.ugRTRvPoPsOVlSAIsmmQPwHaF4?rs=1&pid=ImgDetMain",
    benefits:"Radish"}, {name:"Beetroot",
     catagory:"vegetable",
     img:"https://media.istockphoto.com/photos/fresh-beetroot-isolated-on-white-background-picture-id584890470?k=6&m=584890470&s=612x612&w=0&h=NfU-VOXCzPYWjwoO7fePiraTblj4UJK0V40qZG_6qr4=",
    benefits:"Beetroot"}, {name:"Cabbage",

     catagory:"vegetable",
     img:"https://th.bing.com/th/id/R.175c4bd088c0e3adabb23d26031900da?rik=EdA48VjAK8VkQQ&riu=http%3a%2f%2fd37aln7voll6p.cloudfront.net%2fwp-content%2fuploads%2f2017%2f06%2ffresh-cabbage.jpg&ehk=1BPNTTtdSVDuioxf7%2f2OGs2%2fFzGZSr7KgGkRW9CyQgo%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
    benefits:"Cabbage"}, {name:"Cauliflower",
     catagory:"vegetable",
     img:"https://th.bing.com/th/id/OIP.VLqLOS1zdSNVucYRhtRm4gHaE8?rs=1&pid=ImgDetMain",
    benefits:"Cauliflower"}, {name:"Pumkin",
     catagory:"vegetable",
     img:"https://th.bing.com/th/id/OIP.UhBG1v505TmoFuF5zz5k1AAAAA?rs=1&pid=ImgDetMain",
    benefits:"Pumkin"}, {name:"Almonds",
     catagory:"nuts",
     img:"https://dummyimage.com/450x350/000/fff.jpg&text=Nuts",
    benefits:"Almonds"}, {name:"Pistachios",
     catagory:"nuts",
     img:"https://dummyimage.com/450x350/000/fff.jpg&text=Nuts",
    benefits:"Pistachios"}, {name:"Walnuts",
     catagory:"nuts",
     img:"https://dummyimage.com/450x350/000/fff.jpg&text=Nuts",
    benefits:"Walnuts"}, {name:"Cashews",
     catagory:"nuts",
     img:"https://dummyimage.com/450x350/000/fff.jpg&text=Nuts",
    benefits:"Cashews"}, {name:"Pecans",
     catagory:"nuts",
     img:"https://dummyimage.com/450x350/000/fff.jpg&text=Nuts",
    benefits:"Pecans"}, {name:"Macadamia ",
     catagory:"nuts",
     img:"https://dummyimage.com/450x350/000/fff.jpg&text=Nuts",
    benefits:"Macadamia "}, {name:"Brazil nuts",
     catagory:"nuts",
     img:"https://dummyimage.com/450x350/000/fff.jpg&text=Nuts",
    benefits:"Brazil nuts"}, {name:"Hazelnuts",
     catagory:"nuts",
     img:"https://dummyimage.com/450x350/000/fff.jpg&text=Nuts",
    benefits:"Hazelnuts"}, {name:"Peanuts",
     catagory:"nuts",
     img:"https://dummyimage.com/450x350/000/fff.jpg&text=Nuts",
    benefits:"Peanuts"}
    , {name:"Coconut",
     catagory:"nuts",
     img:"https://dummyimage.com/450x350/000/fff.jpg&text=Nuts",
    benefits:"Coconut"}
 ]
 
 
 
  return (
    <div>
        
{/* needed element for routing         */}

  <BrowserRouter>
   <div><Navigation/></div>
   <Routes>
  
   <Route path="/" element={<Home data={data}/>}/>

    <Route path="/fruit" element={<Fruit  data={data}/>}/>
     <Route path="/vegetable" element={<Vegetable  data={data}/>}/>
      <Route path="/nuts" element={<Nuts  data={data}/>}/>
      

   </Routes>
   </BrowserRouter>
  
  
    </div>
  );
};

export default App;