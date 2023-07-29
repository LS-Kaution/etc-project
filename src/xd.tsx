function xd() {
  return (
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Total</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Select
              defaultValue={{ label: "Selecciona", value: 0 }}
              options={products}
              onChange={(e) => setSelectedPrice(e?.value)}
            />
          </td>
          <td>
            <input
              type="number"
              name="cantidad"
              id="amount"
              min={1}
              max={100}
              value={quantity}
              onChange={handleQuantityChange}
            />
          </td>
          <td>${selectedPrice}</td>
          <td>
            <p>${total}</p>
          </td>
          <td className="b-delete">
            <button type="button" id="delete">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
