require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue off smooth fine birth pave pulp gesture battle fortune solar'; 
let testAccounts = [
"0xa8b9d3d864f0a8f525ccda735d0ccec6590c83fa1f50a2da4e8535ef65f0713c",
"0x0e7539dedc589e9fc3af1f6f855aec895220abde6e0529d5c78e8dda550fb786",
"0x40f96d89d6ba3243dc7622be6921cc140a04d94150ca3e16b6af8a17a70b42f9",
"0xab005d671630273b4158fccbf6530011d7d74c2a96284efd6b828f6b7ef9f6f2",
"0xc9523b11c5da051fa025d6dbd7d6ce8d85b2fa5cd34b05da84ba4675ee157d8c",
"0xcb27be48d966e76f7750e4ed64d4fcfa87a55ef61ff7358a1c77aaf5f31a078a",
"0xfec1ecebd11c2f878062c2eb55df3d84312ebe9318419bfd59a71b7fe293975f",
"0xa54d24d0e2d5dc586f73122c1463207b3838d6cb486870ecbd9df4520e6ebf2e",
"0xfa3992c676f2eea40ca66f4e7af47201c4d4508c2e8dd3285bf17ec0d913dfcc",
"0x15b35f7cca918c48cfc4a54763a89f4c82e08a653cd7cbdb1abf1654d4ebe258"
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
            version: '^0.5.11'
        }
    }
};
