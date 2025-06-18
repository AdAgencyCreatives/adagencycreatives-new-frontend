'use client';

import moment from 'moment';

// Key for localStorage

// Save value with expiration time (24 hours from now)
export const storeValue = (key, value, expiration = null) => {
    const _expiration = expiration || moment().add(24, 'hours').toISOString(); // Set expiration 24 hours from now
    localStorage.setItem(key, value);
    localStorage.setItem(`${key}_expiration`, _expiration);
};

// Get value if it's still valid
export const readValue = (key) => {
    const value = localStorage.getItem(key);
    const expiration = localStorage.getItem(`${key}_expiration`);

    if (!value || !expiration) {
        return null; // No value or expiration found
    }

    // Check if the value is still valid
    if (moment().isBefore(moment(expiration))) {
        return value; // Value is valid
    } else {
        // Value has expired, clear it from localStorage
        clearValue();
        return null;
    }
};

// Clear value and expiration from localStorage
export const clearValue = (key) => {
    localStorage.removeItem(key);
    localStorage.removeItem(`${key}_expiration`);
};