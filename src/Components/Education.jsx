import React from 'react'
import '../Style/EducationStyle.css';

export default function Education() {

  return (

    <>
<div id='Education'></div>
      <div id="toast"></div>
      <div id="toast-cart"></div>


      <div class="contain">
        <div className='hed'> Education    </div>
        <hr />
        <br />
        <div class="row">

          <div class="card" style={{ width: '15rem' }}>

            <img src="https://cdn.pressebox.de/a/9d0e2480163b5e19/attachments/1318319.attachment/filename/otto-von-guericke-universitat-magdeburg-logo-png-transparent.png" style={{ width: '10rem' }} />
            <div class="card-body">
             
          

              <a href="https://www.ovgu.de/" onclick="addCart()">
                <center>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-binoculars" viewBox="0 0 16 16">
                    <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z" />
                  </svg>
                </center>
              </a>





              <hr />
              <center>
                <h5 class="card-title" style={{ color: 'red' }}>Otto-von-Guericke-Universität Magdeburg </h5>
              </center>
            </div>
          </div>


          <div class="card" style={{ width: '15rem' }}>

            <img style={{ width: '8.5rem' }} src="data:image/png;base64,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" class="first-image" />
            <div class="card-body">


              <a href="../pdf/lebenslauf" onclick="addCart()">
                <center>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-binoculars" viewBox="0 0 16 16">
                    <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z" />
                  </svg>
                </center>
              </a>



              <hr />
              <center>
                <h5 class="card-title">OVGU Winter school Online intensive cours on Google Cloud Skills Boost</h5>
              </center>
            </div>
          </div>


          <div class="card" style={{ width: '18rem' }}>

            <img src="https://studelp.com/wp-content/uploads/2022/01/Coursera-review-1024x740.webp" style={{ width: '10rem' }} class="first-image" />
            <div class="card-body">
              <a href="#" onclick="addCart()">
                <center>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-binoculars" viewBox="0 0 16 16">
                    <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z" />
                  </svg>
                </center>
              </a>
              <hr />
              <center>
                <h5 class="card-title">Coursera</h5>
              </center>
            </div>

          </div>
        </div>
      </div>


    </>
  )
}