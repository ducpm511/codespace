import React from 'react';
import Link from 'next/link';

const YotubeSection = () => {
    return (
        <div className="student-choose-area fix pb-110">
         <div className="container">
            <div className="row">
            <iframe width="853" height="700" src="https://www.youtube.com/embed/dF88JzQhmBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
         </div>
      </div>
    );
};

export default YotubeSection;