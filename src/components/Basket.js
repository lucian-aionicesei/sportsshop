export default function Basket(props) {

  const initialValue = 0;
  const sumWithInitial = props.basket.reduce(
    (previousValue, currentObject) => previousValue + currentObject.price,
    initialValue
  );

  return (
    <div>
      <ul>
        {props.basket.map((item) => {
          return (
            <li>
              {item.productdisplayname} ${item.price}
            </li>
          );
        })}
      </ul>
      <p>Total: ${sumWithInitial}</p>
    </div>
  );
}
