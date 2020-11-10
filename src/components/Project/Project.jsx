////////////////////////////////////////////////////////////////////////////////
//
// Project.jsx
//
// This component renders an individual project.
//
////////////////////////////////////////////////////////////////////////////////


import React, { Fragment } from 'react';

import GitHubImage from '../../images/GitHub-Mark-Light-64px.png';




// This component renders an individual project.
//
function Project(props) {

    const projectImageHeight = '100';
    const projectImageWidth = '100';


    return(
        <Fragment>
            <div className='project'>
            <a href={ props.applicationUrl } target='_blank'
               rel='noopener noreferrer' >
                    <img src={ props.imageUrl }
                            height={ projectImageHeight }
                            witdh={ projectImageWidth }
                            alt={ props.altText } />
                </a>        
                <div>
                    <p>{ props.projectTitle }</p>
                    <p>{ props.projectSummary }</p>
                    <p>{ props.techStack }</p>                    
                    <div>
                        <div>
                            <a href={ props.gitHubUrl } 
                                target='_blank' rel='noopener noreferrer'>
                                <img src={GitHubImage} alt='GitHub' height='32' width='32'
                                     target='_blank' rel='noopener noreferrer'></img>
                            </a>
                        </div>
                     </div>
                </div>
            </div>
        </Fragment>
    );
}


export default Project;
