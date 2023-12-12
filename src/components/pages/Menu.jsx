import React from 'react'
import breadbarrel from '../../assets/img/menu/bread-barrel.jpg'
import cake from '../../assets/img/menu/cake.jpg'
import caesar from '../../assets/img/menu/caesar.jpg'
import tuscangrilled from '../../assets/img/menu/tuscan-grilled.jpg'
import mozzarella from '../../assets/img/menu/mozzarella.jpg'
import greeksalad from '../../assets/img/menu/greek-salad.jpg'
import spinachsalad from '../../assets/img/menu/spinach-salad.jpg'
import lobsterroll from '../../assets/img/menu/lobster-roll.jpg'
import lobsterbisque from '../../assets/img/menu/lobster-bisque.jpg'

const Menu = () => {
    return (
        <>
            <section id="menu" class="menu section-bg">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Menu</h2>
                        <p>Check Our Tasty Menu</p>
                    </div>

                    <div class="row" data-aos="fade-up" data-aos-delay="100">
                        <div class="col-lg-12 d-flex justify-content-center">
                            <ul id="menu-flters">
                                <li data-filter="*" class="filter-active">All</li>
                                <li data-filter=".filter-starters">Starters</li>
                                <li data-filter=".filter-salads">Salads</li>
                                <li data-filter=".filter-specialty">Specialty</li>
                            </ul>
                        </div>
                    </div>

                    <div class="row menu-container" data-aos="fade-up" data-aos-delay="200">

                        <div class="col-lg-6 menu-item filter-starters">
                            <img src={lobsterbisque} class="menu-img" alt="" />
                            <div class="menu-content">
                                <a href="#">Lobster Bisque</a><span>$5.95</span>
                            </div>
                            <div class="menu-ingredients">
                                Lorem, deren, trataro, filede, nerada
                            </div>
                        </div>

                        <div class="col-lg-6 menu-item filter-specialty">
                            <img src={breadbarrel} class="menu-img" alt="" />
                            <div class="menu-content">
                                <a href="#">Bread Barrel</a><span>$6.95</span>
                            </div>
                            <div class="menu-ingredients">
                                Lorem, deren, trataro, filede, nerada
                            </div>
                        </div>

                        <div class="col-lg-6 menu-item filter-starters">
                            <img src={cake} class="menu-img" alt="" />
                            <div class="menu-content">
                                <a href="#">Crab Cake</a><span>$7.95</span>
                            </div>
                            <div class="menu-ingredients">
                                A delicate crab cake served on a toasted roll with lettuce and tartar sauce
                            </div>
                        </div>

                        <div class="col-lg-6 menu-item filter-salads">
                            <img src={caesar} class="menu-img" alt="" />
                            <div class="menu-content">
                                <a href="#">Caesar Selections</a><span>$8.95</span>
                            </div>
                            <div class="menu-ingredients">
                                Lorem, deren, trataro, filede, nerada
                            </div>
                        </div>

                        <div class="col-lg-6 menu-item filter-specialty">
                            <img src={tuscangrilled} class="menu-img" alt="" />
                            <div class="menu-content">
                                <a href="#">Tuscan Grilled</a><span>$9.95</span>
                            </div>
                            <div class="menu-ingredients">
                                Grilled chicken with provolone, artichoke hearts, and roasted red pesto
                            </div>
                        </div>

                        <div class="col-lg-6 menu-item filter-starters">
                            <img src={mozzarella} class="menu-img" alt="" />
                            <div class="menu-content">
                                <a href="#">Mozzarella Stick</a><span>$4.95</span>
                            </div>
                            <div class="menu-ingredients">
                                Lorem, deren, trataro, filede, nerada
                            </div>
                        </div>

                        <div class="col-lg-6 menu-item filter-salads">
                            <img src={greeksalad} class="menu-img" alt="" />
                            <div class="menu-content">
                                <a href="#">Greek Salad</a><span>$9.95</span>
                            </div>
                            <div class="menu-ingredients">
                                Fresh spinach, crisp romaine, tomatoes, and Greek olives
                            </div>
                        </div>

                        <div class="col-lg-6 menu-item filter-salads">
                            <img src={spinachsalad} class="menu-img" alt="" />
                            <div class="menu-content">
                                <a href="#">Spinach Salad</a><span>$9.95</span>
                            </div>
                            <div class="menu-ingredients">
                                Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
                            </div>
                        </div>

                        <div class="col-lg-6 menu-item filter-specialty">
                            <img src={lobsterroll} class="menu-img" alt="" />
                            <div class="menu-content">
                                <a href="#">Lobster Roll</a><span>$12.95</span>
                            </div>
                            <div class="menu-ingredients">
                                Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu
