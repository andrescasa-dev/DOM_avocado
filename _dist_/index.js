const baseUrl = "https://platzi-avo.vercel.app";

const nodeApp = document.getElementById('app');
const btn_switch = document.getElementById("btn_toggle");

/**
 * 
 * @param {number_price} price 
 * @returns String which has the US currency format.
 */
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

    const title = document.createElement('h2');
    title.className = "txt-md";
    title.textContent = avocado.name;

    const price = document.createElement('p');
    price.textContent = formatPrice(avocado.price);
    price.style.marginBlockStart = "10px"
    price.className = "txt-md";

    const priceAndTile = document.createElement('div');
    priceAndTile.append(title, price);
    priceAndTile.className = 'info';

    const card = document.createElement('div');
    card.append(img, priceAndTile);
    card.className = "card";

    //I use fragment for avoid calling so many times to append function.
    fragment.appendChild(card);
  });

  //Since there are few avocados, I copy the group of avocados in order to show the responsive design.
  const copyFragment = fragment.cloneNode(true);
  nodeApp.append(copyFragment);

  //I don't append each avocado, instead, I append a group of avocados.
  nodeApp.append(fragment);
}

displayData();

btn_switch.addEventListener('click', (event) => {
  document.body.classList.toggle("dark-theme");
});

