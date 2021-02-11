import React from 'react'
import './GenericStyle.css'

export default class UnMounting extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
            <div className = "mainDiv">
                 <h2>UnMounting</h2>
                 <p>This is the final phase of the lifeycle of the component that is the phase of unmounting the component from the DOM. The following function is the sole member of this phase.</p>

                 <ul>
                    <li>componentWillUnmount()</li>                   
                </ul>

                <p>This function is invoked before the component is finally unmounted from the DOM i.e. this function gets invoked once before the component is removed from the page and this denotes the end of the lifecycle.</p>
            </div>

            <h4>Below Image will help You to understand Component LifeCycle</h4>
            <img src="https://assets.interviewbit.com/assets/skill_interview_questions/react/updating-abc4b4681d87ca1f6e4fafbb33858c9c044f72a0404068001b4d1eb021723a6d.png.gz"></img>
            <br></br>
            </>
        )
    }
}