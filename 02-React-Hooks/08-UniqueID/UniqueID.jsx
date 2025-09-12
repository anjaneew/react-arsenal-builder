import { useId } from 'react';
/**useId 
 * a React Hook for generating unique IDs that can be passed to accessibility attributes.
 * 
 * Call useId at the top level of your component 
 * to generate a unique ID
 * returns a unique ID string 
 */

const UniqueID = () => {

    const id = useId();


    return(
        <>
        <div>
            <label htmlFor={`${id}-email`}>Email</label>
            <input type="email" id={`${id}-email`}/>
            <br />
            <label htmlFor={`${id}-name`}>Name</label>
            <input type="text" id={`${id}-name`}/>
        </div>
        </>
    );

};

export default UniqueID;
