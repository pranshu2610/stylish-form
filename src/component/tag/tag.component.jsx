import React from 'react';
import './tag.styles.scss';

const Tag = ({response}) => (
    <div className='tag-box'>
        <p className={response==="" ? null : "warm"}>
            {response}
        </p>
    </div>
)
export default Tag;