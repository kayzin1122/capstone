function Main() {
    return (
      <main>
          <section>
              <article className="banner">
                  <img src="/images/lobster1.jpg" alt="Lobster dish special offer" />
                  <h2>25% Off This Weekend</h2>
              </article>
          </section>
          <section className="options">
              <article>
                  <h3>Our New Menu</h3>
                  <img src="/images/spagatti.jpg" alt="Spaghetti dish" />
                  <p>Indulge in our latest culinary creations inspired by the vibrant flavors of Italy, Greece, and Turkey. Our new seasonal menu features a delightful array of dishes crafted with fresh, seasonal ingredients sourced locally for an authentic taste of the Mediterranean.</p>
                  <a href="menu.html" target="_blank" rel="noopener noreferrer">See our new menu</a>
              </article>
              <article>
                  <h3>Book a table</h3>
                  <img src="/images/meat.jpg" alt="Meat dish" />
                  <p>Whether you're planning a romantic dinner for two or a gathering with friends and family, securing your reservation ensures a memorable dining experience. Book now to savor our Italian, Greek, and Turkish influenced dishes in a cozy and inviting atmosphere.</p>
                  <a href="reservation.html" target="_blank" rel="noopener noreferrer">Book a table</a>
              </article>
              <article>
                  <h3>Opening Hours</h3>
                  <img src="/images/chef.jpg" alt="Chef preparing food" />
                  <p>We are delighted to welcome you during our regular opening hours. Join us for lunch or dinner from 2pm to 9pm, Monday to Saturday. Our doors are open to serve you our seasonal delights, prepared with passion and served with a smile. Discover a culinary journey through Italy, Greece, and Turkey right here at Little Lemon Restaurant.</p>
              </article>
          </section>
      </main>
    );
  }

  export default Main;