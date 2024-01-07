export default function Footer(){
    return(
        <div className="footer">
            <div className="f-col1">
                <h3>PotentWatch</h3>
            </div>
            <div className="f-col2">
                <h4>Site Links</h4>
                <ul>
                    <li>Refund Policy</li>
                    <li>Shipping Charges</li>
                    <li>About Us</li>
                    <li>Track your order</li>
                </ul>
            </div>
            <div className="f-col3">
                <div className="email-box">
                    <h4>Subscribe for exclusive discounts</h4>
                    <form action="">
                        <input type="text" name="email" id="" placeholder="Enter your email"/>
                        <button>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
}