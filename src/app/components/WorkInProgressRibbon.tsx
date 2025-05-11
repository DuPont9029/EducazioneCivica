import React from 'react';

const WorkInProgressRibbon = () => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            {/* Nastro diagonale 1 con strisce gialle e nere */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '200%',
                height: '20px',
                backgroundImage: 'linear-gradient(45deg, yellow 25%, black 25%, black 50%, yellow 50%, yellow 75%, black 75%)',
                backgroundSize: '40px 40px',
                transform: 'rotate(45deg)',
                transformOrigin: 'top left',
                zIndex: 1000,
            }} />
            {/* Nastro diagonale 2 con strisce gialle e nere */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '200%',
                height: '20px',
                backgroundImage: 'linear-gradient(45deg, yellow 25%, black 25%, black 50%, yellow 50%, yellow 75%, black 75%)',
                backgroundSize: '40px 40px',
                transform: 'rotate(-45deg)',
                transformOrigin: 'top right',
                zIndex: 1000,
            }} />
            {/* Testo centrale */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontSize: '24px',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                zIndex: 1001,
            }}>
                Work in Progress
            </div>
        </div>
    );
};

export default WorkInProgressRibbon;