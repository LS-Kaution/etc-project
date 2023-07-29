import { Link } from "react-router-dom";
import "./styles/App.scss";
import InputsOrdenDeCompra from "./components/InputsOrdenDeCompra";

export default function App() {
  return (
    <>
      <main className="main orden-de-compra">
        <h1>Orden de compra</h1>
        <section id="status">
          <div id="general">
            <p>1</p>
            <p>Información General</p>
          </div>
          <div id="articles">
            <p>2</p>
            <p>Productos</p>
          </div>
        </section>
        <form>
          <InputsOrdenDeCompra
            className="inputs date"
            htmlFor="date"
            description="Fecha:"
            id="date"
            name="Fecha"
            type="date"
          />
          <InputsOrdenDeCompra
            className="inputs name"
            htmlFor="name"
            description="Nombre del cliente:"
            id="name"
            name="Nombre del cliente"
            type="text"
          />

          <div className="inputs direction">
            <label htmlFor="direction">Dirección:</label>
            <textarea
              id="direction"
              name="Dirección"
              cols={40}
              rows={10}
              required
            ></textarea>
          </div>
          <Link to="/productos">
            <input id="button" type="button" value="Siguiente" />
          </Link>
        </form>
      </main>
    </>
  );
}
