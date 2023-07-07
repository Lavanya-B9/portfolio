import React from 'react';
import './ProjectStyles.css';

const ProjectsSection = () => {
  return (
    <div className='project-container'>
        <h1>My Projects</h1>
        <div className='project-content'>

        <div className='each-project'>
                <h3>Calculator Application</h3>
                <p>It is a simple calculator application. in this project we can perform arithmetic operations such as Addition, Subtraction, Multiplication and division.</p>
                <button className='btn-light'> <a href='https://github.com/Lavanya-B9/Calculatorapp'>Source Code</a></button>

               </div>
            <div className='each-project'>
                <h3>Todo Application </h3>
                
                <p>It is a simple todo management project with CRUD operations such as CREATE, READ, UPDATE, DELETE. in this project we can Add the todo, delete the todo and update the todo.</p>
                <button className='btn-light'> <a href='https://github.com/Lavanya-B9/Todo-Application'>Source Code</a></button>
               </div>   
                 <div className='each-project'>
                <h3>Drinks Search Application </h3>
                <p>It is a simple drinks search application using cocktail API data. in this project we can search the drinks and get 25 drinks for every search.</p>
                <button className='btn-light'> <a href='https://github.com/Lavanya-B9/CocktailAPIData'>Source Code</a></button>
            </div> 
            </div> 
        
            <div className='project-content'>         
            <div className='each-project'>
                <h3>College Website </h3>
                <p>It is a simple college responsive website using react-router-dom. it is as looks like as every website. we can navigate  from one component to another component.</p>
                <button className='btn-light'> <a href='https://github.com/Lavanya-B9/collegeapp'>Source Code</a></button>
                 </div>            
            <div className='each-project'>
                <h3>Travel Website </h3>
                <p>It is a simple travel responsive website using react-router-dom. it is as looks like as every website. we can navigate from one component to another component.</p>
                <button className='btn-light'> <a href='https://github.com/Lavanya-B9/TravelWebsite'>Source Code</a></button>
               </div>            
            <div className='each-project'>
                <h3>Form handling</h3>
                <p>It is a simple application form with all types of inputs like text,password,select,radio buttons and check boxes using bootstrap styling and error handling.</p>
                <button className='btn-light'> <a href='https://github.com/Lavanya-B9/ApplicationForm'>Source Code</a></button>
                
            </div>
        </div>
    </div>
  )
}

export default ProjectsSection