import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../components/CryptoContext";
import axios from "axios";
import { SingleCoin } from "../config/api";
import CoinInfo from "./CoinInfo";
import { Box, Typography } from "@mui/material";
import { numberWithCommas } from "../components/Carousel";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  useEffect(() => {
    if (id) {
      fetchCoin();
    }
  }, [id]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: {
          xs: "center",
          md: "flex-start",
        },
        padding: { xs: 2, md: 4 },
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: {
            xs: "100%",
            md: "30%",
          },
          flexDirection: "column",
          alignItems: "center",
          marginTop: { xs: 5, md: 10 },
          borderRight: { xs: "none", md: "2px solid grey" },
          paddingRight: { md: 4 },
          paddingBottom: { xs: 4, md: 0 },
        }}
      >
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="160"
          style={{ marginBottom: 20 }}
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: 2,
            fontFamily: "Montserrat",
            textAlign: "center",
          }}
        >
          {coin?.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            width: "90%",
            fontFamily: "Montserrat",
            paddingX: 2,
            textAlign: "justify",
            color: "#ccc",
          }}
        >
          {coin?.description.en.split(". ")[0]}.
        </Typography>
        <Box sx={{ marginTop: 3, width: "90%" }}>
          <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
            <strong variant="h5">Rank:</strong>
            {numberWithCommas(coin?.market_cap_rank)}
          </Typography>

          <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
            <strong>Current Price:</strong> {symbol}
            {numberWithCommas(
              coin?.market_data.current_price[currency.toLowerCase()]
            )}
          </Typography>

          <Typography variant="subtitle1">
            <strong>Market Cap: </strong> {symbol}
            {numberWithCommas(
              coin?.market_data.market_cap[currency.toLowerCase()]
                .toString()
                .slice(0, -6)
            )}
            M
          </Typography>
        </Box>
      </Box>

      {/*Chart */}
      <CoinInfo coin={coin} />
    </Box>
  );
};

export default CoinPage;
