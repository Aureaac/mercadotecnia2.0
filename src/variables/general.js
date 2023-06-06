// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar7 from "assets/img/avatars/avatar7.png";
import avatar8 from "assets/img/avatars/avatar8.png";
import avatar9 from "assets/img/avatars/avatar9.png";
import avatar10 from "assets/img/avatars/avatar10.png";
// Custom icons
import {
  AdobexdLogo,
  AtlassianLogo,
  InvisionLogo,
  JiraLogo,
  SlackLogo,
  SpotifyLogo,
} from "components/Icons/Icons.js";
import { AiOutlineExclamation } from "react-icons/ai";
import {
  FaArrowDown,
  FaArrowUp,
  FaBell,
  FaCreditCard,
  FaFilePdf,
  FaHtml5,
  FaShoppingCart,
} from "react-icons/fa";
import { SiDropbox } from "react-icons/si";

export var tablaProceso = [
  {
    folio: "EVENTO-001",
    sede: "Querétaro",
    solicitante: "James Blue",
    fecha_solicitud: "1 Jun 2023",
    fecha_entrega: "14 Jun 2023",
    detalles: 'EVENTO SEPTIEMBRE',
    progreso: 10,
    estatus: "Nueva",
    accion:""
  },
  {
    folio: "EVENTO-002",
    sede: "Querétaro",
    solicitante: "James Blue",
    fecha_solicitud: "1 Jun 2023",
    fecha_entrega: "14 Jun 2023",
  detalles: 'EVENTO SEPTIEMBRE',
    progreso: 16,
    estatus: "Nueva",
    accion:""
  },
  {
    folio: "EVENTO-003",
    sede: "Querétaro",
    solicitante: "James Blue",
    fecha_solicitud: "1 Jun 2023",
    fecha_entrega: "14 Jun 2023",
    detalles: 'EVENTO SEPTIEMBRE',
    progreso: 28,
    estatus: "Nueva",
    accion:""
  },
  {
    folio: "EVENTO-004",
    sede: "Querétaro",
    solicitante: "James Blue",
    fecha_solicitud: "1 Jun 2023",
    fecha_entrega: "14 Jun 2023",
    detalles: 'EVENTO SEPTIEMBRE',
    progreso: 30,
    estatus: "Nueva",
    accion:""
  },
  {
    folio: "EVENTO-005",
    sede: "Querétaro",
    solicitante: "James Blue",
    fecha_solicitud: "1 Jun 2023",
    fecha_entrega: "14 Jun 2023",
    detalles: 'EVENTO SEPTIEMBRE',
    progreso: 40,
    estatus: "Nueva",
    accion:""
  },
  {
    folio: "EVENTO-006",
    sede: "Querétaro",
    solicitante: "James Blue",
    fecha_solicitud: "1 Jun 2023",
    fecha_entrega: "14 Jun 2023",
    detalles: 'EVENTO SEPTIEMBRE',
    progreso: 50,
    estatus: "Nueva",
    accion:""
  },
];



export var tablaUsuarios = [
  {
    id: "001",
    nombre: "GRISELLE ALVAREZ HERNANDEZ	",
    correo: "especialista.merca5@ciudadmaderas.com",
    puesto: "Subdirección Merca",
    sede: "Tijuana",
    jefe_directo: "NA",
    estatus: 'Activa',
    accion:""
  },
  {
    id: "002",
    nombre: "NOHEMI DE LOS ANGELES CASTILLO	",
    correo: "asistente.gerencia.tij1@ciudadmaderas.com	",
    puesto: "Capturista",
    sede: "Tijuana",
    jefe_directo: "Francisco Borrajo",
    estatus: 'Activa',
    accion:""
  },
  {
    id: "003",
    nombre: "ANDREA HERNÁNDEZ RESÉNDIZ	",
    correo: "andrea.hernandez@fundacionlamat.com.mx	",
    puesto: "Dirección Área",
    sede: "Querétaro",
    jefe_directo: "NA",
    estatus: 'Activa',
    accion:""
  },
  {
    id: "004",
    nombre: "EMILIO CESAR FERNANDEZ VERA	",
    correo: "emilio.fernandez@ciudadmaderas.com	",
    puesto: "Subdirector Ventas	",
    sede: "León",
    jefe_directo: "RIGEL SILVA",
    estatus: 'Activa',
    accion:""
  },
  {
    id: "005",
    nombre: "ELOISA VELAZQUES MUÑOZ	",
    correo: "asistente.construccion@ciudadmaderas.com	",
    puesto: "Asistente Director",
    sede: "Querétaro",
    jefe_directo: "NA",
    estatus: 'Activa',
    accion:""
  },
  {
    id: "006",
    nombre: "VALERIA NICOLE GARCIA",
    correo: "especialista.merca12@ciudadmaderas.com",
    puesto: "Ejecutivo Mercadotecnia",
    sede: "Querétaro",
    jefe_directo: "NA",
    estatus: 'Activa',
    accion:""
  },
];


export var tablaEjecutivas = [
  {
    id_ejecutiva: "590",
    nombre: "PERLA IZAMAR CRUZ RAMIREZ",
    subdireccion: "QRO - DANIELA OLVERA ALEGRIA	",
    area: "Fundación, Nassca, Admon",
    sede: "Todas",
    accion:""
  },
  {
    id_ejecutiva: "596",
    nombre: "LUCERO ESTELA BARRON SERRANO",
    subdireccion: "SLP - MARIBEL ZAPATA CUELLAR		",
    area: "Ventas",
    sede: "SLP",
    accion:""
  },
  {
    id_ejecutiva: "530",
    nombre: "VICTOR MANUEL MUÑOZ MEDINA    ",
    subdireccion: "QRO - ESTEFANIA BASS		",
    area: "TI, Contabilidad, Construcción",
    sede: "QRO, CDMX, TIJ",
    accion:""
  },
  {
    id_ejecutiva: "210",
    nombre: "JUAN CARLOS PEDROZA DIAZ    ",
    subdireccion: "MTY - SAMANTA ABDUL OTERO		",
    area: "Todas",
    sede: "MTY, TIJ, TEX, HOU",
    accion:""
  },
  {
    id_ejecutiva: "980",
    nombre: "CYNTHIA RODRIGUEZ DUEÑAS    ",
    subdireccion: "PEN - MARISOL MENDOZA FLORES    ",
    area: "Ventas, Admon, Postventa",
    sede: "PEN, CAN",
    accion:""
  },
  {
    id_ejecutiva: "156",
    nombre: "NIDIA YANET PEÑA MORENO    ",
    subdireccion: "LEON - YURITZY PEÑA MORENO		",
    area: "Ventas",
    sede: "LEON",
    accion:""
  },
];


export const invoicesData = [
  {
    date: "March, 01, 2020",
    code: "#MS-415646",
    price: "$180",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "February, 10, 2020",
    code: "#RV-126749",
    price: "$250",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "April, 05, 2020",
    code: "#FB-212562",
    price: "$560",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "June, 25, 2019",
    code: "#QW-103578",
    price: "$120",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "March, 01, 2019",
    code: "#AR-803481",
    price: "$300",
    logo: FaFilePdf,
    format: "PDF",
  },
];

export const billingData = [
  {
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    number: "FRB1235476",
  },
  {
    name: "Lucas Harper",
    company: "Stone Tech Zone",
    email: "lucas@stone-tech.com",
    number: "FRB1235476",
  },
  {
    name: "Ethan James",
    company: "Fiber Notion",
    email: "ethan@fiber.com",
    number: "FRB1235476",
  },
];

export const newestTransactions = [
  {
    name: "Netflix",
    date: "27 March 2022, at 12:30 PM",
    price: "- $2,500",
    logo: FaArrowDown,
  },
  {
    name: "Apple",
    date: "27 March 2022, at 12:30 PM",
    price: "+ $2,500",
    logo: FaArrowUp,
  },
];

export const olderTransactions = [
  {
    name: "Stripe",
    date: "26 March 2022, at 13:45 PM",
    price: "+ $800",
    logo: FaArrowUp,
  },
  {
    name: "HubSpot",
    date: "26 March 2022, at 12:30 PM",
    price: "+ $1,700",
    logo: FaArrowUp,
  },
  {
    name: "Webflow",
    date: "26 March 2022, at 05:00 PM",
    price: "Pending",
    logo: AiOutlineExclamation,
  },
  {
    name: "Microsoft",
    date: "25 March 2022, at 16:30 PM",
    price: "- $987",
    logo: FaArrowDown,
  },
];

export const pageVisits = [
  {
    pageName: "/argon/",
    visitors: "4,569",
    uniqueUsers: 340,
    bounceRate: "46,53%"
  },
  {
    pageName: "/argon/index.html",
    visitors: "3,985",
    uniqueUsers: 319,
    bounceRate: "46,53%"
  },
  {
    pageName: "/argon/charts.html",
    visitors: "3,513",
    uniqueUsers: 294,
    bounceRate: "36,49%"
  },
  {
    pageName: "/argon/tables.html",
    visitors: "2,050",
    uniqueUsers: 147,
    bounceRate: "50,87%"
  },
  {
    pageName: "/argon/profile.html",
    visitors: "1,795",
    uniqueUsers: 190,
    bounceRate: "46,53%"
  },
]

export const socialTraffic = [
  {
    referral: "Facebook",
    visitors: "1,480",
    percentage: 60,
    color: "orange",
  },
  {
    referral: "Facebook",
    visitors: "5,480",
    percentage: 70,
    color: "orange",
  },
  {
    referral: "Google",
    visitors: "4,807",
    percentage: 80,
    color: "cyan",
  },
  {
    referral: "Instagram",
    visitors: "3,678",
    percentage: 75,
    color: "cyan",
  },
  {
    referral: "Twitter",
    visitors: "2,645",
    percentage: 30,
    color: "orange",
  }
]
