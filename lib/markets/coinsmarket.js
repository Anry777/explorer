var request = require('request');
 
var base_url = 'https://coinsmarkets.com/apicoin.php';
function get_summary(coin, exchange, cb) {
    var summary = {};
    request({ uri: base_url , json: true }, function (error, response, body) {
        if (error) {
            return cb(error, null);
        } else {
            var change = 0.0001;
            //console.log(body['BTC_ROI']['24htrade']);            
            summary['bid'] = parseFloat(body['BTC_ROI']['highestBid']).toFixed(8);
            summary['ask'] = parseFloat(body['BTC_ROI']['lowestAsk']).toFixed(8);
            summary['volume'] = parseFloat(body['BTC_ROI']['24htrade']).toFixed(8);
            summary['high'] = parseFloat(body['BTC_ROI']['high24hr']).toFixed(8);
            summary['low'] = parseFloat(body['BTC_ROI']['low24hr']).toFixed(8);
            summary['last'] = parseFloat(body['BTC_ROI']['last']).toFixed(8);
            summary['change'] = change ;
            
            return cb(null, summary);
        }
    });
}

function get_trades(coin, exchange, cb) {
    return cb(null, []);
}

function get_orders(coin, exchange, cb) {
    return cb(null, []);
}


module.exports = {
    get_data: function (coin, exchange, cb) {
        var error = null;
        get_summary(coin, exchange, function (err, stats) {
            if (err) { error = err; }
                return cb(error, { buys: [], sells: [], chartdata: [], trades: [], stats: stats });
         });

        //get_orders(coin, exchange, coinsmarket_id, function (err, buys, sells) {
        //    if (err) { error = err; }
        //    get_trades(coin, exchange, coinsmarket_id, function (err, trades) {
        //        if (err) { error = err; }
        //        get_summary(coin, exchange, coinsmarket_id, function (err, stats) {
        //            if (err) { error = err; }
        //            return cb(error, { buys: buys, sells: sells, chartdata: [], trades: trades, stats: stats });
        //        });
        //    });
        //});
    }
};

