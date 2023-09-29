import derpLogo from '../../assets/DerpLogo.svg';
import React, { PureComponent } from 'react'

export interface TopBarProps{

}
export default class Topbar extends PureComponent<TopBarProps> {
  /**
   *
   */
  constructor(props: TopBarProps) {
    super(props);
    
  }

  render() {
        return (
          <div className="top-bar w-100 row" style={{backgroundColor: 'gray', maxHeight:'50px'}}>
              <img src={derpLogo} alt="Logo" />
          </div>
        );
      
  }
}
