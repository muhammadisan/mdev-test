import pino from 'pino';
import path from 'path';
import fs from 'fs';

// Pastikan folder logs ada
const logDirectory = path.join(__dirname, '../logs');
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

// Konfigurasi Pino
const logger = pino({
  level: 'info',
  transport: {
    targets: [
      {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'SYS:dd-mm-yyyy HH:MM:ss',
          ignore: 'pid,hostname',
        },
      },
      {
        target: 'pino/file',
        options: {
          destination: path.join(logDirectory, 'error.log'),
          level: 'error',
        },
      },
    ],
  },
});

export default logger;