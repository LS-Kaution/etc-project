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
import { useStore } from "../Store";
import { Link } from "react-router-dom";

export default function Productos() {
  const { addProduct, products, getSubTotal, getTotal } = useStore()

  return (
    <>
      <main className="main productos">
        <section id="container">
          <div id="d-header">
            <h1>Seleccione sus productos</h1>
            <Button 
              variant="contained" 
              onClick={() => addProduct({ id: crypto.randomUUID() })}
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
                {products.map((product, i) => (
                  <Row key={i} id={product.id} />
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
            <Button variant="contained" id="back">
              Anterior
            </Button>
          </Link>
          <Button variant="contained">Guardar</Button>
        </div>
      </main>
    </>
  );
}
