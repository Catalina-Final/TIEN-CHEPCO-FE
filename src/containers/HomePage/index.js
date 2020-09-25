import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../../redux/actions/product.actions";
import { useHistory, Link } from "react-router-dom";
import { Link as TLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Product from "../../components/Product"
import { Button, Row } from "react-bootstrap"
import ClipLoader from "react-spinners/ClipLoader";
import StoryPage from "../StoryPage"
import './style.css'
import BackGround from '../../images/bg.svg'
import FilterIcon from '../../images/Filter-icon.svg'
import ScrollRight from '../../images/scroll-right.svg'
import Combo from '../../components/Combo'
import Footer from '../../components/Footer'
import BreakBg from '../../images/break-bg.png'

const HomePage = () => {


  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);
  const products = useSelector((state) => state.product.products);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const history = useHistory();

  useEffect(() => {
    dispatch(productActions.productsRequest());
  }, [dispatch]);

  const handleClickOnProduct = (id) => {
    history.push(`/products/${id}`);
  };
  const handleBuyNow = (productId) => {
    dispatch(productActions.addProductToCart(productId))
  }

  const colors = ["green", "light-green", "yellow"]

  useEffect(() => {
    Events.scrollEvent.register('begin', function (to, element) {
    });

    Events.scrollEvent.register('end', function (to, element) {
    });

    scrollSpy.update();
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  }

  const handleSetActive = (event) => {
  }

  return (
    <div >
      <div className="tien-hompage-icon">
        <h3>Best Sellers</h3>
        {/* <Link
          className="menu-item"
          activeClass="" to="home"
          spy={true} smooth={true} offset={-100}
          duration={600} style={{ fontSize: "15px", color: "white" }}
          onSetActive={(e) => handleSetActive(e)}>Home
            </Link> */}
        <TLink
          activeClass=""
          to="combo"
          spy={true}
          smooth={true}
          offset={-100}
          duration={600}
          onSetActive={(e) => handleSetActive(e)}
        >
          <span className="scroll-down-combo">

            <div style={{ width: "6vw", paddingTop: "20px" }}>

              <svg viewBox="0 0 138 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Filter icon - designed by tranmautritam">
                  <g id="Mask Copy" filter="url(#filter0_f)">
                    <rect x="41" y="57" width="56" height="31" rx="15.5" fill="#A0BBC8" />
                  </g>
                  <circle id="Oval" cx="69" cy="36" r="36" fill="#C2D1CE" />
                  <g id="sort-tool">
                    <path id="Path" d="M61 36H77" stroke="#464185" stroke-width="2" stroke-linecap="square" />
                    <path id="Path_2" d="M58 30H80" stroke="#464185" stroke-width="2" stroke-linecap="square" />
                    <path id="Path_3" d="M64 42H74" stroke="#464185" stroke-width="2" stroke-linecap="square" />
                  </g>
                </g>
                <defs>
                  <filter id="filter0_f" x="0.225773" y="16.2258" width="137.548" height="112.548" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="20.3871" result="effect1_foregroundBlur" />
                  </filter>
                </defs>
              </svg>

            </div>

            <img src={ScrollRight} alt="scroll right" style={{ width: "5vw" }} />
          </span>
        </TLink>

      </div>
      <div>
        {loading ? (
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        ) : (

            <div className="tien-home-bg">

              <div className="tien-products-background" >
                <img src={BackGround} alt="homepage" />
              </div>

              {products.length ? (
                <div className="tien-display-layer">
                  <div className="tien-products-list">
                    {products.map((product, index) => (
                      <Product
                        product={product}
                        key={product._id}
                        handleClick={handleClickOnProduct}
                        handleBuyNow={handleBuyNow}
                        color={colors[index % colors.length]}
                      />
                    ))}
                    {<div className="empty-tien-product-style"></div>}
                    {<div className="empty-tien-product-style"></div>}
                    {<div className="empty-tien-product-style"></div>}
                    {<div className="empty-tien-product-style"></div>}
                    {<div className="empty-tien-product-style"></div>}
                  </div >
                  <div className="tien-products-list-layer-push">
                    <div className="tien-products-list-layer"></div>
                  </div>


                </div>

              ) : (
                  <p>There are no products</p>
                )}
              <div className="yoga-wrapper">
                <div className="tien-yoga-img">
                  <svg viewBox="0 0 746 812" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="yoga 1">
                      <g id="undraw yoga 248n 1">
                        <g id="ground">
                          <path id="Vector" d="M745.338 731.195C745.338 755.84 603.56 812 428.669 812C253.777 812 112 755.84 112 731.195C112 706.55 253.777 722.752 428.669 722.752C603.56 722.752 745.338 706.55 745.338 731.195Z" fill="#5E9194" />
                          <path id="Vector 2" opacity="0.1" d="M745.338 731.195C745.338 755.84 603.56 812 428.669 812C253.777 812 112 755.84 112 731.195C112 706.55 253.777 722.752 428.669 722.752C603.56 722.752 745.338 706.55 745.338 731.195Z" fill="#5E9194" />
                        </g>
                        <path id="Vector 3" d="M106.132 403.15C114.791 403.15 121.811 396.13 121.811 387.471C121.811 378.812 114.791 371.792 106.132 371.792C97.4732 371.792 90.4536 378.812 90.4536 387.471C90.4536 396.13 97.4732 403.15 106.132 403.15Z" fill="#E8DBD2" />
                        <path id="Vector 4" d="M203.679 539.357C212.338 539.357 219.357 532.338 219.357 523.679C219.357 515.02 212.338 508 203.679 508C195.02 508 188 515.02 188 523.679C188 532.338 195.02 539.357 203.679 539.357Z" fill="#E8DBD2" />
                        <path id="Vector 5" d="M153.679 498.357C162.338 498.357 169.357 491.338 169.357 482.679C169.357 474.02 162.338 467 153.679 467C145.02 467 138 474.02 138 482.679C138 491.338 145.02 498.357 153.679 498.357Z" fill="#E8DBD2" />
                        <path id="Vector 6" d="M113.369 395.913C110.029 395.913 106.765 394.923 103.988 393.068C101.211 391.213 99.0471 388.575 97.7691 385.49C96.4912 382.405 96.1568 379.01 96.8083 375.735C97.4598 372.459 99.0679 369.451 101.429 367.089C103.791 364.728 106.799 363.12 110.075 362.468C113.35 361.817 116.745 362.151 119.83 363.429C122.915 364.707 125.552 366.871 127.408 369.648C129.263 372.425 130.253 375.689 130.253 379.029C130.248 383.505 128.468 387.797 125.302 390.962C122.137 394.128 117.845 395.908 113.369 395.913ZM113.369 364.556C110.506 364.556 107.708 365.405 105.328 366.995C102.948 368.585 101.093 370.846 99.9976 373.49C98.9022 376.135 98.6156 379.045 99.1741 381.852C99.7325 384.66 101.111 387.238 103.135 389.262C105.159 391.286 107.738 392.665 110.545 393.223C113.352 393.782 116.262 393.495 118.907 392.4C121.551 391.304 123.812 389.449 125.402 387.069C126.992 384.689 127.841 381.891 127.841 379.029C127.837 375.192 126.311 371.513 123.597 368.8C120.884 366.087 117.206 364.561 113.369 364.556Z" fill="#CFCCE0" />
                        <path id="Vector 7" d="M162.679 430.357C171.338 430.357 178.357 423.338 178.357 414.679C178.357 406.02 171.338 399 162.679 399C154.02 399 147 406.02 147 414.679C147 423.338 154.02 430.357 162.679 430.357Z" fill="#C2D1CE" />
                        <path id="Vector 8" d="M163.885 486.769C160.545 486.769 157.281 485.779 154.504 483.924C151.727 482.068 149.563 479.431 148.285 476.346C147.007 473.261 146.673 469.866 147.324 466.591C147.976 463.315 149.584 460.307 151.945 457.945C154.307 455.584 157.315 453.976 160.591 453.324C163.866 452.673 167.261 453.007 170.346 454.285C173.431 455.563 176.068 457.727 177.924 460.504C179.779 463.281 180.769 466.545 180.769 469.885C180.764 474.361 178.984 478.653 175.818 481.818C172.653 484.984 168.361 486.764 163.885 486.769ZM163.885 455.412C161.022 455.412 158.224 456.261 155.844 457.851C153.464 459.441 151.609 461.702 150.514 464.346C149.418 466.991 149.132 469.901 149.69 472.708C150.249 475.516 151.627 478.094 153.651 480.118C155.675 482.142 158.254 483.521 161.061 484.079C163.869 484.638 166.779 484.351 169.423 483.256C172.068 482.16 174.328 480.305 175.918 477.925C177.508 475.545 178.357 472.747 178.357 469.885C178.353 466.048 176.827 462.369 174.114 459.656C171.4 456.943 167.722 455.416 163.885 455.412Z" fill="#CFCCE0" />
                        <path id="Vector 9" d="M199.885 531.769C196.545 531.769 193.281 530.779 190.504 528.924C187.727 527.068 185.563 524.431 184.285 521.346C183.007 518.261 182.673 514.866 183.324 511.591C183.976 508.315 185.584 505.307 187.945 502.945C190.307 500.584 193.315 498.976 196.591 498.324C199.866 497.673 203.261 498.007 206.346 499.285C209.431 500.563 212.068 502.727 213.924 505.504C215.779 508.281 216.769 511.545 216.769 514.885C216.764 519.361 214.984 523.653 211.818 526.818C208.653 529.984 204.361 531.764 199.885 531.769ZM199.885 500.412C197.022 500.412 194.224 501.261 191.844 502.851C189.464 504.441 187.609 506.702 186.514 509.346C185.418 511.991 185.132 514.901 185.69 517.708C186.249 520.516 187.627 523.094 189.651 525.118C191.675 527.142 194.254 528.521 197.061 529.079C199.869 529.638 202.779 529.351 205.423 528.256C208.068 527.16 210.328 525.305 211.918 522.925C213.508 520.545 214.357 517.747 214.357 514.885C214.353 511.048 212.827 507.369 210.114 504.656C207.4 501.943 203.722 500.416 199.885 500.412Z" fill="#CFCCE0" />
                        <path id="Vector 10" d="M168.679 586.357C177.338 586.357 184.357 579.338 184.357 570.679C184.357 562.02 177.338 555 168.679 555C160.02 555 153 562.02 153 570.679C153 579.338 160.02 586.357 168.679 586.357Z" fill="#C2D1CE" />
                        <g id="tree">
                          <path id="Vector 11" d="M227.957 703.877C227.559 703.527 218.101 695.05 209.243 674.105C201.118 654.889 192.038 621.07 194.928 569.075C200.405 470.574 137.919 411.825 137.286 411.243L138.921 409.469C139.081 409.616 155.137 424.557 170.26 451.582C190.283 487.42 199.675 528.223 197.337 569.209C191.87 667.542 229.175 701.733 229.552 702.068L227.957 703.877Z" fill="#5E9194" />
                          <path id="Vector 12" d="M237.176 701.626C237.176 701.626 210.779 669.4 247.142 627.833L237.176 701.626Z" fill="#5E9194" />
                          <path id="Vector 13" d="M218.55 706.663C218.55 706.663 199.589 669.572 146.939 686.251L218.55 706.663Z" fill="#5E9194" />
                        </g>
                        <g id="leave ground">
                          <path id="Vector 14" d="M683.03 721.546H416.164C416.164 721.546 410.754 642.208 442.76 641.306C474.766 640.404 471.16 676.468 511.28 626.881C551.4 577.294 600.085 579.999 606.396 609.3C612.707 638.601 594.225 662.042 628.034 654.83C661.843 647.617 710.529 666.55 683.03 721.546Z" fill="#E8DBD2" />
                          <path id="Vector 15" d="M545.092 721.564L544.191 721.528C546.292 669.292 557.232 635.73 566.04 616.774C575.603 596.19 584.818 587.858 584.91 587.776L585.509 588.45C585.418 588.531 576.31 596.781 566.824 617.224C558.065 636.101 547.185 669.525 545.092 721.564Z" fill="#F2F2F2" />
                          <path id="Vector 16" d="M641.678 721.672L640.813 721.42C651.234 685.649 675.776 663.064 676.023 662.839L676.629 663.507C676.384 663.729 652.026 686.155 641.678 721.672Z" fill="#F2F2F2" />
                          <path id="Vector 17" d="M458.196 721.608L457.303 721.484C460.839 695.983 454.452 676.198 448.471 664.091C441.995 650.982 434.606 643.822 434.532 643.751L435.156 643.1C435.231 643.172 442.734 650.442 449.279 663.691C455.316 675.912 461.764 695.88 458.196 721.608Z" fill="#F2F2F2" />
                          <path id="Vector 18" d="M719.249 722.752H387.379L387.303 721.628C387.112 718.832 382.879 652.865 404.253 629.327C409.031 624.066 414.787 621.304 421.36 621.119C435.293 620.722 444.048 625.941 451.11 630.13C464.421 638.026 473.214 643.243 505.186 603.728C539.821 560.919 577.191 551.71 598.673 556.831C612.553 560.14 622.12 569.494 624.92 582.493C627.571 594.802 626.727 606.368 626.049 615.661C625.322 625.604 624.749 633.458 628.833 637.018C632.242 639.987 639.046 640.258 650.246 637.867C673.026 633.008 704.811 637.166 720.766 657.779C729.349 668.869 736.111 689.028 719.583 722.086L719.249 722.752ZM389.644 720.34H717.756C730.073 695.352 730.457 674.242 718.858 659.256C704.223 640.346 673.517 635.369 650.749 640.226C638.581 642.823 631.331 642.394 627.248 638.836C622.255 634.485 622.867 626.101 623.642 615.485C624.31 606.346 625.141 594.971 622.562 583C619.966 570.946 611.055 562.263 598.114 559.177C577.317 554.215 540.991 563.309 507.061 605.245C473.779 646.38 463.753 640.434 449.88 632.205C442.731 627.965 434.614 623.156 421.429 623.53C415.536 623.696 410.359 626.192 406.038 630.949C386.828 652.103 389.174 711.422 389.644 720.34Z" fill="#5E9194" />
                        </g>
                        <path id="ground top" d="M479.5 771C624.475 771 742 751.077 742 726.5C742 701.923 624.475 682 479.5 682C334.525 682 217 701.923 217 726.5C217 751.077 334.525 771 479.5 771Z" fill="#C2D1CE" />
                        <g id="hand">
                          <path id="left hand" d="M361.211 251.791L341.915 227.67L327.442 178.222L382.92 119.125C382.92 119.125 394.981 73.2956 384.126 75.7077C373.272 78.1198 370.86 111.889 370.86 111.889L300.909 166.161C300.909 166.161 308.145 242.142 328.648 268.675L344.327 318.123L361.211 251.791Z" fill="#E8DBD2" />
                          <path id="right hand" d="M414.278 251.791L433.574 227.67L448.047 178.222L392.569 119.125C392.569 119.125 380.508 73.2956 391.363 75.7077C402.217 78.1198 404.629 111.889 404.629 111.889L474.58 166.161C474.58 166.161 467.344 242.142 446.841 268.675L431.162 318.123L414.278 251.791Z" fill="#E8DBD2" />
                        </g>
                        <g id="body">
                          <path id="Vector 19" d="M380.863 147.438C380.863 147.438 362.232 140.784 350.255 167.399C338.278 194.015 319.647 223.292 319.647 223.292L330.294 225.954C330.294 225.954 332.955 207.323 339.609 204.661L336.948 228.615C336.948 228.615 416.795 256.562 452.726 225.954L451.395 216.638C451.395 216.638 456.718 217.969 456.718 225.954L460.71 221.962C460.71 221.962 456.718 213.977 444.741 203.331C436.88 196.343 434.178 183.049 433.25 174.737C432.555 167.797 429.778 161.229 425.284 155.894C417.324 146.67 402.821 136.865 380.863 147.438Z" fill="#2F2E41" />
                          <path id="Vector 20" d="M387.744 231.288C405.063 231.288 419.102 217.249 419.102 199.931C419.102 182.612 405.063 168.573 387.744 168.573C370.426 168.573 356.387 182.612 356.387 199.931C356.387 217.249 370.426 231.288 387.744 231.288Z" fill="#E8DBD2" />
                          <path id="Vector 21" d="M373.272 216.815C373.272 216.815 374.478 242.142 367.242 250.585C360.005 259.027 352.769 302.445 387.744 303.651C422.72 304.857 419.102 267.469 419.102 267.469L411.865 246.966C411.865 246.966 401.011 231.288 404.629 216.815H373.272Z" fill="#E8DBD2" />
                          <path id="Vector 22" d="M340.709 497.824L366.639 505.664C366.639 505.664 387.744 493 387.744 505.061C387.744 517.121 380.508 532.8 382.92 543.654C385.332 554.509 390.157 581.042 382.92 581.042C375.684 581.042 361.211 534.006 361.211 534.006L337.09 520.739L340.709 497.824Z" fill="#E8DBD2" />
                          <path id="Vector 23" d="M373.272 666.671L363.623 704.059C363.623 704.059 355.181 714.913 363.623 719.737C367.585 722.001 370.484 726.655 372.446 730.957C374.156 734.832 377.017 738.086 380.641 740.279C384.264 742.471 388.475 743.495 392.701 743.211C396.817 742.869 400.285 741.242 401.128 737.012C401.362 735.685 401.316 734.324 400.995 733.016C400.673 731.707 400.083 730.48 399.261 729.412C390.364 717.39 388.347 709.486 388.347 709.486L391.966 667.274L373.272 666.671Z" fill="#E8DBD2" />
                          <path id="Vector 24" d="M349.918 205.5C349.918 205.5 360.565 190.861 369.88 188.199C379.196 185.538 380.526 172.23 380.526 172.23C380.526 172.23 404.481 198.846 419.119 200.176C433.758 201.507 420.45 168.238 420.45 168.238L393.834 161.584L368.549 164.245L348.588 177.553L349.918 205.5Z" fill="#2F2E41" />
                          <path id="Vector 25" d="M329.854 406.165L325.03 415.813C325.03 415.813 208.043 453.201 217.692 488.176C227.34 523.151 281.612 513.503 281.612 513.503L341.915 524.357L347.945 497.824L305.733 486.97L378.096 460.437L380.508 583.454L370.86 671.495L394.981 673.908C394.981 673.908 421.514 593.102 417.896 559.333C417.896 559.333 462.519 421.843 437.192 401.341C411.865 380.838 329.854 406.165 329.854 406.165Z" fill="#2F2E41" />
                          <path id="Vector 26" d="M389.159 267.486L370.34 244.742L357.593 250.585L344.327 292.796C344.327 292.796 333.472 313.299 346.739 335.008C346.739 335.008 349.151 349.481 345.533 353.099C341.915 356.717 340.709 379.632 340.709 379.632L325.03 409.783C325.03 409.783 414.278 425.462 440.811 403.753C440.811 403.753 426.888 352.422 435.33 336.743C443.772 321.064 444.978 297.029 435.33 286.174C425.682 275.32 415.484 246.966 415.484 246.966L409.643 243.231L389.159 267.486Z" fill="#C2D1CE" />
                        </g>
                        <g id="star">
                          <path id="Vector 27" d="M459.515 87.42H447.948V75.853H446.897V87.42H435.33V88.471H446.897V100.038H447.948V88.471H459.515V87.42Z" fill="#5E9194" />
                          <path id="Vector 28" d="M349.583 63.235H338.016V51.668H336.965V63.235H325.398V64.286H336.965V75.853H338.016V64.286H349.583V63.235Z" fill="#5E9194" />
                          <path id="Vector 29" d="M402.35 11.567H390.784V0H389.732V11.567H378.165V12.618H389.732V24.185H390.784V12.618H402.35V11.567Z" fill="#5E9194" />
                        </g>
                      </g>
                    </g>
                  </svg>

                </div>


              </div>
            </div>
          )}
      </div>
      <div className="text-center m-5">
        <img src={BreakBg} width="700px" alt="break background" className="img-fluid" />
      </div>
      <div >
        <Combo />
      </div>
      <div className="text-center m-5">
        <img src={BreakBg} width="700px" alt="break background" className="img-fluid" />
      </div>
      <div>
        <StoryPage />
      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}

export default HomePage
