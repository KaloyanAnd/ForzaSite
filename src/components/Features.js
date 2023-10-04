import React from "react";
import './Features.css';

function Feature(){
    return(
    <section id="features">
    <h2>Features</h2>
    <div class="container">
      <div class="item">
        <div class="content">
          <h3>Expansive open-world map set in Mexico</h3>
          <p>Embark on a journey through Mexico's rich culture and history as you traverse through bustling city streets, picturesque coastal roads, dense rainforests, and expansive deserts. Discover hidden gems, hidden routes, and secret locations as you explore every nook and cranny of the open world.</p>
          <p>Immerse yourself in the vibrant atmosphere of Mexican festivals, with lively music, colorful decorations, and exciting events happening throughout the map. Engage with the local community, participate in races, and unlock new opportunities as you build your reputation as a racing superstar.</p>
          <p>With its attention to detail and stunning visuals, the open-world map truly captures the essence of Mexico, providing a captivating backdrop for your racing adventures.</p>
        </div>
        <div class="image">
          <img src={require('../img/HorizonMap.jpg')} alt="Open-world Map"/>
        </div>
      </div>
      <div class="item">
        <div class="image">
          <img src={require('../img/daynight.jpg')} alt="Dynamic Weather"/>
        </div>
        <div class="content">
        <h3>Dynamic weather system and day-night cycle</h3>
        <p>Immerse yourself in realistic driving conditions with a dynamic weather system and a day-night cycle. Adapt your racing strategies to changing environments.</p>
        <p>Experience the thrill of racing under different weather conditions, including sunny skies, torrential rain, thunderstorms, and even snowfall. Each weather condition affects the handling of your car, making every race a unique challenge.</p>
        <p>The day-night cycle adds another layer of realism and immersion to the game. Witness stunning sunrises and sunsets, race through the neon-lit streets of cities at night, and navigate through challenging courses in the darkness.</p>
        </div>
      </div>
      <div class="item">
        <div class="content">
          <h3>Wide variety of races and events</h3>
          <p>Experience the thrill of high-speed street races, where you'll compete against skilled opponents on urban circuits, dodging traffic and mastering tight corners. Feel the rush as you push your car to its limits and strive for victory.</p>
          <p>For off-road enthusiasts, there are exhilarating off-road races that will test your driving abilities on rugged terrains, including dirt tracks, sandy dunes, and muddy trails. Navigate through challenging obstacles, conquer steep inclines, and show off your off-road prowess.</p>
          <p>Additionally, there are specialized events such as time trials, drift challenges, stunt jumps, and more, offering unique gameplay experiences and opportunities to showcase your skills in specific disciplines.</p>
        </div>
        <div class="image">
          <img src={require('../img/diffraces.jpg')} alt="Races and events"/>
        </div>
      </div>
      <div class="item">
        <div class="image">
          <img src={require('../img/customcar.jpg')} alt="Customization"/>
        </div>
        <div class="content">
          <h3>Extensive car customization options</h3>
          <p>Unleash your creativity and make each car your own with extensive car customization options that allow you to personalize every aspect of your vehicle.</p>
          <p>From body kits and spoilers to paint colors and vinyl wraps, the customization options are virtually limitless. Express your unique style by transforming your car's appearance to match your personality and stand out on the streets.</p>
          <p>Upgrade your car's performance with a wide range of modifications, including engine tuning, suspension upgrades, exhaust systems, and more. Fine-tune your vehicle to suit your driving style and optimize its performance on different terrains and race tracks.</p>
        </div>
      </div>
      <div class="item">
        <div class="content">
          <h3>Cooperative multiplayer mode</h3>
          <p>Team up with friends or players from around the world in the cooperative multiplayer mode, and experience the thrill of racing together in a shared open-world environment.</p>
          <p>Collaborate with other players to tackle challenging races, events, and missions that require coordination and teamwork. Plan strategies, communicate effectively, and leverage each other's strengths to dominate the competition and achieve victory.</p>
          <p>Explore the vast open-world map together, discovering hidden secrets, engaging in spontaneous races, and challenging each other to impromptu competitions. The cooperative multiplayer mode allows you to create unforgettable moments with your friends as you embark on exhilarating adventures together.</p>
        </div>
        <div class="image">
          <img src={require('../img/multiplayer.jpg')} alt="Online mode"/>
        </div>
      </div>
      <div class="item">
        <div class="image">
          <img src={require('../img/photomode.jpg')} alt="Photomode"/>
        </div>
        <div class="content">
          <h3>Photo mode for capturing stunning moments</h3>
          <p>Unleash your creativity and capture breathtaking moments with the built-in photo mode in Forza Horizon 5. Take control of the camera and become the director of your own racing masterpiece.</p>
          <p>Whether you're exploring the picturesque landscapes, participating in thrilling races, or pulling off jaw-dropping stunts, the photo mode allows you to freeze time and immortalize those incredible moments in high-resolution snapshots.</p>
          <p>Customize your shots by adjusting camera angles, focal points, and depth of field to achieve the perfect composition. Experiment with different filters and effects to add a unique touch and enhance the atmosphere of your photos.</p>
        </div>
      </div>
      <div class="item">
        <div class="content">
          <h3>Exciting challenges and collectibles to discover</h3>
          <p>Forza Horizon 5 presents an array of captivating challenges that go beyond traditional races. Engage in daring stunt challenges, where you can perform gravity-defying jumps, drift around hairpin turns, and execute jaw-dropping maneuvers to impress the crowds and earn recognition.</p>
          <p>Explore the map to discover hidden collectibles scattered throughout the world. Hunt for elusive barn finds, uncovering abandoned vintage cars and restoring them to their former glory. Seek out secret locations, where legendary cars and unique customization options await your discovery.</p>
          <p>As you conquer challenges and collect rare items, you'll unlock new opportunities and expand your repertoire. Acquire powerful upgrades, unlock new cars, and customize your vehicles to make them truly one-of-a-kind.</p>
        </div>
        <div class="image">
          <img src={require('../img/collectable.jpg')}alt="Collectable"/>
        </div>
      </div>
      <div class="item">
        <div class="image">
          <img src={require('../img/storyline.jpg')}alt="Story Line"/>
        </div>
        <div class="content">
          <h3>Engaging storyline and character progression</h3>
          <p>Immerse yourself in a captivating narrative and experience character progression like never before in Forza Horizon 5. The game presents a rich and engaging storyline that adds depth and meaning to your racing adventures.</p>
          <p>As you progress through the game, your character evolves, gaining reputation, fame, and recognition among the Horizon community. Your achievements and actions shape the story, offering a sense of agency and personalization to your gameplay experience.</p>
          <p>Interact with a cast of intriguing characters, each with their own stories, motivations, and rivalries. Engage in meaningful conversations, make choices that impact the narrative, and forge alliances or rivalries with other racers. Your relationships and interactions with characters have consequences that can influence the course of the storyline.</p>
        </div>
      </div>
    </div>
    </section>
    )
}

export default Feature;