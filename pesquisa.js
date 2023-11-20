const apiKey = '6b45b7f8';
const frmpesquisa = document.querySelector(".obras");


const carregalista = (json) => {
    const lista = document.querySelector(".lista");
    lista.innerHTML = "";
   
  

    json.Search.forEach(element => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `<img src="${element.Poster}" alt="${element.Title}" /><h2>${element.Title}</h2>`;
        lista.appendChild(item);
    });
};



frmpesquisa.onsubmit = async (ev) => {
    ev.preventDefault();

    const pesquisa = ev.target.pesquisa.value;
    if (pesquisa === "") {
        alert('Preencha o campo');
        return;
    }

    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${pesquisa}&apiKey=${apiKey}`);
        const json = await response.json();
        
        console.log(json.Response);

        if (json.Response === 'False' || json.Response === false) {
            alert("Nenhum filme encontrado");
            return;
        }

        carregalista(json);
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
};
