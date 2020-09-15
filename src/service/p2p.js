import WebSocket from 'ws';

const { P2P_PORT = 5001, PEERS} = process.env;
const peers = PEERS ?  PEERS.split(',') : [];

class P2PService {
    constructor(blockchain) {
        this.blockchain = blockchain;
        this.sockets = [];
    }
    
    listen(){
        const server = new WebSocket.Server({port: P2P_PORT});
        server.on('connection', socket => this.onConnection(socket));

        peers.forEach(peer => {
            const socket = new WebSocket(peer);
            socket.on('open', () => this.onConnection(socket));
        })
        console.log(`Service sw:${P2P_PORT} listening...`);
    }

    onConnection(socket){
        console.log('[ws:socket] connected');
        this.sockets.push(socket);
    }
}

export default P2PService;