import { useState, useEffect } from "react";
import { 
  Button, 
  TableCell, 
  TableRow, 
  TextField, 
  Select, 
  MenuItem,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
import { useStore } from "../../Store";

const products = [
  { label: "Camisa 1", value: 30 },
  { label: "Camisa 2", value: 32 },
  { label: "Pantalón 1", value: 20 },
  { label: "Pantalón 2", value: 22 },
  { label: "Pantalón 3", value: 25 },
  { label: "Zapato 1", value: 21 },
  { label: "Zapato 2", value: 15 },
  { label: "Zapato 3", value: 23 },
]

export default function Row({ id }: { id: string }) {
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  const { updateProduct } = useStore()

  const handleSelectProduct = (e: SelectChangeEvent) => {
    setProductName(e.target.value);
    setProductPrice(products.find((product) => product.label === e.target.value)?.value || 0);
  }

  useEffect(() => {
    setTotal(productPrice * quantity);
  }, [productPrice, quantity]);

  useEffect(() => {
    updateProduct({
      id,
      name: productName,
      price: productPrice,
      quantity,
      total,
    });
  }, [id, productName, productPrice, quantity, total, updateProduct, print]);

  return (
    <TableRow>
      <TableCell>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>Selecciona</InputLabel>
        <Select
          value={productName}
          onChange={(e) => handleSelectProduct(e)}
          label="Selecciona"
        >
          {products.map((product) => (
            <MenuItem key={product.label} value={product.label}>
              {product.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </TableCell>
      <TableCell>
        <TextField
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </TableCell>
      <TableCell>${productPrice}</TableCell>
      <TableCell>${total}</TableCell>
      <TableCell>
        <Button variant="contained" color="error">
          Eliminar
        </Button>
      </TableCell>
    </TableRow>
  )
}