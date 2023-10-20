for(var i=0;i<products.length;i++)
{

document.getElementById("select1").innerHTML += `<option value="${i}">${products[i].title}</option>`
document.getElementById("select2").innerHTML += `<option value="${i}">${products[i].title}</option>`
}
function item1(a)
{
  var select2 = document.getElementById("select2").value;
    if(a != select2)
    {
     document.getElementById('image1').src= products[a].image
     document.getElementById('price1').innerHTML = products[a].price
     document.getElementById('des1').innerHTML = products[a].description
     document.getElementById('brand1').innerHTML = products[a].brand
    }
    else{
        document.getElementById('select1').selectedIndex = 0
        document.getElementById('image1').src= products[0].image
        document.getElementById('price1').innerHTML = "N/A"
        document.getElementById('des1').innerHTML = "N/A"
        document.getElementById('brand1').innerHTML =  "N/A"
    }
}
function item2(b)
{
  var select1 = document.getElementById("select1").value;
    if(b != select1)
    {
        document.getElementById('image2').src= products[b].image
        document.getElementById('price2').innerHTML = products[b].price
        document.getElementById('des2').innerHTML = products[b].description
     document.getElementById('brand2').innerHTML = products[b].brand
    }
    else{
        document.getElementById('select2').selectedIndex = 0
        document.getElementById('image2').src= products[0].image
        document.getElementById('price2').innerHTML = "N/A"
        document.getElementById('des2').innerHTML = "N/A"
        document.getElementById('brand2').innerHTML =  "N/A"
    }
}