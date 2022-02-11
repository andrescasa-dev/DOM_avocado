const baseUrl = "https://platzi-avo.vercel.app";
const nodeApp = document.getElementById('app');
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
    const title = document.createElement('h2');
    title.textContent = avocado.name;
    const price = document.createElement('div');
    price.textContent = avocado.price;

    const container = document.createElement('div');
    container.append(img, title, price);
    fragment.appendChild(container);
  });
  nodeApp.append(fragment);
}

displayData();