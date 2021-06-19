require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remain mistake inflict globe fortune spread'; 
let testAccounts = [
"0x188ff5facd4221fb32a8123331749baeb01dbbbd15f9808f39083e804e322617",
"0x11dee0aadab908cad85b76c90d3a21a5c7c71b27bce1a03e872a3da82ccdebb3",
"0x130aa8e4dd1377b3f2fa46f7d470a17be82edc788d0df4e0c1ad4839706222e5",
"0xcb9cb6b8248c4edb37cd8b4ecf31604de8a9060e47c57d40a3e2d45dafa4a668",
"0xb6315ca4e10c9eeb53c42abcf9274e9b1f4e691443680b3adb692a5686f96be7",
"0x2d3694b0c0ca31bf9d750ddccd74f63ec2bc16f6824d623d8ea53b8558c5353d",
"0x8e3847487968c9561ede5fd654759becc0dbe0e62558ece4207bc7bcded82140",
"0xc2dcb81362dc6dcb0f2dc07c2164d600ef09d96cb8ccf5d9eb69cb2294c25576",
"0x1d795814723aa6105830a610a1ce3acc07ed4297f4b830a52664e59f022e8669",
"0x878ea8e43f93445d8cfddb83b5e91304b0338f93bbe6a54f91e1fbb6ea17aca3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

