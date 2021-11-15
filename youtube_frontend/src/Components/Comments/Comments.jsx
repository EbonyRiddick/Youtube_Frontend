import React, { useState } from 'react';
import useFormOne from '../useFormOne/useFormOne';

const Comments = (props) => {

    const {formValues, handleChange, handleSubmit} = useFormOne(props.postComments);

    return (
        <div>
            {props.comments}
            <form onSubmit={handleSubmit}>
            <table>
                <th>Comments</th>
                <tbody>
                {props.comments}
                    {/* {props.postComments.map(function(comment){
                        return (
                            <tr>
                                <td>{comment.comment}</td>
                            </tr>
                        )
                    })} */}
                </tbody>
            </table>
            <input type="text"/>
            <button type="submit">Submit Comment</button>
            </form>
        </div>
    )
}
 
export default Comments;