const express = require('express');
const Order = require('../models/Order');
const nodemailer = require("nodemailer");
const config = require("../config/default.json");
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});
const transporter = nodemailer.createTransport({
  host: config.bavovnaSpace.HOST,
  port: config.bavovnaSpace.PORT,
  auth: {
    user: config.bavovnaSpace.login,
    pass: config.bavovnaSpace.password,
  },
});
router.post('/',
    async (req, res)=> {
      const {userInfo, items, deliveryPrice, orderAmount, deliveryInfo} = req.body;
      console.log("items", items);
      console.log('req.body', req.body);
      try {
        const newOrder = await Order.create({
          ...req.body,
        });
        const deliveryCost = deliveryPrice!==0 ? `${deliveryPrice} ₴` : "Free";
        const totalAmount = orderAmount + deliveryPrice;
        const itemsHTML = items.map(item => `
                <section style="width: 536px; background-color: #FAFAFA;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #FFF; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 16px; border-bottom: 1px solid #D7D7D7;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="width: 48px; height: 48px; vertical-align: top;">
                              <img width="48" height="48" src="${item.itemImg}" alt="item image" style="display: block; max-width: 100%; height: auto; object-fit: fill"/>
                            </td>
                            <td style="width: 205px; padding-left: 8px; vertical-align: top;">
                              <p style="font-size: 12px; font-weight: 500; font-family: 'Poppins', sans-serif; line-height: 1.1; text-transform: uppercase; margin: 0; text-overflow: ellipsis; white-space: nowrap;">
                                ${item.itemName}
                              </p>
                              <div style="font-size: 12px; font-weight: 400; font-family: 'Poppins', sans-serif; line-height: 1.1; text-transform: uppercase;">
                                <p style="margin: 0;">Size: ${item.itemSize}</p>
                                <p style="margin: 0;">Color: <span style="width: 10px; height: 10px; border: 1px solid #040404; background-color: ${item.itemColor}; display: inline-block;"></span></p>
                              </div>
                            </td>
                            <td style="width: 150px; text-align: end; vertical-align: top;">
                              <p style="font-size: 12px; font-weight: 400; font-family: 'Poppins', sans-serif; line-height: 1.1; text-transform: uppercase; margin: 0;">
                                ${item.itemQuantity}
                              </p>
                            </td>
                            <td style="width: 150px; text-align: end; vertical-align: top;">
                              <p style="font-size: 12px; font-weight: 400; font-family: 'Poppins', sans-serif; line-height: 1.1; text-transform: uppercase; margin: 0;">
                                ${item.discountPrice} ₴
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </section>
        `).join('');
        
        const mailOptions = {
          from: 'no-repaly@bavovna.space',
          to: userInfo.email,
          subject: 'Confirm Order at BAVOVNA',
          text: `HELLO! Thank you for your order #${userInfo._id} at BAVOVNA! `,
          html: `
            <html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Order Confirmation</title>
                  <style>
                      body {
                          background-color: #FAFAFA;
                          font-family: 'Poppins', sans-serif;
                          margin: 0;
                          padding: 0;
                      }
                      .container {
                          width: 100%;
                          max-width: 600px;
                          margin: 0 auto;
                          background-color: #FFFFFF;
                      }
                      .header {
                          text-align: center;
                          padding: 24px;
                      }
                      .header img {
                          width: 212px;
                          height: 15px;
                      }
                      .content {
                          padding: 24px;
                      }
                      .content h2 {
                          font-size: 20px;
                          font-weight: 500;
                          text-transform: uppercase;
                          margin-bottom: 20px;
                      }
                      .content p {
                          font-size: 16px;
                          font-weight: 400;
                          line-height: 1.4;
                          margin-bottom: 20px;
                      }
                      .items-header, .items {
                          width: 100%;
                          background-color: #B9EDDA;
                          padding: 8px;
                          font-size: 16px;
                          font-weight: 400;
                          text-transform: uppercase;
                      }
                      .items div {
                          background-color: #FFFFFF;
                          padding: 8px;
                          border-bottom: 1px solid #D7D7D7;
                      }
                      .order-summary {
                          background-color: #F5F5F5;
                          padding: 24px;
                      }
                      .order-summary div {
                          display: flex;
                          justify-content: space-between;
                          margin-bottom: 8px;
                      }
                      .footer {
                              background-color: #040404;
                            }
                      .footer p {
                          color: #FAFAFA;
                          font-size: 16px;
                          margin-top: 0;
                          margin-bottom: 16px;
                          text-align: center;
                          line-height: 1.4;
                      }
                      .footer a {
                          color: #FAFAFA;
                          text-decoration: none;
                      }
                      .social-links {
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          gap: 16px;
                          padding: 24px;
                          background-color: #040404;
                      }
                      .social-links a {
                          width: 36px;
                          height: 36px;
                      }
                      .social-links svg {
                          fill: #FAFAFA;
                      }
                  </style>
              </head>
              <body>
                  <table class="container">
                      <tr>
                          <td class="header">
                              <a href="https://anvovab.space" target="_blank" rel="noreferrer">
                                  <img src="https://anvovab.space/api/uploads/logo.jpg" alt="logo">
                              </a>
                          </td>
                      </tr>
                      <tr>
                          <td class="content">
                              <h2>ORDER CONFIRMATION</h2>
                              <p>
                                  Thank you for your order!<br>
                                  Your order has been successfully accepted.<br>
                                  Your order number: # ${req.body._id}
                              </p>
                          </td>
                      </tr>
                      <tr>
                          <td class="content">
                              <table class="items-header">
                                  <tr>
                                      <td>Products Ordered</td>
                                      <td style="text-align: center;">Quantity</td>
                                      <td style="text-align: center;">Price</td>
                                  </tr>
                              </table>
                              ${itemsHTML}
                          </td>
                      </tr>
                      <tr>
                          <td class="order-summary">
                              <div>
                                  <span>Order value</span>
                                  <span>${orderAmount} ₴</span>
                              </div>
                              <div>
                                  <span>Shipping</span>
                                  <span>${deliveryCost} </span>
                              </div>
                              <div style="font-size: 20px; font-weight: 600; text-transform: uppercase;">
                                  <span>Total</span>
                                  <span>${totalAmount} ₴</span>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td class="content">
                              <table>
                                <thead>
                                    <th><p style="font-size: 14px; font-weight: 600; text-transform: uppercase; text-align: start;">Delivery Method</p></th>
                                    <th><p style="font-size: 14px; font-weight: 600; text-transform: uppercase; text-align: start;">Selection Point</p></th>
                                    <th><p style="font-size: 14px; font-weight: 600; text-transform: uppercase; text-align: start;">Contact Details</p></th>
                                </thead>
                                  <tr>
                                      <td style="padding: 8px;">
                                          <p style="font-size: 12px;">${deliveryInfo.deliveryMethod}</p>
                                      </td>
                                      <td style="padding: 8px;">
                                          <p style="font-size: 12px;">${deliveryInfo.label}</p>
                                      </td>
                                      <td style="padding: 8px;">
                                          <p style="font-size: 12px;">${userInfo.firstName} ${userInfo.lastName}</p>
                                      </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <p style="font-size: 12px;">+${userInfo.phoneNumber}</p>
                                        <p style="font-size: 12px;">${userInfo.email}</p>
                                    </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                      <tr>
                          <td class="footer">
                              <div class="social-links">
                                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Follow us on Instagram">
                                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M18 10.6265C20.3855 10.6265 20.7108 10.6265 21.6867 10.6265C22.5542 10.6265 22.988 10.8434 23.3133 10.9518C23.747 11.1687 24.0723 11.2771 24.3976 11.6024C24.7229 11.9277 24.9398 12.253 25.0482 12.6867C25.1566 13.012 25.2651 13.4458 25.3735 14.3133C25.3735 15.2892 25.3735 15.506 25.3735 18C25.3735 20.494 25.3735 20.7108 25.3735 21.6867C25.3735 22.5542 25.1566 22.988 25.0482 23.3133C24.8313 23.747 24.7229 24.0723 24.3976 24.3976C24.0723 24.7229 23.747 24.9398 23.3133 25.0482C22.988 25.1566 22.5542 25.2651 21.6867 25.3735C20.7108 25.3735 20.494 25.3735 18 25.3735C15.506 25.3735 15.2892 25.3735 14.3133 25.3735C13.4458 25.3735 13.012 25.1566 12.6867 25.0482C12.253 24.8313 11.9277 24.7229 11.6024 24.3976C11.2771 24.0723 11.0602 23.747 10.9518 23.3133C10.8434 22.988 10.7349 22.5542 10.6265 21.6867C10.6265 20.7108 10.6265 20.494 10.6265 18C10.6265 15.506 10.6265 15.2892 10.6265 14.3133C10.6265 13.4458 10.8434 13.012 10.9518 12.6867C11.1687 12.253 11.2771 11.9277 11.6024 11.6024C11.9277 11.2771 12.253 11.0602 12.6867 10.9518C13.012 10.8434 13.4458 10.7349 14.3133 10.6265C15.2892 10.6265 15.6145 10.6265 18 10.6265ZM18 9C15.506 9 15.2892 9 14.3133 9C13.3374 9 12.6867 9.21687 12.1446 9.43374C11.6024 9.6506 11.0602 9.9759 10.5181 10.5181C9.9759 11.0602 9.75904 11.494 9.43374 12.1446C9.21687 12.6867 9.10843 13.3374 9 14.3133C9 15.2892 9 15.6145 9 18C9 20.494 9 20.7108 9 21.6867C9 22.6627 9.21687 23.3133 9.43374 23.8554C9.6506 24.3976 9.9759 24.9398 10.5181 25.4819C11.0602 26.0241 11.494 26.241 12.1446 26.5663C12.6867 26.7831 13.3374 26.8916 14.3133 27C15.2892 27 15.6145 27 18 27C20.3855 27 20.7108 27 21.6867 27C22.6627 27 23.3133 26.7831 23.8554 26.5663C24.3976 26.3494 24.9398 26.0241 25.4819 25.4819C26.0241 24.9398 26.241 24.506 26.5663 23.8554C26.7831 23.3133 26.8916 22.6627 27 21.6867C27 20.7108 27 20.3855 27 18C27 15.6145 27 15.2892 27 14.3133C27 13.3374 26.7831 12.6867 26.5663 12.1446C26.3494 11.6024 26.0241 11.0602 25.4819 10.5181C24.9398 9.9759 24.506 9.75904 23.8554 9.43374C23.3133 9.21687 22.6627 9.10843 21.6867 9C20.7108 9 20.494 9 18 9Z"/>
                                          <path d="M18 13.3373C15.3976 13.3373 13.3373 15.3976 13.3373 18C13.3373 20.6024 15.3976 22.6627 18 22.6627C20.6024 22.6627 22.6627 20.6024 22.6627 18C22.6627 15.3976 20.6024 13.3373 18 13.3373ZM18 21.0361C16.3735 21.0361 14.9639 19.7349 14.9639 18C14.9639 16.3735 16.2651 14.9639 18 14.9639C19.6265 14.9639 21.0361 16.2651 21.0361 18C21.0361 19.6265 19.6265 21.0361 18 21.0361Z"/>
                                          <path d="M22.7711 14.3133C23.3699 14.3133 23.8554 13.8278 23.8554 13.2289C23.8554 12.6301 23.3699 12.1446 22.7711 12.1446C22.1722 12.1446 21.6867 12.6301 21.6867 13.2289C21.6867 13.8278 22.1722 14.3133 22.7711 14.3133Z"/>
                                      </svg>
                                  </a>
                                  <a style="width: 36px; height: 36px; text-decoration:none;" href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Follow us on Facebook">
                                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M19.491 18.3285H22.8409L23.3669 14.9047H19.4903V13.0334C19.4903 11.6111 19.9522 10.3499 21.2746 10.3499H23.3996V7.36196C23.0263 7.31124 22.2366 7.2002 20.7446 7.2002C17.629 7.2002 15.8024 8.85557 15.8024 12.6269V14.9047H12.5996V18.3285H15.8024V27.7391C16.4367 27.8351 17.0792 27.9002 17.7387 27.9002C18.3348 27.9002 18.9166 27.8454 19.491 27.7672V18.3285Z"/>
                                      </svg>
                                  </a>
                                  <a style="width: 36px; height: 36px; text-decoration:none;" href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="Follow us on TikTok">
                                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M26.9792 12.8278C26.3582 12.8278 25.7434 12.7055 25.1698 12.4679C24.5961 12.2303 24.0749 11.882 23.6358 11.4429C23.1967 11.0039 22.8485 10.4827 22.6109 9.90901C22.3732 9.33536 22.2509 8.72053 22.2509 8.09961H18.8729V21.3273C18.8723 21.9303 18.6819 22.5179 18.3286 23.0067C17.9754 23.4955 17.4773 23.8607 16.9049 24.0506C16.3325 24.2405 15.7148 24.2454 15.1395 24.0647C14.5641 23.8839 14.0602 23.5267 13.6993 23.0436C13.3383 22.5605 13.1385 21.976 13.1283 21.373C13.118 20.77 13.2978 20.1791 13.6422 19.684C13.9865 19.1889 14.478 18.8147 15.0468 18.6145C15.6157 18.4144 16.2332 18.3983 16.8117 18.5686V15.285C15.5822 15.1192 14.3314 15.3324 13.2264 15.8962C12.1213 16.46 11.2145 17.3475 10.6271 18.4402C10.0397 19.533 9.79963 20.7789 9.93897 22.0116C10.0783 23.2444 10.5904 24.4053 11.4069 25.3393C12.2234 26.2734 13.3054 26.9361 14.5085 27.239C15.7115 27.5419 16.9783 27.4706 18.1398 27.0345C19.3012 26.5985 20.302 25.8185 21.0085 24.7987C21.715 23.7789 22.0935 22.5679 22.0936 21.3273L22.1916 14.641C23.5795 15.6599 25.257 16.2082 26.9788 16.2056L26.9792 12.8278Z"/>
                                      </svg>
                                  </a>
                              </div>
                              <p>
                                  If you would like to contact us<br>
                                  please write to <a href="mailto:help@bavovna.space">help@bavovna.space</a>
                              </p>
                          </td>
                      </tr>
                  </table>
              </body>
            </html>
          `,
        };
        await transporter.sendMail(mailOptions, function(error, info) {
          if (error) {
            return res.status(500).json({
              response: {
                code: 500,
                message: 'SERVER_ERROR_MAIL',
              },
            });
          } else {
            if (info.response) {
              return res.status(201).send(newOrder);
            }
          }
        });
      } catch (error) {
        res.status(500).json({
          response: {
            errors: error,
            code: 500,
            message: 'SERVER_ERROR',
          },
        });
      }
    });

module.exports = router;
