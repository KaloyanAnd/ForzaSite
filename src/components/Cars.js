import React from "react";
import './Cars.css';

function Cars(){
    return(
        <section id="cars">
    <h2>Cars</h2>
    
    <div class="car-container">
      <div class="car" data-manufacturer="Ford">
        <a href="https://forza.fandom.com/wiki/Ford_Focus_RS_(2009)" target="_blank" rel="noopener noreferrer">
        <img src={require('../img/FordFocusRS2009.jpg')} alt="Ford"/>
        </a>
        <h3>Ford Focus</h3>
      </div>
      <div class="car" data-manufacturer="Mazda">
        <a href="https://forza.fandom.com/wiki/Mazda_MX-5_Miata_(1994)" target="_blank" rel="noopener noreferrer">
        <img src={require('../img/MazdaMiata.jpg')} alt="Mazda"/>
        </a>
        <h3>Mazda MX-5 Miata</h3>
      </div>
      <div class="car" data-manufacturer="Mitsubishi">
        <a href="https://forza.fandom.com/wiki/Mitsubishi_Galant_VR-4" target="_blank" rel="noopener noreferrer">
        <img src={require('../img/MitsubishiGalantVR-4.jpg')} alt="Mitsubishi"/>
        </a>
        <h3>Mitsubishi Galant VR-4</h3>
      </div>
      <div class="car" data-manufacturer="Volvo">
        <a href="https://forza.fandom.com/wiki/Volvo_242_Turbo_Evolution" target="_blank" rel="noopener noreferrer">
        <img src={require('../img/Volvo242.jpg')} alt="Volvo"/>
        </a>
        <h3>Volvo 242 Turbo</h3>
      </div>
      <div class="car" data-manufacturer="Volkswagen">
        <a href="https://forza.fandom.com/wiki/Volkswagen_Golf_R_(2014)" target="_blank" rel="noopener noreferrer">
        <img src={require('../img/GolfR2014.jpg')} alt="Volkswagen"/>
        </a>
        <h3>Volkswagen Golf R</h3>
      </div>
      <div class="car" data-manufacturer="Ford">
        <a href="https://forza.fandom.com/wiki/Ford_GT_(2005)" target="_blank" rel="noopener noreferrer">
        <img src={require('../img/FordGT.jpg')} alt="Ford"/>
        </a>
        <h3>Ford GT</h3>
      </div>
      <div class="car" data-manufacturer="Audi">
        <a href="https://forza.fandom.com/wiki/Audi_2_Audi_Sport_quattro_S1" target="_blank" rel="noopener noreferrer">
        <img src={require('../img/Audiquattro.jpg')} alt="Audi"/>
        </a>
        <h3>Audi Sport Quattro S1</h3>
      </div>
      <div class="car" data-manufacturer="Shelby">
        <a href="https://forza.fandom.com/wiki/Shelby_Cobra_Daytona_Coup%C3%A9" target="_blank" rel="noopener noreferrer">
        <img src={require('../img/ShelbyDaytona.jpg')} alt="Shelby"/>
        </a>
        <h3>Shelby Cobra Daytona Coupé</h3>
      </div>
      <div class="car" data-manufacturer="Mercedes-Benz">
        <a href="https://forza.fandom.com/wiki/Mercedes-Benz_Super_Sport_Kurz_Barker_Roadster" target="_blank" rel="noopener noreferrer">
        <img src={require('../img/MBSuperSport.jpg')} alt="M-B"/>
        </a>
        <h3>Mercedes-Benz Super Sport Roadster</h3>
      </div>
      <div class="car" data-manufacturer="BMW">
        <a href="https://forza.fandom.com/wiki/BMW_M3_(1991)" target="_blank" rel="noopener noreferrer">
        <img src={require('../img/BMWM31991.jpg')} alt="BMW"/>
        </a>
        <h3>BMW M3 (1991)</h3>
      </div>
      <div class="car" data-manufacturer="BMW">
        <a href="https://forza.fandom.com/wiki/BMW_M3_(2008)" target="_blank" rel="noopener noreferrer">
        <img src={require('../img/BMWM32008.jpg')} alt="BMW"/>
        </a>
        <h3>BMW M3 (2008)</h3>
      </div>
      <div class="car" data-manufacturer="BMW">
        <a href="https://forza.fandom.com/wiki/BMW_M1" target="_blank" rel="noopener noreferrer">
        <img src={require('../img/BMWM1.jpg')} alt="BMW"/>
        </a>
        <h3>BMW M1</h3>
      </div>
      <div class="car" data-manufacturer="BMW">
        <a href="https://forza.fandom.com/wiki/BMW_M8_Competition_Coupe" target="_blank" rel="noopener noreferrer"> 
        <img src={require('../img/BMWM8.jpg')} alt="BMW"/>
        </a>
        <h3>BMW M8 Competition Coupe</h3>
      </div>
      <div class="car" data-manufacturer="Audi">
        <a href="https://forza.fandom.com/wiki/Audi_R8_Coup%C3%A9_V10_plus_5.2_FSI_quattro" target="_blank" rel="noopener noreferrer">
        <img src={require('../img/AudiR8Coupe.jpg')} alt="Audi"/>
        </a>
        <h3>Audi R8 Coupe</h3>
      </div>
      <div class="car" data-manufacturer="Audi">
        <a href="https://forza.fandom.com/wiki/Audi_RS_2_Avant" target="_blank" rel="noopener noreferrer"> 
        <img src={require('../img/AudiRS2.jpg')} alt="Audi"/>
        </a>
        <h3>Audi RS2</h3>
      </div>
      <div class="car" data-manufacturer="Audi">
        <a href="https://forza.fandom.com/wiki/Audi_TT_RS_Coup%C3%A9" target="_blank" rel="noopener noreferrer">
        <img src={require('../img/AudiTTRS.jpg')} alt="Audi"/>
        </a>
        <h3>Audi TT RS Coupe</h3>
      </div>
      <div class="car" data-manufacturer="Ford">
        <a href="https://forza.fandom.com/wiki/Ford_Mustang_Boss_302" target="_blank" rel="noopener noreferrer">
        <img src={require('../img/FordMustang302.jpg')} alt="Ford"/>
        </a>
        <h3>Ford Mustang Boss 302</h3>
      </div>
      <div class="car" data-manufacturer="Ford">
        <a href="https://forza.fandom.com/wiki/Ford_Mustang_GT_(2018)" target="_blank" rel="noopener noreferrer">
        <img src={require('../img/Volvo242.jpg')} alt="Ford"/>
        </a>
        <h3>Ford Mustang GT</h3>
      </div>
      <div class="car" data-manufacturer="Ford">
        <a href="https://forza.fandom.com/wiki/Ford_Mustang_Shelby_GT500" target="_blank" rel="noopener noreferrer">
        <img src={require('../img/FordMustangShelby.jpg')} alt="Ford" />
        </a>
        <h3>Ford Mustang Shelby GT500</h3>
      </div>
      <div class="car" data-manufacturer="Maserati">
        <a href="https://forza.fandom.com/wiki/Maserati_Gran_Turismo_S" target="_blank" rel="noopener noreferrer">
        <img src={require('../img/MaseratiGTS.jpg')} alt="Maserati" />
        </a>
        <h3>Maserati Gran Turismo S</h3>
      </div>
      <div class="car" data-manufacturer="Mercedes-Benz">
        <a href="https://forza.fandom.com/wiki/Mercedes-AMG_E_63_S" target="_blank" rel="noopener noreferrer">
        <img src={require('../img/MBE63S.jpg')} alt="M-B" />
        </a>
        <h3>Mercedes-Benz AMG E63 S</h3>
      </div>
      <div class="car" data-manufacturer="Renault">
        <a href="https://forza.fandom.com/wiki/Renault_Megane_R.S." target="_blank" rel="noopener noreferrer">
        <img src={require('../img/RenaultMeganeRS.jpg')} alt="Renault"/>
        </a>
        <h3>Renault Megan RS</h3>
      </div>
      <div class="car" data-manufacturer="Porsche">
        <a href="https://forza.fandom.com/wiki/Porsche_911_GT3_RS_(2019)" target="_blank" rel="noopener noreferrer">
        <img src={require('../img/Porsche911GTS3RS.jpg')} alt="Porsche"/>
        </a>
        <h3>Porsche 911 GT3 RS</h3>
      </div>
      <div class="car" data-manufacturer="Ferrari">
        <a href="https://forza.fandom.com/wiki/Ferrari_F8_Tributo" target="_blank" rel="noopener noreferrer">
        <img src={require('../img/FerrariF8.jpg')} alt="Ferrari"/>
        </a>
        <h3>Ferrari F8 Tributo</h3>
      </div>
      <div class="car" data-manufacturer="Ferrari">
        <a href="https://forza.fandom.com/wiki/Ferrari_599XX_Evolution" target="_blank" rel="noopener noreferrer">
        <img src={require('../img/Ferrari599XXEvo.jpg')} alt="Ferrari"/>
        </a>
        <h3>Ferrari 599XX Evolution</h3>
      </div>
    </div>
  </section>
  )
}

export default Cars;