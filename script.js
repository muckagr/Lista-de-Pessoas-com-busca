const result = document.getElementById("result");

const filter = document.getElementById("filter");

const select = document.getElementById("select");

filter.addEventListener("input", (e) => filterData(e.target.value));

select.addEventListener("change", (e) => searchByCountry(e.target.value));

let listItens = [];

let listNames = [
  {
    name: "Ana Santos",
    age: 20,
    city: "São Paulo",
    country: "Brasil",
    picture: "https://randomuser.me/api/portraits/women/94.jpg",
  },

  {
    name: "Dalva Duarte",
    age: 53,
    city: "São Roque",
    country: "Brasil",
    picture: "https://randomuser.me/api/portraits/women/95.jpg",
  },

  {
    name: "Nayra Louise",
    age: 33,
    city: "Cajamar",
    country: "Brasil",
    picture: "https://randomuser.me/api/portraits/women/96.jpg",
  },
];

let dataJson = `
{
  "results": [
    {
      "id": 1,
      "name": "Caio Duarte",
      "age": 34,
      "city": "Cajamar",
      "country": "Brasil",
      "picture": "https://randomuser.me/api/portraits/men/57.jpg",
      "hobby": {
        "first": "Jogos de PC",
        "second": "Escutar música"
      }
    },

    {
      "id": 2,
      "name": "Ricardo Alves",
      "age": 23,
      "city": "Roma",
      "country": "Itália",
      "picture": "https://randomuser.me/api/portraits/men/58.jpg",
      "hobby": {
        "first": "Assistir Filmes",
        "second": "Jogar Futebol"
      }
    },

    {
      "id": 3,
      "name": "Sandro Alves",
      "age": 58,
      "city": "Lisboa",
      "country": "Portugal",
      "picture": "https://randomuser.me/api/portraits/men/59.jpg",
      "hobby": {
        "first": "Jogos de PC",
        "second": "Escutar música"
      }
    }
  ]
}
`;

//Convertendo um Json em um Objeto JavaScript
let response = JSON.parse(dataJson);

let listResults = response.results;
//Exibir o conteúdo da variável response no console
console.log(response);

function getData() {
  //removendo todos os itens da ul result
  result.innerHTML = "";

  listResults.forEach((user) => {
    const li = document.createElement("li");

    listItens.push(li);

    li.innerHTML = `
      <img src="${user.picture}" alt="${user.name}"<br>
      <div class="user-info">
          <h4>${user.name}</h4>
          <p>${user.city} | ${user.country}</p>
          <p>${user.age} anos</p>
      </div>
    `;
    //Adiciona o li com o item na lista result
    result.appendChild(li);
  });
}

function filterData(searchTerm) {
  listItens.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

function searchByCountry(value) {
  result.innerHTML = "";
  console.log(value);

  listResults.forEach((user) => {
    const li = document.createElement("li");
    if (user.country === value) {
      li.innerHTML = `
        <img src="${user.picture}" alt="${user.name}"<br>
        <div class="user-info">
            <h4>${user.name}</h4>
            <p>${user.city} | ${user.country}</p>
            <p>${user.age} anos</p>
        </div>
      `;
    }
    result.appendChild(li);
  });
}
