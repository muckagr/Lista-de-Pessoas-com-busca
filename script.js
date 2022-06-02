const result = document.getElementById("result");

//Declarar um array de nomes

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

//Listar os nomes das pessoas de listNames
function getData() {
  //removendo todos os itens da ul result
  result.innerHTML = "";

  listNames.forEach((user) => {
    const li = document.createElement("li");

    li.innerHTML = `
        <img src="${user.picture}" alt="${user.name}"
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
