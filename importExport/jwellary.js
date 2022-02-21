import Navbar from './components/navbar.js';
console.log(Navbar)
let div = document.getElementById("navbar_container")
div.innerHTML=Navbar()

let url="https://fakestoreapi.com/products/category/electronics"
let res=await getData(url)
console.log("red",res)
console.log(res)
let parent=document.getElementById("data")
appendData(res,parent)

// https://fakestoreapi.com/products/category/jewelery