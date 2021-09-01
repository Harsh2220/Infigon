import React from 'react';
import './Home.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import image from './mobile.png';

function Home() {
    return (
        <div className="Home">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="text">
                            <h3 className="my-5">How we can Help</h3>
                            <p className="mb-4">Condimentum vel vestibulum, facilisi euismod id ornare fermentum ac. Bibendum turpis faucibus taucibus lectus cursus elementum. Suscipit mauris viverra pellentesque nisi, diam rhoncus vitae purus. Sed purus sed lectus.</p>
                            <div className="steps"><span className="step">STEP 1</span><span className="self">SELF ANALYSIS</span></div>
                            <div className="steps"><span className="step">STEP 2</span><span className="self">SELF ANALYSIS</span></div>
                            <div className="steps"><span className="step">STEP 3</span><span className="self">SELF ANALYSIS</span></div>
                            <div className="steps"><span className="step">STEP 4</span><span className="self">SELF ANALYSIS</span></div>
                        </div>
                    </div>
                    <div className="col-6 text-center">
                        <div className="image">
                            <img src={image}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home