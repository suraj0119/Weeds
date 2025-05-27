import logger from "@/utils/logger"

/**
 * Utility for monitoring and logging performance metrics
 */

// Interface for performance measurement
interface PerformanceMeasurement {
  name: string
  startTime: number
  endTime?: number
  duration?: number
}

// Store for active measurements
const activeMeasurements: Record<string, PerformanceMeasurement> = {}

/**
 * Start measuring performance for a named operation
 * @param name - Unique identifier for the measurement
 */
export function startMeasure(name: string): void {
  if (activeMeasurements[name]) {
    logger.warn(`Performance measurement "${name}" is already in progress`)
    return
  }

  activeMeasurements[name] = {
    name,
    startTime: performance.now(),
  }

  logger.debug(`Started performance measurement: ${name}`)
}

/**
 * End measuring performance for a named operation and log the result
 * @param name - Unique identifier for the measurement
 * @returns Duration in milliseconds, or undefined if measurement wasn't started
 */
export function endMeasure(name: string): number | undefined {
  const measurement = activeMeasurements[name]

  if (!measurement) {
    logger.warn(`No active performance measurement found for "${name}"`)
    return undefined
  }

  measurement.endTime = performance.now()
  measurement.duration = measurement.endTime - measurement.startTime

  logger.debug(`Performance measurement: ${name} took ${measurement.duration.toFixed(2)}ms`)

  // Clean up
  delete activeMeasurements[name]

  return measurement.duration
}

/**
 * Measure the execution time of a function
 * @param fn - Function to measure
 * @param name - Optional name for the measurement (defaults to function name)
 * @returns The result of the function
 */
export async function measureAsync<T>(fn: () => Promise<T>, name?: string): Promise<T> {
  const measureName = name || fn.name || "anonymous function"
  startMeasure(measureName)

  try {
    const result = await fn()
    endMeasure(measureName)
    return result
  } catch (error) {
    endMeasure(measureName)
    throw error
  }
}

/**
 * Measure the execution time of a synchronous function
 * @param fn - Function to measure
 * @param name - Optional name for the measurement (defaults to function name)
 * @returns The result of the function
 */
export function measure<T>(fn: () => T, name?: string): T {
  const measureName = name || fn.name || "anonymous function"
  startMeasure(measureName)

  try {
    const result = fn()
    endMeasure(measureName)
    return result
  } catch (error) {
    endMeasure(measureName)
    throw error
  }
}

// Export the performance utilities as a default object
const performance = {
  startMeasure,
  endMeasure,
  measure,
  measureAsync,
}

export default performance
