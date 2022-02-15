const baseUrl = "https://platzi-avo.vercel.app";
const nodeApp = document.getElementById('app');
const formatPrice = price =>{
  return new window.Intl.NumberFormat('en-US',{
    currency: "USD",
    style: "currency"
  }).format(price);
}

/**
 * Fetch data using promises.
 */
// fetch(API_URL).then(response => response.json().then(responseJson => {
//   const nodes = [];
//   responseJson.data.forEach( avocado => {
//     const img = document.createElement('img');
    
//     const title = document.createElement('h2');
    
//     const price = document.createElement('div');

//     const container = document.createElement('div');
//     container.append(img, title, price);
//     nodes.push(container);
//   });
//   document.body.append(...nodes);
// }));

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
    title.textContent = avocado.name;

    const price = document.createElement('div');
    price.textContent = formatPrice(avocado.price);

    const priceAndTile = document.createElement('div');
    priceAndTile.append(title, price);
    priceAndTile.className = 'info';

    const card = document.createElement('div');
    card.append(img, priceAndTile);
    card.className = "card";

    fragment.appendChild(card);
  });
  nodeApp.append(fragment);
}

displayData();