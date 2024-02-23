import React from 'react';
import '../Style/Frontstyle.css'


function Front() {

  return (
    <>
        
      <div class="title">

      <img src={require('../imgs/my.jpeg')} className='imgs' />
      


     <div class='heading'>

<p class="awesome">Hey Im Hussein Alawassi</p>

</div>


        <main class="container">

          <section class="animation">

            <div class="first"><div>Frontend </div></div>
            <div class="second"><div>Web Developer</div></div>
            <div class="third"><div>business Informatics</div></div>

          </section>
        </main>

        <div class="smallsep "></div>
      </div>

    </>
  );
}

export default Front;
