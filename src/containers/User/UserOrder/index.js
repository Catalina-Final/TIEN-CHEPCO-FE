import React from 'react'
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import CartItems from "../../../components/CartItems"
import './CartStyle.css'

const UserOrder = () => {
    const loading = useSelector((state) => state.auth.loading);
    const cart = useSelector((state) => state.product.cart);
    // const productNum = cart.length > 0 ? cart.reduce((sum, product) => (sum + product.qty), 0) : 0;
    // console.log("check cart", cart)
    // console.log("product num", productNum)q
    return (
        <div className="tien-add-cart-style">
            <div className="add-cart-body">
                <div className="add-cart-sidebar">
                    <div className="quantity-bg">
                        <svg viewBox="0 0 864 712" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="undraw_Growing_qwt2 1" clip-path="url(#clip0)">
                                <path id="Vector" opacity="0.2" d="M130.535 660.405V573.187L215.738 485.968L292.09 430.245L371.761 346.661L465.816 309.108H586.429L686.018 187.972L772.328 81.3711V660.405H130.535Z" fill="#5E9194" />
                                <g id="Group" opacity="0.2">
                                    <path id="Vector_2" opacity="0.2" d="M132.793 558.506V564.506" stroke="#0000FF" stroke-miterlimit="10" />
                                    <path id="Vector_3" opacity="0.2" d="M132.793 575.251V634.352" stroke="#0000FF" stroke-miterlimit="10" stroke-dasharray="10.75 10.75" />
                                    <path id="Vector_4" opacity="0.2" d="M132.793 639.725V645.725" stroke="#0000FF" stroke-miterlimit="10" />
                                    <path id="Vector_5" opacity="0.2" d="M226.069 471.288V477.288" stroke="#0000FF" stroke-miterlimit="10" />
                                    <path id="Vector_6" opacity="0.2" d="M226.069 489.783V633.477" stroke="white" stroke-miterlimit="10" stroke-dasharray="12.5 12.5" />
                                    <path id="Vector_7" opacity="0.2" d="M226.069 639.725V645.725" stroke="#0000FF" stroke-miterlimit="10" />
                                    <path id="Vector_8" opacity="0.2" d="M314.17 415.564V421.564" stroke="#0000FF" stroke-miterlimit="10" />
                                    <path id="Vector_9" opacity="0.2" d="M314.17 433.047V633.983" stroke="white" stroke-miterlimit="10" stroke-dasharray="11.48 11.48" />
                                    <path id="Vector_10" opacity="0.2" d="M314.17 639.725V645.725" stroke="#0000FF" stroke-miterlimit="10" />
                                    <path id="Vector_11" opacity="0.2" d="M405.906 331.98V337.98" stroke="#0000FF" stroke-miterlimit="10" />
                                    <path id="Vector_12" opacity="0.2" d="M405.906 350.05V633.69" stroke="white" stroke-miterlimit="10" stroke-dasharray="12.07 12.07" />
                                    <path id="Vector_13" opacity="0.2" d="M405.906 639.725V645.725" stroke="#0000FF" stroke-miterlimit="10" />
                                    <path id="Vector_14" opacity="0.2" d="M499.838 294.428V300.428" stroke="#0000FF" stroke-miterlimit="10" />
                                    <path id="Vector_15" opacity="0.2" d="M499.838 312.127V633.874" stroke="white" stroke-miterlimit="10" stroke-dasharray="11.7 11.7" />
                                    <path id="Vector_16" opacity="0.2" d="M499.838 639.725V645.725" stroke="#0000FF" stroke-miterlimit="10" />
                                    <path id="Vector_17" opacity="0.2" d="M588.964 294.428V300.428" stroke="#0000FF" stroke-miterlimit="10" />
                                    <path id="Vector_18" opacity="0.2" d="M588.964 312.127V633.874" stroke="white" stroke-miterlimit="10" stroke-dasharray="11.7 11.7" />
                                    <path id="Vector_19" opacity="0.2" d="M588.964 639.725V645.725" stroke="#0000FF" stroke-miterlimit="10" />
                                    <path id="Vector_20" opacity="0.2" d="M682.177 173.291V179.291" stroke="#0000FF" stroke-miterlimit="10" />
                                    <path id="Vector_21" opacity="0.2" d="M682.177 191.097V633.821" stroke="white" stroke-miterlimit="10" stroke-dasharray="11.81 11.81" />
                                    <path id="Vector_22" opacity="0.2" d="M682.177 639.725V645.725" stroke="#0000FF" stroke-miterlimit="10" />
                                    <path id="Vector_23" opacity="0.2" d="M772.147 66.6904V72.6904" stroke="#0000FF" stroke-miterlimit="10" />
                                    <path id="Vector_24" opacity="0.2" d="M772.147 84.7549V633.692" stroke="#0000FF" stroke-miterlimit="10" stroke-dasharray="12.06 12.06" />
                                    <path id="Vector_25" opacity="0.2" d="M772.147 639.725V645.725" stroke="#0000FF" stroke-miterlimit="10" />
                                </g>
                                <path id="Vector_26" d="M132.793 581.522C145.505 581.522 155.809 571.217 155.809 558.506C155.809 545.795 145.505 535.49 132.793 535.49C120.082 535.49 109.777 545.795 109.777 558.506C109.777 571.217 120.082 581.522 132.793 581.522Z" fill="url(#paint0_linear)" />
                                <path id="Vector_27" d="M226.069 494.303C238.78 494.303 249.085 483.999 249.085 471.287C249.085 458.576 238.78 448.271 226.069 448.271C213.357 448.271 203.053 458.576 203.053 471.287C203.053 483.999 213.357 494.303 226.069 494.303Z" fill="url(#paint1_linear)" />
                                <path id="Vector_28" d="M314.17 438.58C326.882 438.58 337.186 428.276 337.186 415.564C337.186 402.853 326.882 392.548 314.17 392.548C301.459 392.548 291.154 402.853 291.154 415.564C291.154 428.276 301.459 438.58 314.17 438.58Z" fill="url(#paint2_linear)" />
                                <path id="Vector_29" d="M405.906 354.996C418.617 354.996 428.922 344.691 428.922 331.98C428.922 319.269 418.617 308.964 405.906 308.964C393.195 308.964 382.89 319.269 382.89 331.98C382.89 344.691 393.195 354.996 405.906 354.996Z" fill="url(#paint3_linear)" />
                                <path id="Vector_30" d="M499.838 317.444C512.549 317.444 522.854 307.139 522.854 294.428C522.854 281.716 512.549 271.412 499.838 271.412C487.127 271.412 476.822 281.716 476.822 294.428C476.822 307.139 487.127 317.444 499.838 317.444Z" fill="url(#paint4_linear)" />
                                <path id="Vector_31" d="M588.964 317.444C601.676 317.444 611.98 307.139 611.98 294.428C611.98 281.716 601.676 271.412 588.964 271.412C576.253 271.412 565.948 281.716 565.948 294.428C565.948 307.139 576.253 317.444 588.964 317.444Z" fill="url(#paint5_linear)" />
                                <path id="Vector_32" d="M682.177 196.307C694.889 196.307 705.193 186.002 705.193 173.291C705.193 160.58 694.889 150.275 682.177 150.275C669.466 150.275 659.161 160.58 659.161 173.291C659.161 186.002 669.466 196.307 682.177 196.307Z" fill="url(#paint6_linear)" />
                                <path id="Vector_33" d="M772.147 89.7063C784.858 89.7063 795.163 79.4017 795.163 66.6903C795.163 53.9789 784.858 43.6743 772.147 43.6743C759.435 43.6743 749.131 53.9789 749.131 66.6903C749.131 79.4017 759.435 89.7063 772.147 89.7063Z" fill="url(#paint7_linear)" />
                                <path id="Vector_34" d="M132.793 576.677C142.829 576.677 150.964 568.541 150.964 558.506C150.964 548.471 142.829 540.335 132.793 540.335C122.758 540.335 114.623 548.471 114.623 558.506C114.623 568.541 122.758 576.677 132.793 576.677Z" fill="#D6B7A0" />
                                <path id="Vector_35" d="M226.069 489.458C236.104 489.458 244.239 481.323 244.239 471.287C244.239 461.252 236.104 453.117 226.069 453.117C216.033 453.117 207.898 461.252 207.898 471.287C207.898 481.323 216.033 489.458 226.069 489.458Z" fill="#D6B7A0" />
                                <path id="Vector_36" d="M314.17 433.735C324.206 433.735 332.341 425.6 332.341 415.565C332.341 405.529 324.206 397.394 314.17 397.394C304.135 397.394 296 405.529 296 415.565C296 425.6 304.135 433.735 314.17 433.735Z" fill="#D6B7A0" />
                                <path id="Vector_37" d="M405.906 350.151C415.941 350.151 424.077 342.015 424.077 331.98C424.077 321.945 415.941 313.81 405.906 313.81C395.871 313.81 387.736 321.945 387.736 331.98C387.736 342.015 395.871 350.151 405.906 350.151Z" fill="#D6B7A0" />
                                <path id="Vector_38" d="M499.838 312.598C509.873 312.598 518.009 304.463 518.009 294.427C518.009 284.392 509.873 276.257 499.838 276.257C489.803 276.257 481.667 284.392 481.667 294.427C481.667 304.463 489.803 312.598 499.838 312.598Z" fill="#D6B7A0" />
                                <path id="Vector_39" d="M588.964 312.598C599 312.598 607.135 304.463 607.135 294.427C607.135 284.392 599 276.257 588.964 276.257C578.929 276.257 570.794 284.392 570.794 294.427C570.794 304.463 578.929 312.598 588.964 312.598Z" fill="#D6B7A0" />
                                <path id="Vector_40" d="M682.177 191.461C692.213 191.461 700.348 183.326 700.348 173.291C700.348 163.255 692.213 155.12 682.177 155.12C672.142 155.12 664.007 163.255 664.007 173.291C664.007 183.326 672.142 191.461 682.177 191.461Z" fill="#D6B7A0" />
                                <path id="Vector_41" d="M772.147 84.8611C782.182 84.8611 790.317 76.7259 790.317 66.6906C790.317 56.6552 782.182 48.52 772.147 48.52C762.112 48.52 753.976 56.6552 753.976 66.6906C753.976 76.7259 762.112 84.8611 772.147 84.8611Z" fill="#D6B7A0" />
                                <path id="Vector_42" d="M659.916 174.268C656.191 171.997 638.402 181.195 632.407 182.649C628.013 183.715 618.233 179.803 613.312 177.634L613.401 176.761C613.401 176.761 610.634 174.217 607.292 174.457C610.061 171.426 612.033 165.671 612.083 160.019L618.129 159.013C618.129 159.013 607.859 140.409 597.21 152.176C596.735 151.128 595.916 150.274 594.888 149.757C592.949 148.973 590.838 150.341 589.322 151.782C587.806 153.222 586.187 154.927 584.095 154.955C583.942 154.97 583.788 154.935 583.656 154.856C583.574 154.772 583.51 154.672 583.469 154.562C583.429 154.451 583.412 154.334 583.419 154.216C583.277 152.421 582.736 150.681 581.835 149.122C578.886 151.148 578.202 155.153 577.927 158.721C577.893 158.937 577.913 159.158 577.987 159.363C578.131 159.602 578.349 159.787 578.608 159.89C580.475 160.857 582.709 161.56 584.652 160.754C586.981 159.788 588.105 156.987 590.39 155.922C591.024 155.642 591.712 155.509 592.405 155.532C593.097 155.555 593.775 155.733 594.389 156.054C589.275 164.78 594.908 169.587 598.763 171.687C598.94 172.317 599.171 172.931 599.453 173.521C595.233 172.029 588.485 172.11 582.169 182.872L584.088 183.27L565.843 213.199C565.843 213.199 562.364 216.972 563.671 219.341C564.978 221.709 570.924 219.047 570.727 214.211C570.64 212.061 574.692 205.673 579.217 199.241L576.959 203.667C578.435 204.744 579.976 205.73 581.572 206.62C578.58 211.171 575.911 218.955 585.723 225.711L588.337 230.448C588.337 230.448 589.584 229.835 591.403 229.071L592.025 229.948C593.774 232.684 592.686 230.88 592.686 230.88L604.788 247.942C604.788 247.942 589.11 261.351 589.973 270.943L587.108 271.059C586.516 271.083 585.938 271.242 585.417 271.522C584.896 271.803 584.446 272.199 584.101 272.68C583.756 273.161 583.525 273.714 583.426 274.298C583.327 274.881 583.362 275.48 583.529 276.047C583.529 276.047 597.365 288.805 600.844 285.031C604.323 281.258 598.181 279.085 598.181 279.085L598.034 275.459L597.777 275.302C599.609 270.877 610.45 251.677 612.089 248.856C614.344 244.976 611.011 238.749 607.261 230.355L620.831 229.867C620.831 229.867 623.528 251.237 632.45 255.179L632.611 255.103L631.027 257.867C630.733 258.38 630.56 258.954 630.521 259.545C630.481 260.135 630.577 260.727 630.801 261.275C631.024 261.823 631.37 262.313 631.811 262.707C632.253 263.102 632.778 263.39 633.348 263.551C633.348 263.551 651.51 258.621 650.166 253.668C648.821 248.714 643.715 252.76 643.715 252.76L640.566 250.955L640.143 251.166C638.308 248.483 625.637 226.907 625.603 224.265C625.57 221.726 611.873 218.391 602.078 217.43L600.902 211.794C602.328 211.685 603.737 211.419 605.104 211C605.104 211 598.57 199.157 599.681 196.691C600.791 194.224 609.4 197.507 606.541 186.726L612.536 185.272L612.56 185.033L628.857 191.06C630.834 191.791 632.96 192.031 635.05 191.761C637.141 191.49 639.135 190.716 640.86 189.505L651.748 181.864C661.566 185.098 663.64 176.538 659.916 174.268Z" fill="url(#paint8_linear)" />
                                <path id="Vector_43" d="M37.1604 0V711.453" stroke="#5E9194" stroke-width="2" stroke-miterlimit="10" />
                                <path id="Vector_44" d="M0 673.345H864" stroke="#5E9194" stroke-width="2" stroke-miterlimit="10" />
                                <path id="Vector_45" d="M122.266 677.752L118.969 672.679L122.573 645.427C120.659 642.493 118.493 639.732 116.101 637.174C115.493 633.804 115.172 630.388 115.141 626.963C114.104 620.463 112.604 614.045 110.654 607.759L116.319 609.304L124.56 589.29V584.581L128.091 582.226C128.091 582.226 123.382 575.163 118.673 582.226C118.673 582.226 119.85 586.936 118.673 589.29C117.496 591.645 113.964 599.886 113.964 599.886H110.967L111.61 596.354H105.451C105.155 595.937 104.855 595.538 104.546 595.177L109.255 584.581L107.048 582.925L115.141 572.808L116.319 551.617C120.998 550.057 122.061 545.397 122.245 542.429C122.262 542.114 122.204 541.799 122.077 541.51C121.949 541.221 121.755 540.966 121.51 540.767C121.265 540.567 120.976 540.428 120.667 540.361C120.359 540.294 120.038 540.3 119.733 540.38C109.569 542.985 111.61 548.086 111.61 548.086L108.078 568.099L103.209 575.749C102.921 574.047 102.22 572.441 101.169 571.071C100.118 569.702 98.7483 568.61 97.1787 567.89L99.8368 564.567C95.9545 563.66 91.8958 563.857 88.1193 565.135C77.5712 569.144 77.5918 584.485 88.126 588.531C89.5982 589.131 91.1867 589.39 92.7732 589.29V588.113C92.9227 588.113 93.068 588.097 93.216 588.091C93.0371 589.186 92.8696 590.423 92.7776 591.644L92.7732 591.645C90.4186 591.645 90.4187 604.595 93.9504 606.949L92.7732 619.899V626.963C95.1277 632.849 99.8368 632.849 99.8368 632.849L103.369 649.331C104.691 649.852 106.153 649.896 107.505 649.456L108.078 654.04C108.078 654.04 97.4822 662.281 97.4822 674.054L97.0964 674.826L96.305 674.054L89.2413 679.94L98.6595 691.713H108.078C110.432 685.827 101.014 684.649 101.014 684.649L100.966 678.599L111.433 666.17C111.959 667.771 112.682 669.301 113.586 670.724L113.676 671.582L112.594 671.358L109.809 680.121L115.166 681.941C117.949 682.887 120.908 683.195 123.826 682.842C126.743 682.489 129.544 681.485 132.021 679.903C130.837 673.675 122.266 677.752 122.266 677.752Z" fill="url(#paint9_linear)" />
                                <path id="Vector_46" d="M285.573 400.404C285.573 400.404 284.152 401.059 283.17 398.928L280.33 400.237L278.857 397.042L280.632 396.223L274.035 372.571C274.035 372.571 274.202 367.328 270.379 366.507C270.379 366.507 268.304 365.741 260.165 368.632C256.752 369.844 254.031 370.89 252.01 371.7C250.244 370.104 246.351 365.923 246.27 359.968C246.227 358.51 245.83 357.084 245.112 355.813L250.123 354.318L250.014 354.081L264.654 348.481C265.308 349.901 272.027 347.665 273.503 345.263C274.179 344.162 273.077 343.519 271.685 343.145C269.714 342.639 267.636 342.745 265.727 343.45L248.038 349.795L247.832 349.346C247.153 349.814 246.373 350.114 245.556 350.222L244.557 349.533L251.25 338.852C252.627 339.593 256.649 333.764 256.382 330.957C256.26 329.671 254.992 329.82 253.655 330.36C251.776 331.141 250.18 332.476 249.08 334.188L240.739 346.899L239.066 345.745L237.878 348.943C236.147 347.944 234.298 347.167 232.373 346.631L229.996 341.474C231.055 340.728 231.932 339.752 232.56 338.619C233.189 337.486 233.553 336.226 233.626 334.932C233.698 333.638 233.477 332.345 232.979 331.149C232.481 329.953 231.719 328.885 230.75 328.025C232.32 327.387 233.947 326.898 235.609 326.565C235.609 326.565 221.633 314.925 214.853 330.105C214.853 330.105 214.845 330.263 214.84 330.533C214.564 330.661 214.302 330.789 214.08 330.873C212.165 331.603 210.25 332.332 208.335 333.061C207.913 333.209 207.505 333.39 207.113 333.603C206.514 333.984 205.97 334.444 205.495 334.972C205.128 335.311 204.823 335.711 204.593 336.155C204.412 336.651 204.364 337.185 204.453 337.705C204.542 338.225 204.765 338.712 205.101 339.119C205.782 339.924 206.6 340.601 207.517 341.121C208.328 341.644 209.139 342.168 209.949 342.692C210.325 342.87 210.66 343.122 210.935 343.433C211.211 343.744 211.42 344.108 211.551 344.502C211.769 342.709 211.01 340.96 210.318 339.291C209.903 338.528 209.76 337.646 209.914 336.791C210.104 336.359 210.376 335.968 210.717 335.642C211.058 335.315 211.459 335.059 211.899 334.888C212.894 334.375 213.928 333.94 214.991 333.588C215.423 337.488 217.025 343.375 222.684 344.292L224.48 348.188C223.399 349.849 223.186 352.783 226.39 357.937L234.247 374.982C234.247 374.982 234.492 375.024 234.919 375.083C234.408 377.65 233.781 384.731 241.537 387.254L237.963 417.04C237.963 417.04 223.797 435.509 226.354 439.345H227.194L226.285 442.258L223.028 441.566L221.566 448.45L240.689 452.511C240.689 452.511 242.591 447.319 234.014 446.297C234.014 446.297 232.484 445.972 232.972 443.678L230.895 443.237L232.11 439.345H232.132C232.132 439.345 244.357 425.992 246.914 414.483C248.871 405.68 253.068 389.407 254.935 382.236L265.841 377.21C265.841 377.21 272.931 396.329 274.24 399.169L274.596 399.006L276.069 402.202L273.938 403.184L276.884 409.575L294.638 401.392C294.638 401.392 293.057 396.093 285.573 400.404Z" fill="url(#paint10_linear)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear" x1="132.793" y1="581.522" x2="132.793" y2="535.49" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#808080" stop-opacity="0.25" />
                                    <stop offset="0.53514" stop-color="#808080" stop-opacity="0.12" />
                                    <stop offset="1" stop-color="#808080" stop-opacity="0.1" />
                                </linearGradient>
                                <linearGradient id="paint1_linear" x1="10609.5" y1="23202" x2="10609.5" y2="21083.1" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#808080" stop-opacity="0.25" />
                                    <stop offset="0.53514" stop-color="#808080" stop-opacity="0.12" />
                                    <stop offset="1" stop-color="#808080" stop-opacity="0.1" />
                                </linearGradient>
                                <linearGradient id="paint2_linear" x1="14753" y1="20581.3" x2="14753" y2="18462.3" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#808080" stop-opacity="0.25" />
                                    <stop offset="0.53514" stop-color="#808080" stop-opacity="0.12" />
                                    <stop offset="1" stop-color="#808080" stop-opacity="0.1" />
                                </linearGradient>
                                <linearGradient id="paint3_linear" x1="19067.6" y1="16650.1" x2="19067.6" y2="14531.2" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#808080" stop-opacity="0.25" />
                                    <stop offset="0.53514" stop-color="#808080" stop-opacity="0.12" />
                                    <stop offset="1" stop-color="#808080" stop-opacity="0.1" />
                                </linearGradient>
                                <linearGradient id="paint4_linear" x1="23485.4" y1="14884" x2="23485.4" y2="12765" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#808080" stop-opacity="0.25" />
                                    <stop offset="0.53514" stop-color="#808080" stop-opacity="0.12" />
                                    <stop offset="1" stop-color="#808080" stop-opacity="0.1" />
                                </linearGradient>
                                <linearGradient id="paint5_linear" x1="27677.1" y1="14884" x2="27677.1" y2="12765" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#808080" stop-opacity="0.25" />
                                    <stop offset="0.53514" stop-color="#808080" stop-opacity="0.12" />
                                    <stop offset="1" stop-color="#808080" stop-opacity="0.1" />
                                </linearGradient>
                                <linearGradient id="paint6_linear" x1="32061.1" y1="9186.67" x2="32061.1" y2="7067.72" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#808080" stop-opacity="0.25" />
                                    <stop offset="0.53514" stop-color="#808080" stop-opacity="0.12" />
                                    <stop offset="1" stop-color="#808080" stop-opacity="0.1" />
                                </linearGradient>
                                <linearGradient id="paint7_linear" x1="36292.6" y1="4173.04" x2="36292.6" y2="2054.09" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#808080" stop-opacity="0.25" />
                                    <stop offset="0.53514" stop-color="#808080" stop-opacity="0.12" />
                                    <stop offset="1" stop-color="#808080" stop-opacity="0.1" />
                                </linearGradient>
                                <linearGradient id="paint8_linear" x1="113038" y1="26753.5" x2="112274" y2="7910.78" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#808080" stop-opacity="0.25" />
                                    <stop offset="0.53514" stop-color="#808080" stop-opacity="0.12" />
                                    <stop offset="1" stop-color="#808080" stop-opacity="0.1" />
                                </linearGradient>
                                <linearGradient id="paint9_linear" x1="14280.7" y1="119537" x2="14280.7" y2="96615.9" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#808080" stop-opacity="0.25" />
                                    <stop offset="0.53514" stop-color="#808080" stop-opacity="0.12" />
                                    <stop offset="1" stop-color="#808080" stop-opacity="0.1" />
                                </linearGradient>
                                <linearGradient id="paint10_linear" x1="37876.5" y1="71519.7" x2="37876.5" y2="54564.8" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#808080" stop-opacity="0.25" />
                                    <stop offset="0.53514" stop-color="#808080" stop-opacity="0.12" />
                                    <stop offset="1" stop-color="#808080" stop-opacity="0.1" />
                                </linearGradient>
                                <clipPath id="clip0">
                                    <rect width="864" height="711.453" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                </div>
                <div className="add-cart-content">
                    <div className="cart-products-list">
                        {cart && cart.products && cart.products.map((chosenItem) => (
                            <CartItems
                                chosenItem={chosenItem}
                            />

                        ))}
                    </div>
                    <div className="cart-products-send">
                        <Link to="/user/order/shipingInfo">
                            <label>
                                <div className="cart-send-style">
                                    <svg viewBox="0 0 201 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="sending">
                                            <path id="Vector" d="M100.85 200.32C156.056 200.32 200.81 155.566 200.81 100.36C200.81 45.1535 156.056 0.399902 100.85 0.399902C45.6435 0.399902 0.889893 45.1535 0.889893 100.36C0.889893 155.566 45.6435 200.32 100.85 200.32Z" fill="#5E9194" />
                                            <path id="Vector_2" d="M100.85 52.5298L61 144.47L64.72 148.19L100.86 132.25L137 148.19L140.72 144.47L100.85 52.5298Z" fill="#D6B7A0" />
                                        </g>
                                    </svg>

                                </div>
                                <Button style={{ display: "none" }}>take order</Button>
                            </label>

                        </Link>
                    </div>



                </div>


            </div>


        </div>
    )
}

export default UserOrder
