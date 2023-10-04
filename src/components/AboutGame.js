import React from 'react';
import './AboutGame.css';

function AboutGame (){
    return(
    <div>
     <section id="about">
        <div className="container">
          <div class="about-iframe">
            <iframe src="https://www.youtube.com/embed/Rv7xLt5yNsM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
          </div>
          <div class="content">
            <h2>About Forza Horizon 5</h2>
            <p>Forza Horizon 5 is the latest installment in the Forza Horizon series developed by Playground Games. It takes players on an exhilarating journey to Mexico, offering a stunning open-world environment filled with diverse landscapes, vibrant cities, and breathtaking scenery. The game combines a thrilling racing experience with a deep sense of exploration and discovery.</p>
            <p>Embark on an exciting journey, complete engaging challenges, and unlock new cars, customization options, and rewards along the way. Immerse yourself in the vibrant world of Forza Horizon 5 and experience the ultimate driving adventure.</p>
          </div>
        </div>
     </section>

     <section id="gameplay">
      <div className="container">
        <div className='content'>
          <h2>Gameplay</h2>
          <p>
          In Forza Horizon 5, players can immerse themselves in a thrilling and diverse gameplay experience. The game offers a wide variety of races and events, catering to all types of racing enthusiasts. Whether you prefer high-speed circuit races, intense off-road adventures, or exhilarating street races, Forza Horizon 5 has something for everyone.
          </p>
          <p>
          One of the standout features of the game is the dynamic weather system and day-night cycle. As you navigate through the open-world map, you'll encounter realistic and ever-changing weather conditions, from sunny skies to torrential rainstorms. The day-night cycle adds another layer of immersion, as you race under the sun's blazing heat or navigate through the darkness of night. Adapt your racing strategies and skillset to conquer the challenges presented by these dynamic environments.
          </p>
          <p>
          Forza Horizon 5 also offers a cooperative multiplayer mode, allowing you to team up with your friends and explore the world together. Tackle challenging missions, compete in multiplayer races, or embark on thrilling cooperative adventures. The multiplayer mode adds a social element to the game, enabling you to connect and compete with players from around the world.
          </p>
          </div>
          <div className='gameplay-img'>
          <img src={require('../img/gameplayimg.jpg')} alt="Gameplay"/>
        </div>
      </div>
     </section>
  </div>)
}

export default AboutGame;