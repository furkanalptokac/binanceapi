(async () => {
    const Binance = require("node-binance-api");
    require("dotenv").config();
    
    const binance = new Binance().options({
        APIKEY: process.env.APIKEY,
        APISECRET: process.env.APISECRET
    });

    const ticker = await binance.prices();
    
    console.info(await binance.futuresPrices());
    console.info(await binance.futuresMarkPrice("WAVESUSDT"));
    console.info(`Price of WAVES: ${ticker.WAVESUSDT}`);

    binance.balance((error, balances) => {
        if (error) {
            return console.error(error);
        }

        console.info("balances()", balances);
        console.info("WAVES balance: ", balances.WAVES.available);
    });

    binance.depositAddress("WAVES", (error, response) => {
        console.info(response);
    });

    binance.depositAddress("BTC", (error, response) => {
        console.info(response);
    });

    binance.depositAddress("ETH", (error, response) => {
        console.info(response);
    });

    binance.depositHistory((error, response) => {
        console.info(response);
    }, "WAVES");

    binance.depositHistory((error, response) => {
        console.info(response);
    }, "BTC");

    binance.depositHistory((error, response) => {
        console.info(response);
    }, "ETH");
})();