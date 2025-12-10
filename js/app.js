
const loginArea = document.getElementById("loginArea");
const sistemaArea = document.getElementById("sistemaArea");

const loginForm = document.getElementById("loginForm");
const loginMensaje = document.getElementById("loginMensaje");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const usuario = document.getElementById("loginUsuario").value;
  const clave = document.getElementById("loginClave").value;

  if (usuario === "admin" && clave === "123") {
    loginArea.classList.add("oculto");
    sistemaArea.classList.remove("oculto");
  } else {
    loginMensaje.textContent = "Usuario o contraseña incorrectos.";
  }
});


document.getElementById("btnSalir").onclick = () => {
  sistemaArea.classList.add("oculto");
  loginArea.classList.remove("oculto");
};


const botonesMenu = document.querySelectorAll(".btnMenu");
const secciones = document.querySelectorAll(".seccion");

botonesMenu.forEach(boton => {
  boton.onclick = () => {

    secciones.forEach(s => s.classList.add("oculto"));

    const idMostrar = boton.dataset.seccion;
    document.getElementById(idMostrar).classList.remove("oculto");
  };
});


document.getElementById("formDueno").onsubmit = (e) => {
  e.preventDefault();
  const duenoTelefono = document.getElementById("duenoTelefono").value.trim();
  const mensajeRegistro = document.getElementById("mensajeRegistro");

  mensajeRegistro.textContent = "";

  if (!/^[67]\d{7}$/.test(duenoTelefono)) {
    mensajeRegistro.textContent = "El número debe empezar con 6 o 7 y tener 8 dígitos.";
    mensajeRegistro.style.color ="red"
    return;
  }

  mensajeRegistro.style.color = "green";
  mensajeRegistro.textContent = "Dueño registrado correctamente.";
};

document.getElementById("formMascota").onsubmit = (e) => {
  e.preventDefault();
  document.getElementById("mensajeRegistro").textContent = "Mascota guardada correctamente.";
};


document.getElementById("formAgenda").onsubmit = (e) => {
  e.preventDefault();
  document.getElementById("mensajeAgenda").textContent = "Servicio agendado.";
};


const serviciosDisponibles = [
  { nombre: "Baño básico", precio: 20 },
  { nombre: "Corte de uñas", precio: 10 },
  { nombre: "Juguetes", precio: 15 },
  { nombre: "Guardería", precio: 55 },
  { nombre: "Baño medicado", precio: 35 }
];

const listaServicios = document.getElementById("listaServicios");
const listaCarrito = document.getElementById("listaCarrito");

let carrito = [];

serviciosDisponibles.forEach(serv => {
  const caja = document.createElement("div");

  caja.innerHTML = `
    <strong>${serv.nombre}</strong><br>
    Precio: ${serv.precio} Bs<br>
    <button>Agregar al carrito</button>
  `;

  caja.querySelector("button").onclick = () => {
    carrito.push(serv);
    actualizarCarrito();
  };

  listaServicios.appendChild(caja);
});

function actualizarCarrito() {
  listaCarrito.innerHTML = "";

  let subtotal = 0;

  carrito.forEach(serv => {
    subtotal += serv.precio;

    const li = document.createElement("li");
    li.textContent = `${serv.nombre} - ${serv.precio} Bs`;
    listaCarrito.appendChild(li);
  });

  document.getElementById("subtotal").textContent = subtotal;
  document.getElementById("total").textContent = (subtotal * 1.13).toFixed(2);
}
