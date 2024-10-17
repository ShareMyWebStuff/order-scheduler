import { showSchedule } from "./schedule/show-schedule";

const main = () => {

    // Show schedule if no customers
    console.log (showSchedule ());

    // Show schedule if one customer
    console.log (showSchedule (['Tim']));

    // Show schedule for example
    console.log (showSchedule (['Tim', 'Jon', 'Nick']));

}

main();