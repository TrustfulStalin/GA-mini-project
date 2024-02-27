const url = "https://api.punkapi.com/v2/beers/"
async function getData()
{
    const response = await fetch(url);
    const data = await response.json();


console.log(data);
makefirstcard(data);
makesecondcard(data)
    makethirdcard(data);
makefourthcard(data);

    //btnFun(data);
}
let  total = 0;


function makefirstcard(data)
{
    const image1 = document.getElementById("card1-pic")
    const p1 = document.getElementById("P1");
   image1.src = data[0].image_url;
   p1.innerText = data[0].tagline;




}

function makesecondcard(data)
{
const image2 = document.getElementById("pic2")
    image2.src = data[3].image_url;
}

function makethirdcard(data)
{
    const image3 = document.getElementById("pic3")
    image3.src = data[7].image_url;

}

function makefourthcard(data)
{
const image4 = document.getElementById("pic4")
    image4.src = data[10].image_url;
}

function btnFun()
{

    alert("September of 2007")

}

function btnFun2()
{
    alert("November 2015")
}

function btnFun3()
{
    alert("July of 2012")
}

function btnFun4()
{
    alert("January 2011")
}

function details1()
{
    alert("The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.")
    alert("This beer matches well with __  Spicy chicken tikka masala" +
        "            Grilled chicken quesadilla " +
        "            Caramel toffee cake")
}

function  details2()
{
    alert("Be careful not to collect too much wort from the mash. Once the sugars are all washed out there are some very unpleasant grainy tasting compounds that can be extracted into the wort.")
    alert("This beer goes great with __ \"Fresh crab with lemon\",\n" +
        "            \"Garlic butter dipping sauce\",\n" +
        "            \"Goats cheese salad\",\n" +
        "            \"Creamy lemon bar doused in powdered sugar\"")
}

function details3()
{
    alert("\"An Imperial Black Belgian Ale aged in old Invergordon Scotch whisky barrels with mountains of raspberries, tayberries and blackberries in each cask. Decadent but light and dry, this beer would make a fantastic base for ageing on pretty much any dark fruit - we used raspberries, tayberries and blackberries beause they were local.\",")
    alert("Foods that pair well with this pair is __ \"Tandoori lamb with pomegranate\",\n" +
        "            \"Beef Wellington with a red wine jus\",\n" +
        "            \"Raspberry chocolate torte\"")
}


function details4()
{
    alert("\"Good old Bramling Cross is elegant, refined, assured, (boring) and understated. Understated that is unless you hop the living daylights out of a beer with it. This is Bramling Cross re-invented and re-imagined, and shows just what can be done with English hops if you use enough of them. Poor Bramling Cross normally gets lost in a woeful stream of conformist brown ales made by sleepy cask ale brewers. But not anymore. This beer shows that British hops do have some soul, and is a fruity riot of blackberries, pears, and plums. Reminds me of the bramble, apple and ginger jam my grandmother used to make.\"")
    alert("Foods that go great with this beer is __ " + "Warm blackberry pie",
        "Vinegar doused fish and chips",
        "Aromatic korma curry with lemon and garlic naan")
}

function review()
{
    let feedback = prompt()
    const R1 = document.getElementById("R1");
    R1.append(feedback + "---------");
}

function review2()
{
    let feedback = prompt()
    const R2 = document.getElementById("R2");
    R2.append(feedback + "------------");
}

function review3()
{
    let feedback = prompt()
    const R3 = document.getElementById("R3");
    R3.append(feedback + "-----------");
}

function review4()
{
    let feedback = prompt()
    const R4 = document.getElementById("R4");
    R4.append(feedback + "-------------");
}



function createBeerOne()
{
    const newWorld = document.getElementById("newWorld")
    const card6 = document.createElement("div");
    const image6  = document.createElement("img")
    const container6 = document.createElement("div")
    const smalltext = document.createElement("h4")
    const name5 = document.createElement("p")

    image6.src = "https://m.media-amazon.com/images/I/41jTxYd8jiL.__AC_SX300_SY300_QL70_FMwebp_.jpg";
    name5.innerText = "Budlight"
    smalltext.innerText = "Budlight"
    card6.append(name5);
    card6.append(image6)
    container6.append(card6);
newWorld.append(container6)
}

function createBeerTwo()
{
    const newWorld = document.getElementById("newWorld")
    const card7 = document.createElement("div");
    const image7  = document.createElement("img")
    const container7 = document.createElement("div")
    const smalltext = document.createElement("h4")
    const name7 = document.createElement("p")

    image7.src = "https://i5.walmartimages.com/seo/Corona-Extra-Mexican-Lager-Import-Beer-24-fl-oz-1-Glass-Bottle-4-6-ABV_ef34b913-506c-4373-a058-0a78498957f0.39d212ecc6fb9b8e45a60454485eb4f8.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF";
    name7.innerText = "Corona"
    smalltext.innerText = "Corona"
    card7.append(name7);
    card7.append(image7)
    container7.append(card7);
    newWorld.append(container7)
    image7.style="width:50%";
}

function createBeerThree()
{
    const newWorld = document.getElementById("newWorld")
    const card8 = document.createElement("div");
    const image8  = document.createElement("img")
    const container8 = document.createElement("div")
    const smalltext = document.createElement("h4")
    const name8 = document.createElement("p")

    image8.src = "https://siestaspirits.com/cdn/shop/products/michelob_ultra_btl.jpg?v=1571264405";
    name8.innerText = "Michelob Ultra Superior Light Beer"
    smalltext.innerText = ""
    card8.append(name8);
    card8.append(image8)
    container8.append(card8);
    newWorld.append(container8)
    image8.style="width:50%";
}

function bartender()
{

}


function darkmode()
{

}

getData()
makefirstcard()
makesecondcard()
makethirdcard()
makefourthcard()


function buybeer1()
{
    alert("You added 1 Brew dog to your cart")
    total = total + 5;
console.log(total)
}

function buybeer2()
{
    total = total + 8;
    alert("You added 1  Berliner Weisse With Yuzu to your cart")
}

function buybeer3()
{
    total = total + 8;
    alert("you add 1 AB:12 to your cart ")
}

function buybeer4()
{
    total = total + 17
    alert("You added 1 Bramling X to your cart")
}

function payTab()
{
    alert("Whats your name ?")
    let feedback = prompt();
    if (feedback === "jack"||feedback === "Jack")
    {
        alert("Your money is no good here")
    }
    else if (feedback === "danny"|| feedback === "Danny")
    {
        alert("Just take your medicine")
    }
    else if (feedback === "")
    {
        alert("Dont you knw you always been here ?")
    }
    else{
        alert("You total is  " + "$" +  total)
    }
}
const btn1 = document.getElementById("button1");
