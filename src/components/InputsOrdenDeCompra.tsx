type Props = {
  className: string;
  htmlFor: string;
  description: string;
  id: string;
  name: string;
  type: string;
};

export default function InputsOrdenDeCompra(props: Props) {
  return (
    <>
      <div className={props.className}>
        <label htmlFor={props.htmlFor}>{props.description}</label>
        <input id={props.id} name={props.name} type={props.type} required />
      </div>
    </>
  );
}
