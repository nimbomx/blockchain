import PKG from './package.json';
import Block from './src/blockchain/block';

const { name, version } = PKG;

console.log(`${name} v${version}`);

const block = new Block(Date.now(), 'pr3v10us-h4Sh', 'h4Sh', 'd4t4');
console.log(block.toString());
