import React, { useState, useEffect } from 'react';

function HomePage({user}) {

    function updateData() {

    }

    useEffect(() => {   
        // Update first time
        updateData();

        // Setup interval to update constantly
        const interval = setInterval(updateData, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="HomePage">
            Home Page
            User: {user!=null? user.id : "null"} / {user!=null? user.name : "null"}
        </div>
    );
}

export default HomePage;
