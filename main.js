const userContainer = document.getElementById("user-container");
const fetchUserButton = document.getElementById("fetch-user");

fetchUserButton.addEventListener("click", () => {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];
      userContainer.innerHTML = `
                <img src="${user.picture.large}" alt="User Image">
                <p>Nombre: ${user.name.first} ${user.name.last}</p>
                <p>Correo Electrónico: ${user.email}</p>
                <p>Edad: ${user.dob.age}</p>
                <p>Género: ${user.gender}</p>
            `;
    })
    .catch((error) => console.error("Error al obtener el usuario:", error));
});
