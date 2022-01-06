import React,{ useState, useEffect }  from 'react';
import { Link } from 'react-router-dom'

const Pagination = (props) => {
    const {} = props
        
    return (
    <>
        <div class="pre-page">
            <i class="fas fa-chevron-left"></i>
        </div>
        <div class="page">1</div>
        <div class="next-page">
            <i class="fas fa-chevron-right"></i>
        </div>
    </>
    );
};

export default Pagination;
