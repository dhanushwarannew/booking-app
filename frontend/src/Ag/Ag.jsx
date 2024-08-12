import React from 'react';
import '../Temple/Temple.css'; // Import a CSS file for styling
import aguada from '../image/Aguada_fort.avif'; // Ensure this path is correct
import { Link } from 'react-router-dom';

const Ag = () => {
  return (
    <div className="explore-container">
      <header>
        <h1>Explore the Aguada Fort, Goa</h1>
      </header>
      
      <article className="introduction">
        <img 
          src={aguada} 
          alt="Aguada Fort" 
          className="main-image" 
          width={300} 
          height={200} 
        />
        <p>
          Fort Aguada is a well-preserved 17th-century Portuguese fort located on the Sinquerim Beach in Goa, India. It was constructed in 1612 to guard against Dutch and Maratha invasions and served as a reference point for ships coming from Europe at that time.
        </p>
      </article>
      
      <article className="beauty">
        <h2>Architectural Beauty</h2>
        <p>
          The fort is renowned for its imposing structure, which includes a lighthouse and a massive water reservoir. The four-storey Portuguese lighthouse, erected in 1864 and the oldest of its kind in Asia, is a major highlight. The fort's architecture represents the strategic military designs of the Portuguese colonial period.
        </p>
      </article>
      
      <article className="importance">
        <h2>Historical and Cultural Importance</h2>
        <p>
          Fort Aguada holds great historical significance as it was the primary defense of the Portuguese against the Dutch and Marathas. It also served as a crucial point for replenishing water supplies to ships, thanks to its large freshwater spring. The fort's name, 'Aguada', is derived from the Portuguese word for water.
        </p>
        <p>
          Today, Fort Aguada is a popular tourist attraction, offering panoramic views of the Arabian Sea and the surrounding landscape. It stands as a testament to Goa's rich colonial history and architectural heritage.
        </p>
      </article>
      
      <article className="visitor-info">
        <h2>Visitor Information</h2>
        <p><strong>Location:</strong> Aguada-Siolim Road, Sinquerim, Bardez, Goa, India</p>
        <p><strong>Opening Hours:</strong> 9:30 AM to 6:00 PM, open all days</p>
        <p><strong>Best Time to Visit:</strong> November to February, to enjoy the pleasant weather</p>
      </article>
      
      <footer><center>
        <Link to='/' className="a2">
          <h3 className="t1">Back to Home</h3>
        </Link></center>
      </footer>
    </div>
  );
};

export default Ag;
