import "../styles/Productos.scss";
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
import { type ChangeEvent, useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

const products = [
  { label: "Camisa 1", value: 30 },
  { label: "Camisa 2", value: 32 },
  { label: "Pantalón 1", value: 20 },
  { label: "Pantalón 2", value: 22 },
  { label: "Pantalón 3", value: 25 },
  { label: "Zapato 1", value: 21 },
  { label: "Zapato 2", value: 15 },
  { label: "Zapato 3", value: 23 },
];

function createData(
  select: any,
  amount: any,
  price: any,
  total: any,
  options: any
) {
  return { select, amount, price, total, options };
}

export default function Productos() {
  const [selectedPrice, setSelectedPrice] = useState<number>();
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity ?? 1);
  };

  const total = selectedPrice ? selectedPrice * quantity || 0 : 0;

  const subTotal = total ? total * 0.16 || 0 : 0;

  const totalFinal = subTotal ? total + subTotal || 0 : 0;

  const rows = [
    createData(
      <Select
        id="select"
        defaultValue={{ label: "Selecciona", value: 0 }}
        options={products}
        onChange={(e) => setSelectedPrice(e?.value)}
      />,
      <input
        type="number"
        name="cantidad"
        id="amount"
        min={1}
        max={100}
        value={quantity}
        onChange={handleQuantityChange}
      />,
      selectedPrice,
      total,
      <Button variant="contained" color="error">
        Eliminar
      </Button>
    ),
  ];

  return (
    <>
      <main className="main productos">
        <section id="container">
          <div id="d-header">
            <h1>Seleccione sus productos</h1>
            <Button variant="contained">Agregar</Button>
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
                {rows.map((row) => (
                  <TableRow>
                    <TableCell>{row.select}</TableCell>
                    <TableCell>{row.amount}</TableCell>
                    <TableCell>${row.price}</TableCell>
                    <TableCell>${row.total}</TableCell>
                    <TableCell>{row.options}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div id="d-total">
            <p>Subtotal: ${total}</p>
            <p>Total: ${totalFinal}</p>
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
