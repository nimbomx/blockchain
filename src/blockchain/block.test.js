import Block from './block';

describe('Block', () => {

    let timestamp;
    let previousBlock;
    let data;
    let hash;

    beforeEach(() => {
        timestamp = new Date('2020', 0, 1);
        previousBlock = Block.genesis;
        data = 'test data';
        hash = 'HCdata';

    });
    it('create an instance with parameters', () => {
        const block = new Block(timestamp, previousBlock.hash, hash, data);

        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);

    });

    it('use static mine', () => {
        const block = Block.mine(previousBlock,data);

        expect(block.hash.length).toEqual(64);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.data).toEqual(data);
    });

    it('use static hash', () => {
        hash = Block.hash(timestamp, previousBlock.hash ,data);
        const hashOutput = 'e9b77387f3064de0faa4a08157a78c91a10f2ba52b4d5ca2df431bedafc41e7c';
        expect(hash).toEqual(hashOutput);
    });

    it('use toString()', () => {
        const block = Block.mine(previousBlock,data);
        expect(typeof block.toString()). toEqual('string');
    });

});