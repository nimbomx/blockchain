import Blockchain from '../blockchain';
import validate from './validate';

describe('validate()', () => {
    let blockchain;

    beforeEach(() => {
        blockchain = new Blockchain();
    });

    it('validates a valid chain', () => {
        blockchain.addBlock('b10ck-1');
        blockchain.addBlock('b10ck-2');
        expect(validate(blockchain.blocks)).toBe(true);
    });
    it('invalidates a chain with a corrupt genesis block', () => {
        blockchain.blocks[0].data = 'Bad Data';

        expect(() => {
            validate(blockchain.blocks);
        }).toThrowError('Invalid genesis block');
    });
    it('invalidates a chain with a corrupt previousHash within a block', () => {
        blockchain.addBlock('b10ck-1');
        blockchain.blocks[1].previousHash = 'Hacked PreviousHash';

        expect(() => {
            validate(blockchain.blocks);
        }).toThrowError('Invalid previous hash');
    });
    it('invalidates a chain with a corrupt hash within a block', () => {
        blockchain.addBlock('b10ck-1');
        blockchain.blocks[1].hash = 'Hacked Hash';

        expect(() => {
            validate(blockchain.blocks);
        }).toThrowError('Invalid hash');
    });
});
