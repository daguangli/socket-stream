let stream = require('stream');

class SocketReadable extends stream.Readable {
    constructor(options) {
        super(options);
        this.socket = options.socket;
        this.socket.on('socketWrite', this.writeBuffer.bind(this))
    }
    writeBuffer(data, encoding) {
        this.push(data, encoding)
    }
    _read(size) {

    }
}

module.exports = SocketReadable