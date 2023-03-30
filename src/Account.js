import React from "react";
import "./account.scss";
import logory from "./img/logo.png";
import calender from "./img/calender.png";
import bank1 from "./img/bank1.png";
import bank2 from "./img/bank2.png";
import bank3 from "./img/bank3.png";
import bank4 from "./img/bank4.png";

function Account() {
  return (
    <>
      <div className="container">
        <header className="header1">
          <h1 className="header1__headText1">
            search
            <i class="fa-solid fa-magnifying-glass"></i>
          </h1>
          <h1 className="header1__headText2">Group | Deutsch</h1>
        </header>
        <header className="header2">
          <img src={logory} alt="" className="header2__logo" />
          <h1 className="header2__headText3">Private & Business Clients</h1>
        </header>
        <header className="header3">
          <h1 className="header3__headText4">My online banking</h1>
          <h1 className="header3__headText5">Products & Offers</h1>
        </header>
        <section className="mainy">
          <div className="mainy--div1">
            <div className="mainy--div1__shit1">
              <div className="bar1">
                <h1 className="bar1__shitText1">Main account</h1>
                <h1 className="bar1__shitText1">Available funds</h1>
              </div>
              <div className="bar2">
                <h1 className="bar2__shitText2">Savings Account</h1>
                <h1 className="bar2__shitText2">Munoz Palmer</h1>
              </div>

              <div className="bar3">
                <h1 className="bar1__shitText1"> 0532013000</h1>
                <h1 className="bar3__shitText3">$68.789,540,56</h1>
              </div>
              <div className="bar4">
                <a href="/login" class="button2">
                  Transfer money
                </a>
                <a href="/login" class="button3">
                  Link accounts
                </a>
              </div>
            </div>
            <div className="mainy--div1__shit2">
              <div className="bar5">
                <h1 className="bar5__shitText4">Define standing orders</h1>
                <h1 className="bar5__shitText6">
                  We help you remember about recurring payments for the fixed
                  price. Define once standing order and bank will take care of
                  your regular transfers.
                </h1>
              </div>
              <div className="bar6">
                <a href="/login" class="button4">
                  Link accounts
                </a>
                <img src={calender} alt="" className="calender" />
              </div>
            </div>
          </div>
          <div className="mainy--div1">
            <div className="mainy--div1__shit3">
              <div className="bar7">
                <h1 className="bar7__shitText7">Santander</h1>
              </div>
              <div className="bar7">
                <h1 className="bar7__shitText8">
                  88 **** 9448
                  <img src={bank1} alt="" className="bank1" />
                </h1>
              </div>
              <div className="bar7">
                <h1 className="bar7__shitText9">
                  $12.220,65
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </h1>
              </div>
            </div>
            <div className="mainy--div1__shit3">
              <div className="bar7">
                <h1 className="bar7__shitText7">CitiBank</h1>
              </div>
              <div className="bar7">
                <h1 className="bar7__shitText8">
                  45 **** 8854
                  <img src={bank2} alt="" className="bank1" />
                </h1>
              </div>
              <div className="bar7">
                <h1 className="bar7__shitText9">
                  $25.070,56
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </h1>
              </div>
            </div>
            <div className="mainy--div1__shit3">
              <div className="bar7">
                <h1 className="bar7__shitText7">Deutsche Bank</h1>
              </div>
              <div className="bar7">
                <h1 className="bar7__shitText8">
                  67 **** 6821
                  <img src={bank3} alt="" className="bank1" />
                </h1>
              </div>
              <div className="bar7">
                <h1 className="bar7__shitText9">
                  $570,00
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </h1>
              </div>
            </div>
            <div className="mainy--div1__shit3">
              <div className="bar7">
                <h1 className="bar7__shitText7">Credit Agricole</h1>
              </div>
              <div className="bar7">
                <h1 className="bar7__shitText8">
                  55 **** 7655
                  <img src={bank4} alt="" className="bank1" />
                </h1>
              </div>
              <div className="bar7">
                <h1 className="bar7__shitText9">
                  $2.680,50
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </h1>
              </div>
            </div>
          </div>
          <div className="mainy--div1">
            <div className="mainy--div1__shit7">
              <ul className="responsive-table">
                <div class="table-row table-head">
                  <div className="" data-label="Job Id">
                    Latest
                  </div>
                  <div className="" data-label="Customer Name">
                    Transaction
                  </div>
                </div>
                <li class="table-row">
                  <div className="" data-label="Job Id">
                    Today
                  </div>
                  <div className="" data-label="Amount">
                    $100
                  </div>
                  <div className="pend1" data-label="Payment Status">
                    Pending
                  </div>
                  <div className="" data-label="Payment Status">
                    Card
                  </div>
                  <div className="" data-label="Customer Name">
                    Starbucks Cafe
                  </div>
                </li>
                <li class="table-row">
                  <div className="" data-label="Job Id">
                    20.05
                  </div>
                  <div className="" data-label="Amount">
                    $55
                  </div>
                  <div className="pend2" data-label="Payment Status">
                    Done
                  </div>
                  <div className="" data-label="Payment Status">
                    Fee
                  </div>
                  <div className="" data-label="Customer Name">
                    Spotify Premium
                  </div>
                </li>

                <li class="table-row">
                  <div className="" data-label="Job Id">
                    20.05
                  </div>
                  <div className="" data-label="Amount">
                    $55
                  </div>
                  <div className="pend1" data-label="Payment Status">
                    Pending
                  </div>
                  <div className="" data-label="Payment Status">
                    Fee
                  </div>
                  <div className="" data-label="Customer Name">
                    Spotify Premium
                  </div>
                </li>
                <li class="table-row">
                  <div className="" data-label="Job Id">
                    20.05
                  </div>
                  <div className="" data-label="Amount">
                    $55
                  </div>
                  <div className="pend2" data-label="Payment Status">
                    Done
                  </div>
                  <div className="" data-label="Payment Status">
                    Fee
                  </div>
                  <div className="" data-label="Customer Name">
                    Spotify Premium
                  </div>
                </li>
                <li class="table-row">
                  <div className="" data-label="Job Id">
                    20.05
                  </div>
                  <div className="" data-label="Amount">
                    $78
                  </div>
                  <div className="pend2" data-label="Payment Status">
                    Done
                  </div>
                  <div className="" data-label="Payment Status">
                    Fee
                  </div>
                  <div className="" data-label="Customer Name">
                    Google Inc.
                  </div>
                </li>
              </ul>
            </div>
            <div className="mainy--div1__shit8">
              <div className="bar8">
                <h1 className="bar8__shitText10">All expenses</h1>
              </div>

              <div className="bar2">
                <h1 className="bar2__shitText2">Daily</h1>
                <h1 className="bar2__shitText2">weekly</h1>
                <h1 className="bar2__shitText2">monthly</h1>
              </div>
              <div className="bar2">
                <h1 className="bar2__shitText2">$275,40</h1>
                <h1 className="bar2__shitText2">$1.420,65</h1>
                <h1 className="bar2__shitText2">$8.200,00</h1>
              </div>

              <div className="skillBox">
                <span className="skillh">other</span>
                <div className="gradingBack">
                  <div className="gradingFront--1"></div>
                </div>
                <span className="skillh">bills</span>
                <div className="gradingBack">
                  <div className="gradingFront--2"></div>
                </div>
                <span className="skillh">health</span>
                <div className="gradingBack">
                  <div className="gradingFront--3"></div>
                </div>
                <span className="skillh">education</span>
                <div className="gradingBack">
                  <div className="gradingFront--3"></div>
                </div>
                <span className="skillh">clothes</span>
                <div className="gradingBack">
                  <div className="gradingFront--3"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <a href className="footer__headText6">
            AGB
          </a>
          <a href className="footer__headText6">
            Imprint
          </a>
          <a href className="footer__headText6">
            Legal Notices
          </a>
          <a href className="footer__headText6">
            Consent-Options
          </a>
          <a href className="footer__headText6">
            Data Protection
          </a>
        </footer>
      </div>
    </>
  );
}

export default Account;
