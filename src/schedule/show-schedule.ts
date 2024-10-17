// Declare the timings for preparation  and serving
const SANDWICH_PREP_TIME = 60 * 1000;  // Prep time is in milliseconds for time addition
const SANDWICH_SERVE_TIME = 30 * 1000; // Serve time is in milliseconds for time addition


// Return type for showSchedule
type Schedule = string[]

/**
 * 
 * @param customers - an array of the customers. Default to empty array
 */
export const showSchedule = ( customers: string[] = []) => {
    
    // Declare the return type
    const schedule: Schedule = [];

    // Create the schedule time - default to midnight so the timings match the specification
    let scheduleTime = new Date()
    scheduleTime.setHours(0,0,0,0)

    // Loop through the customers to generate the schedule
    customers.forEach( customer => {

        // Add the preparation schedule and under the schedule time
        const prepStartTime = `${("0" + scheduleTime.getMinutes()).slice(-2)}:${("0" + scheduleTime.getSeconds()).slice(-2)}`
        schedule.push( `${prepStartTime} Prepare sandwich for ${customer}`)
        scheduleTime = new Date( scheduleTime.getTime() + SANDWICH_PREP_TIME )

        // Add the serve schedule
        const serveStartTime = `${("0" + scheduleTime.getMinutes()).slice(-2)}:${("0" + scheduleTime.getSeconds()).slice(-2)}`
        schedule.push( `${serveStartTime} Serve sandwich for ${customer}`)
        scheduleTime = new Date( scheduleTime.getTime() + SANDWICH_SERVE_TIME )

    })

    // Take a break if no customers or all orders have been fullfilled
    const serveStartTime = `${("0" + scheduleTime.getMinutes()).slice(-2)}:${("0" + scheduleTime.getSeconds()).slice(-2)}`
    schedule.push( `${serveStartTime} Take a break`)

    return schedule;
}