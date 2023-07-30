import "./styles/App.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = () => {
    navigate("/productos");
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs date">
            <label htmlFor="date">Fecha:</label>
            <input
              type="datetime-local"
              {...register("date", {
                required: true,
              })}
              id="date"
            />
          </div>
          {errors.date?.type === "required" && <p>El campo es requerido.</p>}
          <div className="inputs name">
            <label htmlFor="name">Nombre del cliente</label>
            <input
              type="text"
              {...register("name", {
                required: true,
                maxLength: 40,
              })}
              id="name"
            />
          </div>
          {errors.name?.type === "required" && <p>El campo es requerido.</p>}
          <div className="inputs direction">
            <label htmlFor="direction">Dirección:</label>
            <textarea
              {...register("direction", {
                required: true,
                maxLength: 300,
              })}
              id="direction"
            />
          </div>
          {errors.direction?.type === "required" && (
            <p>El campo es requerido.</p>
          )}
          <input type="submit" id="button" value="Siguiente" />
        </form>
      </main>
    </>
  );
}
