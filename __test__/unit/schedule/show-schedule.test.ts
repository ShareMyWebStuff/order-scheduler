import { showSchedule } from "../../../src/schedule/show-schedule";

describe( 'show-schedule', () => {

    test('should return taking a break for no customer array.', () => { 
        const schedule = showSchedule();
        expect(schedule).toEqual(['00:00 Take a break'])  
    })

    test('should return taking a break for an empty array.', () => { 
        const schedule = showSchedule([]);
        expect(schedule).toEqual(['00:00 Take a break'])  
    })

    test('should return required schedule if only one person is added.', () => { 
        const schedule = showSchedule(['Tim']);
        expect(schedule).toEqual(['00:00 Prepare sandwich for Tim',
            '01:00 Serve sandwich for Tim',
            '01:30 Take a break'
        ])  
    })

    test('should return required schedule for many customers.', () => { 
        const schedule = showSchedule(['Tim', 'Jon', 'Nick']);
        expect(schedule).toEqual(['00:00 Prepare sandwich for Tim',
            '01:00 Serve sandwich for Tim',
            "01:30 Prepare sandwich for Jon",
            "02:30 Serve sandwich for Jon",
            "03:00 Prepare sandwich for Nick",
            "04:00 Serve sandwich for Nick",
            "04:30 Take a break",
        ])  
    })


})