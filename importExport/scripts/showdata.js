
// var url="https://fakestoreapi.com/products/category/jewelery"
async function getData(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data)
    return data;
  } catch (err) {
      console.log(err)
  }
}

function appendData(data,parent){

    data.forEach((item)=>{
        let div=document.createElement("div")
        let p=document.createElement("p")
        p.innerText=item.title
        let img=document.createElement("img")
        img.src=item.image
        div.append(img,p)
        parent.append(div)
    })

}

export {getData,appendData}