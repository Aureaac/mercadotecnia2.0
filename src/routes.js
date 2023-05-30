// import
import React, { Component }  from 'react';
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Billing from "views/Dashboard/Billing.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";

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
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "Solicitudes",
    icon: <StatsIcon color='inherit' />,
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Historial",
    icon: <CreditIcon color='inherit' />,
    component: Tables,
    layout: "/admin",
  },
  {
    name: "Administrador",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Usuarios",
        icon: <PersonIcon color='inherit' />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Ejecutivas",
        icon: <DocumentIcon color='inherit' />,
        component: SignIn,
        layout: "/auth",
      },

    ],
  },
];
export default dashRoutes;
