let stream = require('stream');

class SocketWritable extends stream.Writable {
    constructor(options) {
        super(options);
        this.socket = options.socket;

    }
    _write(chunk, encoding, callback) {
        this.socket.emit(`socketWrite`, chunk, encoding)
        callback()
    }
}
module.exports = SocketWritable