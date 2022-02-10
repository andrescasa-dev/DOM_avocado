const API_URL = "https://platzi-avo.vercel.app/api/avo";

fetch(API_URL).then(response => response.json().then(responseJson => {
  const nodes = [];
  responseJson.data.forEach( avocado => {
    const img = document.createElement('img');
    
    const title = document.createElement('h2');
    
    const price = document.createElement('div');

    const container = document.createElement('div');
    container.append(img, title, price);
    nodes.push(container);
  });
  document.body.append(...nodes);
}));