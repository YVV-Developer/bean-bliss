import React, { useState } from 'react'
import breadbarrel from '../../assets/img/menu/bread-barrel.jpg'
import cake from '../../assets/img/menu/cake.jpg'
import caesar from '../../assets/img/menu/caesar.jpg'
import tuscangrilled from '../../assets/img/menu/tuscan-grilled.jpg'
import mozzarella from '../../assets/img/menu/mozzarella.jpg'
import greeksalad from '../../assets/img/menu/greek-salad.jpg'
import spinachsalad from '../../assets/img/menu/spinach-salad.jpg'
import lobsterroll from '../../assets/img/menu/lobster-roll.jpg'
import lobsterbisque from '../../assets/img/menu/lobster-bisque.jpg'
import { Helmet } from 'react-helmet';

const Menu = () => {
    const [filter, setFilter] = useState('*');

    const handleFilterClick = (newFilter) => {
        setFilter(newFilter);
    };

    const menuItems = [
        {
            "img": breadbarrel,
            "name": "Bread Barrel",
            "price": "$6.95",
            "ingredients": "Lorem, deren, trataro, filede, nerada",
            "filter": "filter-specialty"
        },
        {
            "img": cake,
            "name": "Crab Cake",
            "price": "$7.95",
            "ingredients": "A delicate crab cake served on a toasted roll with lettuce and tartar sauce",
            "filter": "filter-starters"
        },
        {
            "img": caesar,
            "name": "Caesar Selections",
            "price": "$8.95",
            "ingredients": "Lorem, deren, trataro, filede, nerada",
            "filter": "filter-salads"
        },
        {
            "img": tuscangrilled,
            "name": "Tuscan Grilled",
            "price": "$9.95",
            "ingredients": "Grilled chicken with provolone, artichoke hearts, and roasted red pesto",
            "filter": "filter-specialty"
        },
        {
            "img": mozzarella,
            "name": "Mozzarella Stick",
            "price": "$4.95",
            "ingredients": "Lorem, deren, trataro, filede, nerada",
            "filter": "filter-starters"
        },
        {
            "img": greeksalad,
            "name": "Greek Salad",
            "price": "$9.95",
            "ingredients": "Fresh spinach, crisp romaine, tomatoes, and Greek olives",
            "filter": "filter-salads"
        },
        {
            "img": spinachsalad,
            "name": "Spinach Salad",
            "price": "$9.95",
            "ingredients": "Fresh spinach with mushrooms, hard-boiled egg, and warm bacon vinaigrette",
            "filter": "filter-salads"
        },
        {
            "img": lobsterroll,
            "name": "Lobster Roll",
            "price": "$12.95",
            "ingredients": "Plump lobster meat, mayo, and crisp lettuce on a toasted bulky roll",
            "filter": "filter-specialty"
        }
    ];
    return (
        <>
            <Helmet>
                <title>Menu - BeanBliss</title>
            </Helmet>
            <section id="menu" className="menu section-bg">
                <div className="container">
                    <div className="section-title mt-24" data-aos="fade-up">
                        <h2>Menu</h2>
                        <p>Check Our Tasty Menu</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up">
                            <ul id="menu-flters">
                                <li onClick={() => handleFilterClick('*')} className={filter === '*' ? 'filter-active' : ''}>
                                    All
                                </li>
                                <li
                                    onClick={() => handleFilterClick('filter-starters')}
                                    className={filter === 'filter-starters' ? 'filter-active' : ''}
                                >
                                    Starters
                                </li>
                                <li
                                    onClick={() => handleFilterClick('filter-salads')}
                                    className={filter === 'filter-salads' ? 'filter-active' : ''}
                                >
                                    Salads
                                </li>
                                <li
                                    onClick={() => handleFilterClick('filter-specialty')}
                                    className={filter === 'filter-specialty' ? 'filter-active' : ''}
                                >
                                    Specialty
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row menu-container" data-aos="fade-up">
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className={`col-lg-6 menu-item ${item.filter}`}
                                style={{ display: filter === '*' || filter === item.filter ? 'block' : 'none' }}
                            >
                                <img src={item.img} className="menu-img" alt="" />
                                <div className="menu-content">
                                    <a href="#">{item.name}</a>
                                    <span>{item.price}</span>
                                </div>
                                <div className="menu-ingredients">{item.ingredients}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Menu
