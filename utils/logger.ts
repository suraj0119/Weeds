/**
 * Centralized logging utility for consistent logging across the application
 */

// Log levels
export enum LogLevel {
  DEBUG = "debug",
  INFO = "info",
  WARN = "warn",
  ERROR = "error",
}

// Environment check
const isDevelopment = process.env.NODE_ENV === "development"

/**
 * Log a message with the specified level
 * @param level - The log level
 * @param message - The message to log
 * @param data - Optional data to include in the log
 */
function log(level: LogLevel, message: string, data?: any): void {
  const timestamp = new Date().toISOString()
  const formattedMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`

  switch (level) {
    case LogLevel.DEBUG:
      if (isDevelopment) {
        console.debug(formattedMessage, data || "")
      }
      break
    case LogLevel.INFO:
      console.info(formattedMessage, data || "")
      break
    case LogLevel.WARN:
      console.warn(formattedMessage, data || "")
      break
    case LogLevel.ERROR:
      console.error(formattedMessage, data || "")
      // In a production app, you might want to send errors to a monitoring service
      // sendToMonitoringService(message, data)
      break
  }
}

/**
 * Log a debug message (only in development)
 */
export function debug(message: string, data?: any): void {
  log(LogLevel.DEBUG, message, data)
}

/**
 * Log an informational message
 */
export function info(message: string, data?: any): void {
  log(LogLevel.INFO, message, data)
}

/**
 * Log a warning message
 */
export function warn(message: string, data?: any): void {
  log(LogLevel.WARN, message, data)
}

/**
 * Log an error message
 */
export function error(message: string, data?: any): void {
  log(LogLevel.ERROR, message, data)
}

// Export the logger as a default object
const logger = {
  debug,
  info,
  warn,
  error,
}

export default logger
