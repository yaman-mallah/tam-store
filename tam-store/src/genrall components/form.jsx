import React from 'react'

import DropDown from './dropDown'
import MainButton from './mainButton';

const TamForm = ({ button, dropDown, space ,input}) => {
    return (
        <form  onSubmit={(e) => { e.preventDefault() }} className={`d-flex gap-${space} TamForm`}>
            <div className="d-flex w-100">
                <input type="text" className='flex-grow-1 TamInput' placeholder={input}/>
                {dropDown?<DropDown options={['cloth', 'tech', 'decore']} goal={'All category'}/>:null}
                
            </div>
            <MainButton text={button} borderRadius={'0'} />
        </form>
    );
};

export default TamForm;