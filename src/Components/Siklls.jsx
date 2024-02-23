import React from 'react'
import '../Style/SkillsStyle.css';


export default function Siklls() {
    return (
        <>
            <div class="contain" >
                <div id="SKILL" class="aside aside-2">

                    <h1 style={{color:'black'}}> SKILL</h1>


                    <div class="buttons">

                        <button class="neumorphic active">

                            <i class="fab fa-html5"></i>
                         

                        </button>


                        <button class="neumorphic active">
                            <i class="fab fa-css3-alt"></i>
                        
                        </button>

                        <button class="neumorphic active">
                        <i class="fab fa-react"></i>
                        
                        </button>

                        <button class="neumorphic active">
                            <i class="fab fa-js"></i>
                       
                        </button>

                        <button class="neumorphic active">
                            <i class="fab fa-java"></i>
                       
                        </button>



                        <button class="neumorphic active">
                            <img src={require('../imgs/sap.webp')} class="flag" />
                        
                        </button>
                        <button class="neumorphic active">
                            <i class=""><i class="fab fa-github"></i></i>
                           
                        </button>


                        <button class="neumorphic active">
                            <i class="fab fa-figma"></i>
                          

                        </button>

                        <button class="neumorphic active">
                            <h3 style={{color:'red'}}> Excal/ Word   </h3>
                        
                        </button>


                        <button class="neumorphic active">
                            <img src={require('../imgs/deutsch.png')} class="flag" />
                           
                        </button>
                        <button class="neumorphic active">
                            <img src={require('../imgs/Englisch.png')}class="flag" />
                        
                        </button>
                        <button class="neumorphic active">
                            <img src={require('../imgs/Arabisch.png')} class="flag" />
                           
                        </button>
                    </div>
                </div>
            </div>





        </>
    )
}
