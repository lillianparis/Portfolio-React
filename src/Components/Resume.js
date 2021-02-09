import React from 'react';
import PDF from './NewResume2.pdf';



const Resume = () => {
    return (
        <>
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        <iframe src={PDF} height="1000" width="1300" ></iframe>
        </>
        );
    };
    
    export default Resume;