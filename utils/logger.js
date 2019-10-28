let winston = require('winston');
require('dotenv').config();

// allows users to set the verbosity of logs
let setLogsLevel = process.env.LOGS_LEVEL || 'info';

// configure levels and colors
const logLevels_Config = {
    levels: {
        error: 0,
        debug: 1,
        warn: 2,
        success: 3,
        data: 4,
        info: 5,
        verbose: 6,
        silly: 7
    },
    colors: {
        error: 'red',
        debug: 'blue',
        warn: 'yellow',
        success: 'green',
        data: 'grey',
        info: 'cyan',
        verbose: 'white',
        silly: 'magenta'
    }
}

winston.addColors(logLevels_Config);

// configure winston for multiple output (console and logs files)
const logger = winston.createLogger({
    levels: logLevels_Config.levels,
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
          ),
        level: setLogsLevel
      }),
      new winston.transports.File({
        level: 'error',
        filename: './logs/error.log'
    })],
    exceptionHandlers: [
        new winston.transports.File({ filename: './logs/exceptions.log' })
      ]
  });

module.exports = logger;