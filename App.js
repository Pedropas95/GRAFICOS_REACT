import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import KPICards from "./components/KPICards";
import AttackPieChart from "./components/AttackPieChart";
import AttackLineChart from "./components/AttackLineChart";
import AttackHeatmap from "./components/AttackHeatmap";
import AttackMap from "./components/AttackMap";
import TopIPsChart from "./components/TopIPsChart";

function App() {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      {/* Título centrado y responsive */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        SIRP Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* KPIs siempre arriba, ancho completo */}
        <Grid item xs={12}>
          <KPICards />
        </Grid>

        {/* En móvil → 1 columna, en desktop → 2 columnas */}
        <Grid item xs={12} md={6}>
          <AttackPieChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <AttackLineChart />
        </Grid>

        {/* Heatmap ocupa todo el ancho */}
        <Grid item xs={12}>
          <AttackHeatmap  />
        </Grid>

        {/* Top IPs ocupa todo el ancho */}
        <Grid item xs={12}>
          <TopIPsChart />
        </Grid>

        {/* Mapa ocupa todo el ancho */}
        <Grid item xs={12}>
          <AttackMap />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
