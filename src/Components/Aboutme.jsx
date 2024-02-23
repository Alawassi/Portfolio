import React from 'react';
import '../Style/AboutmeStyle.css';


function Aboutme() {

  
    const onButtonClick = () => {

        
        const pdfUrl = "./pdf/lebenslauf.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "lebenslauf.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <div id='Aboutme'>
                <div class="container-about">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h2>About Me</h2>
                            <hr class="star-light" />
                        </div>
                    </div>
                    <div class="row">
                        <div>
                            <p class="content-text">
                                Hey there! I am a junior software developer
                                based in Magdeburg, Germany .
                                I am a committed student of business informatics.
                            </p>
                        </div>
                        <div >
                            <p class="content-text">
                                I work with some of the popular front end technologies to create beautiful websites that get noticed. I seek experience to gain more knowledge in the web development field.</p>
                        </div>

                    </div>


                </div>

                <hr class="star-light" />

                <button class="downlod" onClick={onButtonClick}>
                <i class="fa fa-download"></i> CV 
                </button>
                <hr class="star-light" />
            </div>


        </>

    );
}

export default Aboutme;

