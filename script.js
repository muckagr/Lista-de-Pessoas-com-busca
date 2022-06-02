const result = document.getElementById("result");

const filter = document.getElementById("filter");

const select = document.getElementById("select");

filter.addEventListener("input", (e) => filterData(e.target.value));

select.addEventListener("change", (e) => searchByCountry(e.target.value));

let listItens = [];

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

let response = JSON.parse(dataJson);

let listResults = [];

async function getData() {
  const res = await fetch("https://randomuser.me/api/?results=30");

  const { results } = await res.json();

  result.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");

    listItens.push(li);
    listResults.push(user);

    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name}"<br>
      <div class="user-info">
          <h4>${user.name.first}</h4>
          <p>${user.location.city} | ${user.location.country}</p>
          <p>${user.registered.age} anos</p>
      </div>
    `;
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

  const li = document.createElement("li");

  listResults.forEach((user) => {
    if (user.location.country === value) {
      li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name}"<br>
      <div class="user-info">
          <h4>${user.name.first}</h4>
          <p>${user.location.city} | ${user.location.country}</p>
          <p>${user.registered.age} anos</p>
      </div>
    `;
    }
    result.appendChild(li);
  });
}
