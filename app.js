// --------------------------GLOBAL CONSTANTS-----------------------------------

const DAY = document.querySelector('#day-input');
const MONTH = document.querySelector('#month-input');
const YEAR = document.querySelector('#year-input');
const SUBMIT = document.querySelector('#submit-btn');

const emptyMessage = 'This field is required';
const dayMessage = 'Must be a valid day';
const monthMessage = 'Must be a valid month';
const yearMessage = 'Must be in the past';

const today = new Date();
const TODAY = {
    day: today.getDate(),
    month: 1 + today.getMonth(), //months indexed at 0
    year: today.getFullYear()
};

// --------------------------VALIDATION LOGIC-----------------------------------

// main form validator
const isFormValid = (day, month, year) => {
    if(
        day.error == 'none' && 
        month.error == 'none' && 
        year.error == 'none'
        ) return true;
    else return false;
}

// main input validator
const numRegEx = /^[0-9]+$/;
const isInputValid = (inputObj, digitQty, upperBound) => {
    inputObj.error = 'none';
    if(inputObj.value.length == 0) {
        inputObj.error = 'empty';
        return false;

    } else if(
        !numRegEx.test(inputObj.value) || 
        inputObj.num < 1 || 
        inputObj.num > upperBound || 
        inputObj.value.length != digitQty
        ) {
            inputObj.error = 'invalid';
            return false;

    } else return true;
}

// -----is day valid?-----
function validateDay() {
    let dayUpperBound = 31;
    if(MONTH.num) {
        if(YEAR.num) {
            dayUpperBound = setDayUpperBound(MONTH.num, YEAR.num);
        } else {
            dayUpperBound = setDayUpperBound(MONTH.num);
        }
    }
    DAY.num = parseInt(DAY.value);
    return isInputValid(DAY, 2, dayUpperBound);
    // console.log(`day error: ${DAY.error}, upper day limit: ${dayUpperBound}`)
};

// set day upper bound
const setDayUpperBound = (monthInputValue, yearInputValue) => {
    if(yearInputValue == TODAY.year && monthInputValue == TODAY.month) {
        return TODAY.day;
    } else {
        let monthIndex = monthInputValue - 1;
        generateDayMaximums(yearInputValue);
        return dayMaximums[monthIndex];
    }
}

// generate the array of how many days are in each month
const dayMaximums = [];
function generateDayMaximums(yearInput) {
    dayMaximums.length = 0;
    for(let i = 0; i < 12; i++) {
        if(i == 1) {
            dayMaximums.push(checkLeapYear(yearInput) ? 29 : 28);
            continue; //breaks the february iteration
        };

        if(i < 7) {
            i % 2 == 0 ? dayMaximums.push(31) : dayMaximums.push(30);
        } else if(i >= 7) {
            i % 2 == 0 ? dayMaximums.push(30) : dayMaximums.push(31);
        };
    }
}

// check if the year submitted is a leap year to determine february value in dayMaximums array
const checkLeapYear = (year) => {
    if(year % 4 == 0) {
        if(year % 100 == 0) {
            if(year % 400 == 0) {
                return true;
            } else return false;
        } else return true;
    } else return false;
}

// -----is month valid?-----
function validateMonth() {
    let monthUpperBound = 12;
    if(YEAR.num) { 
        monthUpperBound = setMonthUpperBound(YEAR.num);
    }
    MONTH.num = parseInt(MONTH.value);
    return isInputValid(MONTH, 2, monthUpperBound);
    // console.log(`month error: ${MONTH.error}, upper month limit: ${monthUpperBound}`)
};

// set month upper bound
const setMonthUpperBound = (yearInputValue) => {
    if(yearInputValue == TODAY.year) {
        return TODAY.month;
    } else return 12;
}

// -----is year valid?-----
function validateYear() {
    YEAR.num = parseInt(YEAR.value);
    return isInputValid(YEAR, 4, TODAY.year);
    // console.log(`year error: ${YEAR.error}`)
}

// -----validation event handlers-----
function handleInput() {
    validateDay();
    validateMonth();
    validateYear();
    console.log(validateDay(), validateMonth(), validateYear())
};

DAY.addEventListener('input', handleInput)
MONTH.addEventListener('input', handleInput)
YEAR.addEventListener('input', handleInput)

// --------------------------SUBMISSION LOGIC-----------------------------------












SUBMIT.addEventListener('click', (e) => {
    if(!isFormValid(DAY, MONTH, YEAR)) {
        e.preventDefault();
    } else return;
})