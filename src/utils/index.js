import { v4 as uuidv4 } from 'uuid';

import { dayOfWeekMap, NUMBER_OF_DAYS_TO_GENERATE_CLASSES, SEATS_AVAILABLE_MIN, SEATS_AVAILABLE_MAX } from '../config'

export const getKeyByValue = (value) => {
    return Object.keys(dayOfWeekMap).find(key => dayOfWeekMap[key] === value);
}

export function generateRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateClasses = (subject, dayOfWeek, startTime, endTime) => {
    const numberOfIteration = Math.round(NUMBER_OF_DAYS_TO_GENERATE_CLASSES / 7);
    const result = [];
    let nextClosestDate = null

    const newDate = new Date();
    const day = newDate.getDay();
    if (day === dayOfWeek) {
        nextClosestDate = newDate.getDate();
    } else {
        nextClosestDate = newDate.getDate() + 8 - day
    }


    for (let i = 0; i < numberOfIteration; i++) {
        const d = new Date();
        const classObj = {
            id: uuidv4(),
            name: subject,
            startDate: new Date(d.setDate(nextClosestDate + (i * 7))),
            startTime: startTime,
            endTime: endTime,
            booked: false
        }

        const randomInt = generateRandomNumber(SEATS_AVAILABLE_MIN, SEATS_AVAILABLE_MAX)

        if (randomInt < 7) {
            classObj.availableSeats = 0
        } else {
            classObj.availableSeats = randomInt;
        }

        result.push(classObj);
    }

    return result;
}