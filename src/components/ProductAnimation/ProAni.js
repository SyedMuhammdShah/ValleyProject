import * as React from 'react';
import './ProAni.css';
import img2 from "../images/2.jpg";
import img3 from "../images/3.png";
import img4 from "../images/4.jpg";
<link href="https://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css"></link>

export default function BasicGrid() {
  return (
    <>
<div className='mainDiv'>
<figure class="snip1104 red">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample33.jpg" alt="sample33" />
  <figcaption>
    <h2>Jean  <span> Myers</span></h2>
  </figcaption>
  <a href="#"></a>
</figure>

<figure class="snip1104"><img src={img3} alt="Logo" className="tradImage" />
  <figcaption>
    <h2>Tracy <span> Logan</span></h2>
  </figcaption>
  <a href="#"></a>
</figure>
<figure class="snip1104"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample35.jpg" alt="sample35" />
  <figcaption>
    <h2>Tracy <span> Logan</span></h2>
  </figcaption>
  <a href="#"></a>
</figure>
</div>

    </>
    
  );
}
