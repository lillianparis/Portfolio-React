import React from 'react';
import PDF from './NewResume2.pdf';



const Resume = () => {
    return (
        <>
        <iframe src={PDF} height="1000" width="1300" ></iframe>
        </>
        );
    };
    
    export default Resume;