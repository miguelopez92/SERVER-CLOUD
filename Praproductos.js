import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.cargarProductos = async function () {
  const snap = await getDocs(collection(db, "productos"));

  listado.innerHTML = "";

  snap.forEach(doc => {
    const p = doc.data();

    listado.innerHTML += `
      <div>
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <img src="${p.imagen}" width="120">
      </div>
    `;
  });
}
