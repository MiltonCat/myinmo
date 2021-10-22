import CardItem from "../components/CardItem";
let id = 1;

export default [
  <div>
    <ul>
      <CardItem
        id="departamento"
        src="./images/Cabaña/foto1.jpg"
        text="Excelente cabaña en el centro"
        label="Hermosa Cabaña"
        price="valor: 120.000 usd"
        path="/Prop1"
      />
      <CardItem
        id="baño"
        src="images/Caleuche/casaCa.jpeg"
        text="Casa en Barrio con Excelente vistas"
        label="Casa en Caleuche"
        price=" Valor: 135.000 usd"
        path="/Prop2"
      />
      <CardItem
        src="images/Curruhue/Photos/deptCu.jpg"
        text="En el centro de la ciudad podras encontrar este Departamento"
        label="Departameton nuevo y Centrico"
        price="Valor: 115.000 usd"
        path="/Prop3"
      />
    </ul>
    <ul className="cards__items">
      <CardItem
        src="./images/Rudecindo/foto1.jpeg"
        text="Departamento de 3 habitaciones"
        label="Departamento Centrico"
        price="Valor: 123.000 usd"
        path="/Prop4"
      />
      <CardItem
        src="./images/juan1.jpg"
        text="Publica aqui tu propiedad"
        label="Espacio para publicar"
        path="/Prop5"
      />
      <CardItem
        src="./images/juan.jpg"
        text="Publica aqui tu propiedad"
        label="Espacio para publicar "
        path="/Prop6"
      />
    </ul>
  </div>,
];
