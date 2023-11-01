import React, { useEffect, useState } from "react";
import FilmAdd from '../components/dashboard/FilmView/FilmAdd';
import Sidebar from '../components/dashboard/Sidebar/Sidebar';

export const FilmsAdd = () => {
    const [isFlex, setIsFlex] = useState(window.innerWidth >= 992);

    useEffect(() => {
        const handleResize = () => {
            setIsFlex(window.innerWidth >= 992);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div style={isFlex ? { display: 'flex', gap: '3rem' } : {}}>
                <Sidebar />
                <div style={isFlex ? { flex: 1 } : {}}>
                    <FilmAdd />
                </div>
            </div>
        </>
    );
};
