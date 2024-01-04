import React from 'react'

function HomeVideo() {
  return (
    
       <div
        class=" flex flex-col place-content-center self-center embed-responsive embed-responsive-16by9 relative  overflow-hidden  h-full bg-red-500 mt-5 rounded-md  "
        style={{ padding: "25.25%" }}>
      
        <iframe class="embed-responsive-item absolute  h-full w-full self-center px-40 bg-black" src="https://www.youtube.com/embed/o_75XMoovRU" title="Salames Campeones del Festival Nacional del Salame en Oncativo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" data-gtm-yt-inspected-2340190_699="true"
          id="240632615"></iframe>

      </div>
    
  )
}

export default HomeVideo
