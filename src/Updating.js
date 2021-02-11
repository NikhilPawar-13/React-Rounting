import React from 'react'
import './GenericStyle.css'

export default class Updating extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
            <div className = "mainDiv">
               <h2>Updating</h2>
               <p>The next phase in the lifecycle is when a component is updated.A component is updated whenever there is a change in the component's state or props.React has five built-in methods that gets called, in this order, when a component is updated:</p>

               <ul>
                    <li>getDerivedStateFromProps()</li>
                    <li>shouldComponentUpdate()</li>
                    <li>render()</li>
                    <li>getSnapshotBeforeUpdate()</li>
                    <li>componentDidUpdate()</li>
                </ul>

                <p>The render() method is required and will always be called, the others are optional and will be called if you define them.</p>
            
                <h3>getDerivedStateFromProps</h3>
                <p>Also at updates the getDerivedStateFromProps method is called. This is the first method that is called when a component gets updated.This is still the natural place to set the state object based on the initial props.</p>
                
                <h3>shouldComponentUpdate</h3>
                <p>By default, every state or props update re-render the page but this may not always be the desired outcome, sometimes it is desired that on updating the page will not be repainted. The shouldComponentUpdate() Function fulfills the requirement by letting React know whether the component’s output will be affected by the update or not. shouldComponentUpdate() is invoked before rendering an already mounted component when new props or state are being received. If returned false then the subsequent steps of rendering will not be carried out. This function can’t be used in case of forceUpdate(). The Function takes the new Props and new State as the arguments and returns whether to re-render or not.</p>
                <p>The default value is true.</p>

                <h3>render</h3>
                <p>The render() method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.</p>

                <h3>getSnapshotBeforeUpdate</h3>
                <p>In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.</p>

                <h3>componentDidUpdate</h3>
                <p> Similarly this function is invoked after the component is rerendered i.e. this function gets invoked once after the render() function is executed after the updation of State or Props.</p>
            </div>

            <h4>Below Image will help You to understand Component LifeCycle</h4>
            <img src="https://assets.interviewbit.com/assets/skill_interview_questions/react/updating-abc4b4681d87ca1f6e4fafbb33858c9c044f72a0404068001b4d1eb021723a6d.png.gz"></img>
            <br></br>

            </>
        )
    }
}