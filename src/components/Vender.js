import React from "react";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Navbar from "./Navbar";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: "10px",
  },
  nav: {
    position: "relative",
    backgroundColor: "#2e1534",
  },
  portada: {
    position: "relative",
    color: "white",
    marginBottom: 10,
    backgroundImage: "url(https://source.unsplash.com/bjej8BY1JYQ)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 500,
  },
  title: {
    padding: 10,
    margin: "auto",
    maxWidth: "100%",
    padding: "90px 30px",
    boxSizing: "borderbox",
    backgroundColor: "rgba(72,69,64,.5)",
    opacity: ".9",
    color: "white",
    cursor: "pointer",
    textAlign: "center",
  },
  icono: {
    padding: 10,
    textTransform: "none",
    textDecoration: "None",
    color: "#fff",
    fontSize: 22,
    marginRight: 10,
    "&:focus": {
      opacity: 1,
    },
  },
  subheading: {
    margin: 0,
    border: 0,
    fontSize: "100%",
    fontSize: "23px",
    verticalAlign: "baseline",
    padding: "10px",
    color: "#f6610c",
  },
  titulo: {
    fontSize: "20px",
    color: "#1976d2",
  },
  parrafo: {
    display: "block",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    fontSize: "15px",
    fontFamily: "Source Sans Pro",
    padding: "10px",
  },
  import: {
    color: "orange",
    display: "block",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    fontSize: "15px",
  },
  titulo: {
    padding: 10,
    color: "#1976d2",
  },
}));

export default function Vender() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.nav}>
        <Typography className={classes.padding} />
      </div>
      <header className={classes.portada}>
        <Navbar />
        <div className={classes.title}>
          <Typography variant="h2">¿Que necesito para vender?</Typography>
        </div>
      </header>
      <div className="about__info">
        <div className="row">
          <div className="col-3-of-4">
            <h2 className={classes.subheading}>Guia para vender</h2>
            <p className="about__paragraph">
              <h4 className={classes.parrafo}>
                Vender tu inmueble puede ser un gran desafío, en esta guía te
                contamos todo lo que tenés que saber desde que la propiedad está
                a la venta hasta que se efectúa la compra.
              </h4>
              <br />
              <div className={classes.titulo}>Índice</div>
              <li>La oferta</li>
              <li>La firma del boleto de compra-venta</li>
              <li>La escrituracion</li>
              <li>El pago</li>
            </p>
            <br />
            <div className={classes.titulo}>
              Elección de la inmobiliaria y tasación
            </div>
            <div className={classes.parrafo}>
              Para poder llevar adelante la venta del inmueble contar con una
              inmobiliaria puede beneficiar la operación desde muchos aspectos:
              por el conocimiento, el personal capacitado, la agilización de la
              venta, los contactos, la seguridad y la confianza. La inmobiliaria
              se encarga de llevar adelante el proceso de venta desde la
              tasación del inmueble hasta la efectivización de la compra. La
              tasación es un informe de valoración que realiza un tasador con el
              objetivo de establecer el valor de un inmueble a partir de
              determinados criterios establecidos previamente que se ponderan
              según considere el profesional. El proceso consiste en comparar
              atributos tales como la ubicación, la antigüedad, los ambientes,
              la luminosidad, la funcionalidad, los amenities, con los de otras
              propiedades que tengan las mismas cualidades. ¡Enterate el precio
              de tu propiedad acá! También, podés consultar el valor aproximado
              de tu propiedad a través de la siguiente herramienta de Zonaprop.
            </div>
            <div className={classes.titulo}>La oferta</div>
            <div className={classes.parrafo}>
              La inmobiliaria gestiona las visitas al inmueble y administra las
              ofertas recibidas que reflejan la voluntad de compra y funcionan a
              modo de reserva, las cuales el vendedor puede aceptar o rechazar.
              La oferta es una cantidad de dinero que se ofrece como reserva del
              inmueble. En caso de aceptar, el inmueble debe retirarse de la
              venta para seguir con los trámites correspondientes a la venta. En
              caso de que el futuro comprador se arrepienta, como vendedor
              deberás devolver el monto de dinero entregado.
            </div>
            <div className={classes.titulo}>
              La firma del boleto de compra-venta
            </div>
            <div className={classes.parrafo}>
              Una vez que ambas partes se comprometen a continuar con la
              operación, se firma el boleto de compra-venta. Se trata de un
              documento que refleja la promesa bilateral que te compromete a
              vender y al comprador a efectuar la compra, es decir, a proceder a
              la escrituración. Además, se deja un monto considerable como seña
              que suele ser el 25% del valor total del inmueble. En caso de
              arrepentimiento por parte del comprador, la seña se pierde; en
              caso contrario donde el que se arrepiente es el vendedor, éste
              deberá devolver el doble de la seña entregada. En el documento
              queda establecido el precio, la fecha o plazo de escrituración, la
              designación del escribano, la identificación del inmueble, los
              datos personales, los informes de inhibición y el dominio. Tené en
              cuenta que pueden pasar 30 días hasta la escrituración y que la
              instancia de la firma del boleto compra-venta no siempre se
              realiza, sino que muchas veces se lleva adelante la escrituración
              directa.
            </div>
            <div className={classes.titulo}>La escrituración</div>
            <div className={classes.parrafo}>
              Es el acto formal que establece la compra y venta de la propiedad
              donde la operación queda efectuada. Antes de la escrituración, el
              escribano se encarga de hacer un estudio y la revisión previa de
              títulos y aspectos jurídicos e impositivos para posteriormente
              inscribir al inmueble en el Registro de la Propiedad del Inmueble
              de la provincia a la que corresponda. La documentación que
              <div className={classes.titulo}>
                necesitás para poder escriturar es:{" "}
              </div>
              <li>
                El título de la propiedad original inscripto en el Registro de
                la Propiedad Inmueble
              </li>
              <li>Boleto de compra-venta, en caso de haberse firmado </li>
              <li>
                Fotocopias de DNI y la constancia de CUIL/CUIT del comprador,
                vendedor y sus convivientes o cónyuges cuando corresponda.
              </li>
              <div className={classes.import}>
                Importante: tené en cuenta que si alguno de los firmantes no
                concurriere a la firma de la escritura es necesario el poder
                original y con las facultades suficientes del mismo para el
                acto.
              </div>
              <li>La sentencia de divorcio en caso de corresponder.</li>
              <li>Las boletas de los impuestos, tasas y gravámenes</li>
              <br />
              <li>
                Informe de inhibición: un informe emitido por el Registro de la
                Propiedad del Inmueble que expone la situación actual del
                vendedor, si está inhibido o no para vender. El informe demora
                entre 2 y 5 días hábiles para inmuebles en CABA y 15 días
                aproximadamente para provincias.
              </li>
              <li>
                Informe de dominio: un informe también emitido por el Registro
                de la Propiedad del Inmueble que proporciona la titularidad del
                inmueble y demuestra si posee algún tipo de gravamen, es decir,
                corrobora si tiene hipotecas, embargos, si el inmueble está
                afectado al bien de familia, si levantó la inhibición o sólo fue
                para el efecto de la escritura.{" "}
              </li>
              <div className={classes.import}>
                También, es importante tener en cuenta:
              </div>
              <li>
                Certificado de no retención del Impuesto a la Transferencia de
                Inmueble (ITI): es un certificado que permite quedar exento del
                ITI, un impuesto nacional a la transferencia de inmueble que
                retiene el 1,5 % sobre el precio de venta para aquellos
                inmuebles que fueron adquiridos antes del 1 de enero del 2018 y
                que no están destinadas a casa-habitación, lo que significa que
                no tienen uso como vivienda única, familiar y de ocupación
                permanente.{" "}
              </li>
              <br />
              <div className={classes.titulo}>
                Si el vendedor hace uso de la exención del ITI porque a partir
                de la venta del inmueble va a comprar otra vivienda en el plazo
                de un año, deberá tramitar el certificado a través de la página
                de la AFIP.
              </div>
              <br />
              <li>
                El Impuesto a las Ganancias: establece que se debe tributar una
                alícuota, es decir, una cuota proporcional del 15% de la
                diferencia entre el valor de compra y el valor de venta del
                inmueble. No se grava sobre la propiedad que se utiliza para
                vivienda.
              </li>
              <li>
                El Impuesto de Sellos: un impuesto de alcance local, por lo
                tanto varía en cada provincia, en CABA es del 3,6 % y en GBA del
                2% sobre el precio del inmueble o el valor de referencia de
                inmuebles, el que sea mayor.{" "}
              </li>
              <li>
                El COTI (Código de Oferta y Transferencia de Inmuebles): es un
                deber informativo que debe ser obtenido por el propietario
                mediante la página web de AFIP previo a la escrituración,
                siempre que el valor del inmueble sea superior a $1.500.000.
              </li>
              <div className={classes.titulo}>
                En el caso de ser un inmueble afectado a la propiedad horizontal
                también es requisito contar con:
              </div>
              <br />
              <li>
                Una copia del reglamento de copropiedad y administración o del
                reglamento de propiedad horizontal
              </li>
              <li>Los datos de contacto de la administración del edificio</li>
              <li>El libre de deuda de expensas</li>
              <li>
                En algunos casos, el plano de afectación a propiedad horizontal
              </li>
              <br />
              <div className={classes.titulo}>
                Si el inmueble que se va a vender está ubicado en la provincia
                de Buenos Aires es necesario contar con:
              </div>
              <br />
              <li>
                El Estado Parcelario: un trámite para evaluar la superficie, la
                medición, delimitación y valuación de la superficie del terreno
                o el inmueble; para el cual es necesario contratar un agrimensor
                matriculado.
              </li>
              <li>
                Una fotocopia de un impuesto de ARBA, Impuesto Municipal y
                Aguas.
              </li>
              <div className={classes.parrafo}>
                En caso de haber recibido el inmueble por herencia: el escribano
                solicitará la Declaratoria de Herederos inscripta o se pondrá en
                contacto con el abogado que lleve la sucesión para inscribirla
                conjuntamente con la compraventa, por lo se conoce como “tracto
                abreviado”. Si el inmueble se recibió por donación solo necesita
                la escritura de donación.
              </div>
              <br />
              <div className={classes.titulo}>El pago</div>
              <div className={classes.parrafo}>
                Se realiza junto con la escrituración, donde queda asentada la
                entrega real y efectiva del inmueble. La división de gastos
                puede acordarse, pero, según usos y costumbres, los gastos que
                debés afrontar como vendedor de un inmueble son para demostrar
                ser el dueño, evidenciar la situación impositiva y jurídica del
                inmueble y realizar el estudio de títulos:
              </div>
              <br />
              <li>
                Honorarios de inmobiliaria, entre el 3% y el 4% sobre el precio
                de la venta.
              </li>
              <li>
                Impuesto de sellos, la mitad la abonás como vendedor y la otra
                mitad el comprador.
              </li>
              <li>El impuesto a la Transferencia de Inmuebles </li>
              <li>El Impuesto a las Ganancias </li>
              <div className={classes.parrafo}>
                Según cada provincia los costos de los certificados que se piden
                al Registro de la Propiedad Inmueble, los certificados para
                evaluar deudas y gravámenes, como así también las tasas locales,
                pueden variar.
              </div>
            </div>
            <div className="Compartir">Compartir</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
