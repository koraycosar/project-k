import React from "react";
import { Outlet } from "react-router-dom/dist";
import DashboardNavbar from "./DashboardNavbar";
import { Grid } from "@mui/material";

const Dahsboard = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <DashboardNavbar />
            </Grid>
            <Grid item xs={12}>
                <Outlet />
            </Grid>
        </Grid>
    );
};

export default Dahsboard;
