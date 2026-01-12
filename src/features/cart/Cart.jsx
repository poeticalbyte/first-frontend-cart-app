import { useNavigate } from "react-router-dom";

export const Cart = ({ total, handlerDelete, items }) => { 

  const navigate = useNavigate();
  
  const onDeleteProduct = (id) => {
    handlerDelete(id);
    navigate('/catalog');
  };

  const onCatalog = () => {
    navigate('/catalog');
  };

  return (
    <>
      <table className="table table-hover table-striped text-center">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          { items.map( item => (
          
          <tr key={item.product.id}>
            <td className="text-start">{item.product.name}</td>
            <td>$ {item.product.price}</td>
            <td>{item.quantity}</td>
            <td>$ {item.quantity * item.product.price}</td>
            <td>
              <button
                className="btn btn-danger" 
                onClick={ () => onDeleteProduct(item.product.id) }>x</button>
            </td>
          </tr>

          )) }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="text-end fw-bold">Total</td>
            <td colSpan={2} className="text-start fw-bold">$ {total}</td>
          </tr>
        </tfoot>
      </table>
      <button
        className="btn btn-success"
        onClick={onCatalog}>Seguir comprando...
      </button>
    </>
  );
}
