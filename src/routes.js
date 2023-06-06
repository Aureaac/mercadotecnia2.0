// import
import React, { Component }  from 'react';
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/EnProceso.js";
import Billing from "views/Dashboard/Billing.js";
import NuevaSolicitud from "views/Dashboard/NuevaSolicitud";
import Nueva from "views/Dashboard/addSolicitud.js";
import Historial from "views/Dashboard/Historial.js";
import Usuarios from "views/Dashboard/Usuarios.js";
import Ejecutivas from "views/Dashboard/Ejecutivas.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Inicio",
    icon: <HomeIcon color='inherit' />,
    component: Dashboard,
    props: 0,
    layout: "/admin",
  },
  {
    path: "/nueva",
    name: "Nueva Solicitud",
    icon: <DocumentIcon color='inherit' />,
    component: Nueva,
    props: 1,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "En proceso",
    icon: <StatsIcon  color='inherit' />,
    component: Tables,
    props: 0,
    layout: "/admin",
  },
  {
    path: "/historial",
    name: "Historial",
    icon: <CreditIcon color='inherit' />,
    component: Historial,
    props: 0,
    layout: "/admin",
  },
  {
    name: "Administrador",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/usuarios",
        name: "Usuarios",
        icon: <PersonIcon color='inherit' />,
        secondaryNavbar: true,
        component: Usuarios,
        props: 0,
        layout: "/admin",
      },
      {
        path: "/ejecutivas",
        name: "Ejecutivas",
        icon: <DocumentIcon color='inherit' />,
        component: Ejecutivas,
        props: 0,
        layout: "/admin",
      },

    ],
  },
];
export default dashRoutes;