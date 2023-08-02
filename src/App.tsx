import "./styles/App.scss";
import { Button, TextField } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useOrderStore } from "./stores";

export default function App() {
  const navigate = useNavigate();
  const { updateOrder } = useOrderStore();
  const randomUUID = () => crypto.randomUUID();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data: any) => {
    updateOrder({
      id: randomUUID(),
      date: data.date,
      address: data.address,
      client: data.name,
    });

    navigate("/productos");
  };

  return (
    <>
      <main className="main orden-de-compra">
        <section id="ig-status">
          <div className="status ig">
            <div className="numbers ig-one">1</div>
            <h2>Información general</h2>
          </div>
          <div id="line-ig"></div>
          <div className="status ig">
            <div className="numbers ig-two">2</div>
            <h2>Productos</h2>
          </div>
        </section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Orden de compra</h1>
          <TextField
            type="datetime-local"
            {...register("date", {
              required: "Is required",
            })}
            id="date"
          />
          {errors.date?.type === "required" && <p>Es obligatorio el campo.</p>}
          <TextField
            label="Nombre del cliente"
            type="text"
            {...register("name", {
              required: true,
              maxLength: 40,
            })}
            id="name"
          />
          {errors.name?.type === "required" && <p>Es obligatorio el campo.</p>}
          <TextareaAutosize
            placeholder="Dirección"
            {...register("address", {
              required: true,
              maxLength: 300,
            })}
            maxRows={30}
            cols={50}
            id="direction"
          />
          {errors.direction?.type === "required" && (
            <p>Es obligatorio el campo.</p>
          )}
          <Button fullWidth type="submit" variant="contained" color="primary">
            Siguiente
          </Button>
        </form>
      </main>
    </>
  );
}
