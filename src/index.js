const baseUrl = "https://platzi-avo.vercel.app";
const nodeApp = document.getElementById('app');

const formatPrice = price =>{
  return new window.Intl.NumberFormat('en-US',{
    currency: "USD",
    style: "currency"
  }).format(price);
}

async function fetchData(){
  const response = await fetch(`${baseUrl}/api/avo`);
  const responseJson = await response.json();
  return responseJson;
  
}

async function displayData(){
  const responseJson = await fetchData();
  const fragment = document.createDocumentFragment();

  responseJson.data.forEach(avocado => {
    const img = document.createElement('img');
    img.src = `${baseUrl}${avocado.image}`;
    img.className = "rounded-full";

    const title = document.createElement('h2');
    title.className = "txt-md";
    title.textContent = avocado.name;

    const price = document.createElement('div');
    price.textContent = formatPrice(avocado.price);
    price.className = "txt-md";

    const priceAndTile = document.createElement('div');
    priceAndTile.append(title, price);
    priceAndTile.className = 'info';

    const card = document.createElement('div');
    card.append(img, priceAndTile);
    card.className = "card";

    fragment.appendChild(card);
  });
  //Since there are few avocados, I copy the group of avocados in order to show the responsive design.
  const copyFragment = fragment.cloneNode(true);
  nodeApp.append(fragment);
  nodeApp.append(copyFragment);
}

displayData();