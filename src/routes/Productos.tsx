import "../styles/Productos.scss";
import Row from "../components/Table/Row";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
} from "@mui/material";
import { useOrderDetailStore, useOrderStore } from "../stores";
import { Link, useNavigate } from "react-router-dom";

export default function Productos() {
  const { addProduct, products, getSubTotal, getTotal, clearProducts } =
    useOrderDetailStore();
  const { updateOrder } = useOrderStore();
  const randomID = () => crypto.randomUUID();
  const navigate = useNavigate();

  const handleSaveOrder = () => {
    updateOrder({
      subTotal: getSubTotal(),
      total: getTotal(),
    });

    navigate("/");
    clearProducts();
  };

  return (
    <>
      <main className="main productos">
        <section id="p-status">
          <div className="status p">
            <div className="numbers p-one">1</div>
            <h2>Información general</h2>
          </div>
          <div id="line-p"></div>
          <div className="status p">
            <div className="numbers p-two">2</div>
            <h2>Productos</h2>
          </div>
        </section>
        <section id="container">
          <div id="d-header">
            <h1>Seleccione sus productos</h1>
            <Button
              variant="contained"
              onClick={() => addProduct({ id: randomID() })}
            >
              Agregar
            </Button>
          </div>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Producto</TableCell>
                  <TableCell>Cantidad</TableCell>
                  <TableCell>Precio</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Opciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <Row key={product.id} id={product.id} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div id="d-total">
            <p>Subtotal: ${getSubTotal()}</p>
            <p>Total: ${getTotal()}</p>
          </div>
        </section>

        <div id="d-buttons">
          <Link to="/" id="back">
            <Button type="button" variant="contained" id="back">
              Anterior
            </Button>
          </Link>
          <Button variant="contained" color="success" onClick={handleSaveOrder}>
            Guardar
          </Button>
        </div>
      </main>
    </>
  );
}
