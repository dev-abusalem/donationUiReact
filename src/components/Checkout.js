import React from "react";
import classes from "./Checkout.module.css";

const Checkout = () => {
  return (
    <div className={classes.checkout}>
      <div className={classes.checkout_container}>
        <div className={classes.checkout_wrapper}>
          <div className={classes.chekout_left}>
            <div className={classes.chekout_left_wrapper}>
              <div className={classes.left_header}>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg"
                  alt="avater_image"
                />
              </div>
              <div className={classes.left_body}>
                <span>
                  <i class="fa-solid fa-hand-holding-dollar"></i>
                </span>
                <input type="number" placeholder="Donation Amount" />
              </div>
              <div className={classes.left_footer}>
                <p>
                  Thank you for supporting the The PRESSIFY X - The world's
                  biggest community of developers! · Join zero to full stack
                  hero today at www.pressifyx.com
                </p>
              </div>
            </div>
          </div>

          <div className={classes.checkout_right}>
            <div className={classes.checkout_right_wrapper}>
              <div className={classes.right_header}>
                <h2>Pay With Your Card</h2>
              </div>
              <div className={classes.right_body}>
                <form>
                  <div style={{ display: "flex" }}>
                    {/* <label htmlFor="card_number">Card information</label> */}
                    <input
                      type="number"
                      for="card_number"
                      placeholder="1234 1234 1234 1234"
                    />
                    <img
                      src="https://www.seekpng.com/png/detail/136-1366945_mastercard-logo-png-logo-visa-mastercard-png.png"
                      alt="cards_logo"
                    />
                  </div>

                  <div className={classes.card_date_cvc}>
                    <input type="text" placeholder="MM/YY" />
                    <input type="text" placeholder="CVC" />
                  </div>

                  <div className={classes.divider}>
                    <small>Other Information's</small>
                  </div>

                  <div style={{ display: "flex" }}>
                    {/* <label>Email</label> */}
                    <input type="email" placeholder="Email Address" />
                  </div>

                  <div style={{ display: "flex" }}>
                    {/* <label>Card Holder Name</label> */}
                    <input type="text" placeholder="Card Holder Name" />
                  </div>

                  <div
                    style={{ display: "flex" }}
                    className={classes.right_div_width}
                  >
                    {/* <label htmlFor="">Country</label> */}
                    <select name="" id="">
                      <option value="">Bangladesh</option>
                      <option value="">India</option>
                      <option value="">Pakistan</option>
                      <option value="">Nepal</option>
                      <option value="">Bhutan</option>
                    </select>
                  </div>

                  <div className={classes.right_div_submit}>
                    <button>Donate</button>
                  </div>
                </form>
              </div>
              <div className={classes.right_footer}>
                <p>This payment is going to trough stripe payment gateway .</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
