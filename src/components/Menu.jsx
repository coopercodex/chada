import React from 'react';
import { streetData, appData, saladData, soupData, entreeData, sidesData, drinkData, beerData, whiteWineData, redWineData, dessertData } from '../menuData';
import './menu.css'

const Menu = () => {

  const renderMenuItems = (items) => {
    return items.map(item => {
      return (
        <div key={item.name}>
          <p className='menu-name'><span>{item.name}</span><span>{item.indicators ? item.indicators : ""}</span><span>{item.dietary ? item.dietary : ""}</span><br></br>
          <span>{item.description ? item.description : ""}</span><br></br>
          <span>{item.price}</span>
          </p>
        </div>
      )
    })
  }
  return (
    <div className='menu-container'>
         
      <p>
        PLEASE BE PATIENT WITH US WE ARE UNDERSTAFFED. FOOD MAY TAKE LONGER THAN
        USUAL FOR TAKEOUT, DELIVERY & DINE IN!!!
      </p>

      <p>
        FOR DINE IN CUSTOMERS- PLEASE ORDER INSIDE AT THE FRONT COUNTER!! THANK
        YOU
      </p>

      <p>
        <b>Please let us know before ordering if yo have any allergies such as
        gluten, shellfish, etc. All allergens may not be listed in item
        description. </b>
      </p>

      <p>KEY: V=vegetarian, GF=gluten free, VO=vegetarian option available (vegetarian does NOT mean vegan, please clarify all dietary restrictions with staff!) </p>

<div className="menu-main">
      <span className="menu-header">NEW THAI STREET FOOD MENU</span><br></br>
      <span>Try our new items for 2024! (might not all be available)</span>
      {renderMenuItems(streetData)}

      <span className="menu-header">APPETIZERS</span><br></br>
      {renderMenuItems(appData)}

      <span className="menu-header">SALADS</span><br></br>
      {renderMenuItems(saladData)}

      <span className="menu-header">SOUPS</span><br></br>
      {renderMenuItems(soupData)}

      <span className="menu-header">ENTREES</span><br></br>
      {renderMenuItems(entreeData)}

      <span className="menu-header">DESSERTS</span><br></br>
      {renderMenuItems(dessertData)}

      <span className="menu-header">SIDES</span><br></br>
      {renderMenuItems(sidesData)}

      
      </div>
    </div>
  )
}

export default Menu