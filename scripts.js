// 1. BASE DE DATOS (Asegúrate de que los nombres coincidan con el HTML)
const datos = [
    { id: 1, tipo: 'museo', nombre: "Museo del Oro", autor: "Banco de la República", desc: "Orfebrería prehispánica.", img: "https://picsum.photos/id/101/400/300" },
    { id: 2, tipo: 'museo', nombre: "Museo Botero", autor: "Fernando Botero", desc: "Arte moderno y donaciones.", img: "https://picsum.photos/id/102/400/300" },
    { id: 3, tipo: 'obra', nombre: "La Violencia", autor: "Alejandro Obregón", desc: "Óleo sobre lienzo.", img: "https://picsum.photos/id/201/400/300" },
    { id: 4, tipo: 'obra', nombre: "Monalisa", autor: "Fernando Botero", desc: "Estilo volumétrico.", img: "https://picsum.photos/id/202/400/300" }
];

let favoritos = JSON.parse(localStorage.getItem('favs')) || [];
let filtroActual = 'museo'; 

// 2. FUNCIÓN DE RENDERIZADO (UNIFICADA)
function renderizar() {
    const container = document.getElementById('museos-container');
    if (!container) return; 
    container.innerHTML = '';

    // Filtrar datos según el tipo o favoritos
    let filtrados = (filtroActual === 'favoritos') 
        ? datos.filter(item => favoritos.includes(item.id)) 
        : datos.filter(item => item.tipo === filtroActual);

    if (filtrados.length === 0 && filtroActual === 'favoritos') {
        container.innerHTML = `<p class="text-center w-100">No tienes favoritos aún. ❤️</p>`;
    }

    filtrados.forEach(item => {
        const isFav = favoritos.includes(item.id) ? '❤️' : '🤍';
        container.innerHTML += `
            <div class="col-md-4">
                <div class="card h-100 shadow-sm">
                    <img src="${item.img}" class="card-img-top" onclick="abrirModal(${item.id})" style="cursor:pointer">
                    <div class="card-body text-center">
                        <h5>${item.nombre}</h5>
                        <p class="text-muted small">${item.autor}</p>
                        <button class="btn btn-light" onclick="toggleFavorito(${item.id})">${isFav}</button>
                    </div>
                </div>
            </div>`;
    });
    document.getElementById('fav-count-nav').innerText = favoritos.length;
    // Actualizar contadores
    const navCount = document.getElementById('fav-count-nav');
    if (navCount) navCount.innerText = favoritos.length;
}

// 3. NAVEGACIÓN (INICIO / CONTENIDO)
function entrarAlMuseo() {
    document.getElementById('inicio').classList.add('d-none');
    document.getElementById('contenido-principal').style.display = 'block';
    cambiarFiltro('museo');
}

function volverAlInicio() {
    document.getElementById('inicio').classList.remove('d-none');
    document.getElementById('contenido-principal').style.display = 'none';
}

function cambiarFiltro(tipo) {
    filtroActual = tipo;
    // Forzar mostrar contenido si se hace clic en la navbar
    document.getElementById('inicio').classList.add('d-none');
    document.getElementById('contenido-principal').style.display = 'block';
    renderizar();
}

// 4. FAVORITOS Y MODAL
window.toggleFavorito = (id) => {
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(fid => fid !== id);
    } else {
        favoritos.push(id);
    }
    localStorage.setItem('favs', JSON.stringify(favoritos));
    renderizar();
};

function abrirModal(id) {
    const item = datos.find(d => d.id === id);
    if (!item) return;

    document.getElementById('imgModal').src = item.img;
    document.getElementById('tituloModal').innerText = item.nombre;
    document.getElementById('autorModal').innerText = "Autor: " + item.autor;
    document.getElementById('descModal').innerText = item.desc;

    const modalElement = new bootstrap.Modal(document.getElementById('miModal'));
    modalElement.show();
}

// 5. VALIDACIÓN DE FORMULARIO (BOOTSTRAP)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contacto');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const nombre = document.getElementById('nombre');
            const email = document.getElementById('email');
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let esValido = true;

            // Validación Nombre
            if (nombre.value.trim().length < 3) {
                nombre.classList.add('is-invalid');
                esValido = false;
            } else {
                nombre.classList.remove('is-invalid');
                nombre.classList.add('is-valid');
            }

            // Validación Email
            if (!regexEmail.test(email.value)) {
                email.classList.add('is-invalid');
                esValido = false;
            } else {
                email.classList.remove('is-invalid');
                email.classList.add('is-valid');
            }

            if (esValido) {
                alert("¡Gracias por contactarnos!");
                form.reset();
                nombre.classList.remove('is-valid');
                email.classList.remove('is-valid');
            }
        });
    }
});