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
          <Typography variant="h2">??Que necesito para vender?</Typography>
        </div>
      </header>
      <div className="about__info">
        <div className="row">
          <div className="col-3-of-4">
            <h2 className={classes.subheading}>Guia para vender</h2>
            <p className="about__paragraph">
              <h4 className={classes.parrafo}>
                Vender tu inmueble puede ser un gran desaf??o, en esta gu??a te
                contamos todo lo que ten??s que saber desde que la propiedad est??
                a la venta hasta que se efect??a la compra.
              </h4>
              <br />
              <div className={classes.titulo}>??ndice</div>
              <li>La oferta</li>
              <li>La firma del boleto de compra-venta</li>
              <li>La escrituracion</li>
              <li>El pago</li>
            </p>
            <br />
            <div className={classes.titulo}>
              Elecci??n de la inmobiliaria y tasaci??n
            </div>
            <div className={classes.parrafo}>
              Para poder llevar adelante la venta del inmueble contar con una
              inmobiliaria puede beneficiar la operaci??n desde muchos aspectos:
              por el conocimiento, el personal capacitado, la agilizaci??n de la
              venta, los contactos, la seguridad y la confianza. La inmobiliaria
              se encarga de llevar adelante el proceso de venta desde la
              tasaci??n del inmueble hasta la efectivizaci??n de la compra. La
              tasaci??n es un informe de valoraci??n que realiza un tasador con el
              objetivo de establecer el valor de un inmueble a partir de
              determinados criterios establecidos previamente que se ponderan
              seg??n considere el profesional. El proceso consiste en comparar
              atributos tales como la ubicaci??n, la antig??edad, los ambientes,
              la luminosidad, la funcionalidad, los amenities, con los de otras
              propiedades que tengan las mismas cualidades. ??Enterate el precio
              de tu propiedad ac??! Tambi??n, pod??s consultar el valor aproximado
              de tu propiedad a trav??s de la siguiente herramienta de Zonaprop.
            </div>
            <div className={classes.titulo}>La oferta</div>
            <div className={classes.parrafo}>
              La inmobiliaria gestiona las visitas al inmueble y administra las
              ofertas recibidas que reflejan la voluntad de compra y funcionan a
              modo de reserva, las cuales el vendedor puede aceptar o rechazar.
              La oferta es una cantidad de dinero que se ofrece como reserva del
              inmueble. En caso de aceptar, el inmueble debe retirarse de la
              venta para seguir con los tr??mites correspondientes a la venta. En
              caso de que el futuro comprador se arrepienta, como vendedor
              deber??s devolver el monto de dinero entregado.
            </div>
            <div className={classes.titulo}>
              La firma del boleto de compra-venta
            </div>
            <div className={classes.parrafo}>
              Una vez que ambas partes se comprometen a continuar con la
              operaci??n, se firma el boleto de compra-venta. Se trata de un
              documento que refleja la promesa bilateral que te compromete a
              vender y al comprador a efectuar la compra, es decir, a proceder a
              la escrituraci??n. Adem??s, se deja un monto considerable como se??a
              que suele ser el 25% del valor total del inmueble. En caso de
              arrepentimiento por parte del comprador, la se??a se pierde; en
              caso contrario donde el que se arrepiente es el vendedor, ??ste
              deber?? devolver el doble de la se??a entregada. En el documento
              queda establecido el precio, la fecha o plazo de escrituraci??n, la
              designaci??n del escribano, la identificaci??n del inmueble, los
              datos personales, los informes de inhibici??n y el dominio. Ten?? en
              cuenta que pueden pasar 30 d??as hasta la escrituraci??n y que la
              instancia de la firma del boleto compra-venta no siempre se
              realiza, sino que muchas veces se lleva adelante la escrituraci??n
              directa.
            </div>
            <div className={classes.titulo}>La escrituraci??n</div>
            <div className={classes.parrafo}>
              Es el acto formal que establece la compra y venta de la propiedad
              donde la operaci??n queda efectuada. Antes de la escrituraci??n, el
              escribano se encarga de hacer un estudio y la revisi??n previa de
              t??tulos y aspectos jur??dicos e impositivos para posteriormente
              inscribir al inmueble en el Registro de la Propiedad del Inmueble
              de la provincia a la que corresponda. La documentaci??n que
              <div className={classes.titulo}>
                necesit??s para poder escriturar es:{" "}
              </div>
              <li>
                El t??tulo de la propiedad original inscripto en el Registro de
                la Propiedad Inmueble
              </li>
              <li>Boleto de compra-venta, en caso de haberse firmado </li>
              <li>
                Fotocopias de DNI y la constancia de CUIL/CUIT del comprador,
                vendedor y sus convivientes o c??nyuges cuando corresponda.
              </li>
              <div className={classes.import}>
                Importante: ten?? en cuenta que si alguno de los firmantes no
                concurriere a la firma de la escritura es necesario el poder
                original y con las facultades suficientes del mismo para el
                acto.
              </div>
              <li>La sentencia de divorcio en caso de corresponder.</li>
              <li>Las boletas de los impuestos, tasas y grav??menes</li>
              <br />
              <li>
                Informe de inhibici??n: un informe emitido por el Registro de la
                Propiedad del Inmueble que expone la situaci??n actual del
                vendedor, si est?? inhibido o no para vender. El informe demora
                entre 2 y 5 d??as h??biles para inmuebles en CABA y 15 d??as
                aproximadamente para provincias.
              </li>
              <li>
                Informe de dominio: un informe tambi??n emitido por el Registro
                de la Propiedad del Inmueble que proporciona la titularidad del
                inmueble y demuestra si posee alg??n tipo de gravamen, es decir,
                corrobora si tiene hipotecas, embargos, si el inmueble est??
                afectado al bien de familia, si levant?? la inhibici??n o s??lo fue
                para el efecto de la escritura.{" "}
              </li>
              <div className={classes.import}>
                Tambi??n, es importante tener en cuenta:
              </div>
              <li>
                Certificado de no retenci??n del Impuesto a la Transferencia de
                Inmueble (ITI): es un certificado que permite quedar exento del
                ITI, un impuesto nacional a la transferencia de inmueble que
                retiene el 1,5 % sobre el precio de venta para aquellos
                inmuebles que fueron adquiridos antes del 1 de enero del 2018 y
                que no est??n destinadas a casa-habitaci??n, lo que significa que
                no tienen uso como vivienda ??nica, familiar y de ocupaci??n
                permanente.{" "}
              </li>
              <br />
              <div className={classes.titulo}>
                Si el vendedor hace uso de la exenci??n del ITI porque a partir
                de la venta del inmueble va a comprar otra vivienda en el plazo
                de un a??o, deber?? tramitar el certificado a trav??s de la p??gina
                de la AFIP.
              </div>
              <br />
              <li>
                El Impuesto a las Ganancias: establece que se debe tributar una
                al??cuota, es decir, una cuota proporcional del 15% de la
                diferencia entre el valor de compra y el valor de venta del
                inmueble. No se grava sobre la propiedad que se utiliza para
                vivienda.
              </li>
              <li>
                El Impuesto de Sellos: un impuesto de alcance local, por lo
                tanto var??a en cada provincia, en CABA es del 3,6 % y en GBA del
                2% sobre el precio del inmueble o el valor de referencia de
                inmuebles, el que sea mayor.{" "}
              </li>
              <li>
                El COTI (C??digo de Oferta y Transferencia de Inmuebles): es un
                deber informativo que debe ser obtenido por el propietario
                mediante la p??gina web de AFIP previo a la escrituraci??n,
                siempre que el valor del inmueble sea superior a $1.500.000.
              </li>
              <div className={classes.titulo}>
                En el caso de ser un inmueble afectado a la propiedad horizontal
                tambi??n es requisito contar con:
              </div>
              <br />
              <li>
                Una copia del reglamento de copropiedad y administraci??n o del
                reglamento de propiedad horizontal
              </li>
              <li>Los datos de contacto de la administraci??n del edificio</li>
              <li>El libre de deuda de expensas</li>
              <li>
                En algunos casos, el plano de afectaci??n a propiedad horizontal
              </li>
              <br />
              <div className={classes.titulo}>
                Si el inmueble que se va a vender est?? ubicado en la provincia
                de Buenos Aires es necesario contar con:
              </div>
              <br />
              <li>
                El Estado Parcelario: un tr??mite para evaluar la superficie, la
                medici??n, delimitaci??n y valuaci??n de la superficie del terreno
                o el inmueble; para el cual es necesario contratar un agrimensor
                matriculado.
              </li>
              <li>
                Una fotocopia de un impuesto de ARBA, Impuesto Municipal y
                Aguas.
              </li>
              <div className={classes.parrafo}>
                En caso de haber recibido el inmueble por herencia: el escribano
                solicitar?? la Declaratoria de Herederos inscripta o se pondr?? en
                contacto con el abogado que lleve la sucesi??n para inscribirla
                conjuntamente con la compraventa, por lo se conoce como ???tracto
                abreviado???. Si el inmueble se recibi?? por donaci??n solo necesita
                la escritura de donaci??n.
              </div>
              <br />
              <div className={classes.titulo}>El pago</div>
              <div className={classes.parrafo}>
                Se realiza junto con la escrituraci??n, donde queda asentada la
                entrega real y efectiva del inmueble. La divisi??n de gastos
                puede acordarse, pero, seg??n usos y costumbres, los gastos que
                deb??s afrontar como vendedor de un inmueble son para demostrar
                ser el due??o, evidenciar la situaci??n impositiva y jur??dica del
                inmueble y realizar el estudio de t??tulos:
              </div>
              <br />
              <li>
                Honorarios de inmobiliaria, entre el 3% y el 4% sobre el precio
                de la venta.
              </li>
              <li>
                Impuesto de sellos, la mitad la abon??s como vendedor y la otra
                mitad el comprador.
              </li>
              <li>El impuesto a la Transferencia de Inmuebles </li>
              <li>El Impuesto a las Ganancias </li>
              <div className={classes.parrafo}>
                Seg??n cada provincia los costos de los certificados que se piden
                al Registro de la Propiedad Inmueble, los certificados para
                evaluar deudas y grav??menes, como as?? tambi??n las tasas locales,
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
