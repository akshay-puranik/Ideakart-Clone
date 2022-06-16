var container = document.querySelector(".container");

for (let i = 0; i < mensData.length; i++) {
  let card = document.createElement("div");
  card.classList.add("card");
  let imgLink = mensData[i].image_url;
  let img = document.createElement("img");
  img.setAttribute("src", imgLink);
  card.append(img);

  // console.log("here")

  let name = document.createElement("p");
  name.innerText = mensData[i].name;
  name.style.fontSize = "smaller";
  card.append(name);

  let price = document.createElement("p");
  price.innerText = mensData[i].price;
  card.append(price);

  let addToCart = document.createElement("button");
  addToCart.innerText = "Add To Cart";
  addToCart.style.padding = "10px 20px";
  card.append(addToCart);

  container.append(card);
}