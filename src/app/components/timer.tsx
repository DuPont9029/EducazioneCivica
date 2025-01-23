"use client";

import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(60);

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearInterval(timerId);
        }
    }, [timeLeft]);

    return (
        <div style={{ fontSize: '2rem', textAlign: 'center' }}>
            {timeLeft} secondi rimanenti
        </div>
    );
};

export default Timer;