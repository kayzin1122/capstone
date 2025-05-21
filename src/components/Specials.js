function Specials() {
    return (
        <>
            <div className="specials">
                <h2>Specials</h2>
                <p style={{ textAlign: "center" }}>Our specials are made with the finest ingredients. We offer a variety of specials to suit all tastes.</p>
                <div className="specials-container">
                    <div className="special">
                        <h3>Seafood</h3>
                        <img src="./images/lobster1.jpg" alt="Lobster" />
                        <h3>Chef's Mystery Creation</h3>
                        <p>Indulge in our chef's daily inspiration! A unique and flavorful dish crafted with the freshest seasonal ingredients. Ask your server for today's delightful surprise.</p>
                    </div>
                    <div className="special">
                        <h3>Meat</h3>
                        <img src="./images/meat.jpg" alt="Steak" />
                        <h3>Grilled Prime Steak</h3>
                        <p>A succulent cut of premium beef, expertly grilled to your preferred doneness. Served with a delicate jus and seasonal accompaniments. A true classic for meat lovers.</p>
                    </div>
                    <div className="special">
                        <h3>Pasta</h3>
                        <img src="./images/spagatti.jpg" alt="Spagatti" />
                        <h3>Classic Spaghetti Bolognese</h3>
                        <p>Al dente spaghetti tossed in a rich and savory Bolognese sauce, made with slow-cooked ground meat, tomatoes, and aromatic herbs. A comforting and timeless Italian favorite.</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Specials;