import React, { PureComponent } from 'react';
import logo from '../../assets/DerpLogo.svg';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faUser, faSearch} from '@fortawesome/free-solid-svg-icons';
import './topbar.css'; // Assurez-vous d'importer le fichier CSS

export interface TopBarProps { }

export default class TopBar extends PureComponent<TopBarProps> {
  render() {
    return (
      <div className="top-bar row w-100 fluid">
      
        <div className="col-1">
          <img src={logo} alt="Logo" />
        </div>
       
        <div className="col-2 search-container">
          <div className="search-input">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              type="text"
              placeholder="Rechercher..."   
            />
          </div>
        </div>
       
        <div className="col-6">
          <div className="menu">
            <span>Menu 1</span>
            <span>Menu 2</span>
            <span>Menu 3</span>
          </div>
        </div>
      
        <div className="col-3">
          <div className="user-info">
            <FontAwesomeIcon icon={faUser} className="user-icon" />
            <span>Andréa Wauthia</span>
          </div>
        </div>
      </div>
    );
  }
}
