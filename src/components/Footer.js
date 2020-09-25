import React from 'react'
import './FooterStyle.css'
import FooterBg from "./images/milk-footer.png"

const Footer = () => {
    return (
        <div className="footer-style">
            <div className="footer-chat">
                <div className="footer-chat-img">
                    <svg viewBox="0 0 790 731" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="undraw_chatting_2yvo 1">
                            <g id="Group" opacity="0.5">
                                <path id="Vector" opacity="0.5" d="M511 0H508V17H511V0Z" fill="#47E6B1" />
                                <path id="Vector_2" opacity="0.5" d="M518 10V7L501 7V10H518Z" fill="#47E6B1" />
                            </g>
                            <g id="chat-icon">
                                <g id="Group_2" opacity="0.5">
                                    <path id="Vector_3" opacity="0.5" d="M551.67 43.99L219.17 44.8C217.375 44.8039 215.599 45.1615 213.942 45.8522C212.286 46.543 210.782 47.5533 209.516 48.8256C208.25 50.0979 207.248 51.6072 206.565 53.2672C205.883 54.9271 205.535 56.7053 205.54 58.5L207.05 680.39C207.054 682.185 207.411 683.961 208.102 685.617C208.793 687.274 209.803 688.778 211.076 690.044C212.348 691.31 213.857 692.312 215.517 692.995C217.177 693.677 218.955 694.025 220.75 694.02L553.25 693.21C555.046 693.206 556.823 692.848 558.48 692.157C560.137 691.465 561.641 690.454 562.907 689.181C564.173 687.907 565.176 686.397 565.857 684.736C566.539 683.075 566.887 681.296 566.88 679.5L565.37 57.61C565.365 55.8161 565.006 54.0409 564.315 52.3856C563.624 50.7303 562.613 49.2273 561.341 47.9626C560.069 46.6979 558.56 45.6961 556.9 45.0145C555.241 44.3328 553.464 43.9847 551.67 43.99V43.99Z" fill="url(#paint0_linear)" />
                                </g>
                                <path id="Vector_4" d="M546.853 52.4806L224.024 53.2694C216.491 53.2878 210.399 59.4096 210.418 66.9427L211.895 671.611C211.914 679.144 218.035 685.236 225.569 685.218L548.398 684.429C555.931 684.41 562.023 678.289 562.004 670.755L560.527 66.0872C560.508 58.5541 554.387 52.4622 546.853 52.4806Z" fill="#5E9194" />
                                <path id="&#60;Path&#62;" opacity="0.4" d="M473.43 68.5C472.434 75.203 469.073 81.3285 463.954 85.7688C458.835 90.2092 452.296 92.6713 445.52 92.71L324.59 93C317.819 92.9879 311.275 90.5552 306.14 86.1411C301.006 81.7271 297.618 75.6227 296.59 68.93L232.54 69.09C230.793 69.0939 229.065 69.4419 227.453 70.1139C225.84 70.7859 224.376 71.7689 223.144 73.0067C221.912 74.2445 220.936 75.7129 220.271 77.328C219.606 78.9432 219.266 80.6734 219.27 82.42L220.66 656.09C220.664 657.837 221.012 659.567 221.685 661.18C222.357 662.793 223.341 664.257 224.58 665.489C225.819 666.722 227.289 667.698 228.905 668.362C230.521 669.026 232.253 669.365 234 669.36L540 668.62C541.747 668.616 543.475 668.268 545.087 667.596C546.7 666.924 548.164 665.941 549.396 664.703C550.628 663.466 551.604 661.997 552.269 660.382C552.934 658.767 553.274 657.037 553.27 655.29L551.88 81.62C551.876 79.8734 551.528 78.1447 550.856 76.5326C550.184 74.9205 549.201 73.4565 547.963 72.2243C546.726 70.992 545.257 70.0157 543.642 69.3509C542.027 68.6862 540.297 68.3461 538.55 68.35L473.43 68.5Z" fill="white" />
                                <path id="Vector_5" d="M419.303 75.7709L345.292 76.8818C344.187 76.8984 343.305 77.8072 343.322 78.9116L343.335 79.7915C343.352 80.896 344.26 81.7779 345.365 81.7613L419.377 80.6503C420.481 80.6337 421.363 79.725 421.346 78.6205L421.333 77.7406C421.316 76.6362 420.408 75.7543 419.303 75.7709Z" fill="#DBDBDB" />
                                <path id="Vector_6" d="M437.942 80.3618C439.56 80.3375 440.852 79.0062 440.828 77.3882C440.803 75.7701 439.472 74.4782 437.854 74.5025C436.236 74.5268 434.944 75.8581 434.968 77.4761C434.992 79.0941 436.324 80.3861 437.942 80.3618Z" fill="#DBDBDB" />
                                <g id="Group_3" opacity="0.5">
                                    <path id="Vector_7" opacity="0.5" d="M346.94 243.85C346.934 226.783 351.347 210.005 359.749 195.149C368.152 180.293 380.258 167.866 394.888 159.078C409.519 150.289 426.176 145.438 443.237 144.998C460.299 144.557 477.184 148.541 492.249 156.563C507.314 164.584 520.045 176.37 529.203 190.772C538.362 205.174 543.635 221.701 544.51 238.746C545.385 255.791 541.832 272.772 534.197 288.036C526.561 303.301 515.104 316.328 500.94 325.85L500.88 326.29C497.658 329.413 493.848 331.864 489.67 333.5L489.54 333.06C484.91 337.06 465.42 343.39 443.03 343.33H442.54C428.36 343.33 412.96 340.83 399.42 333.5C399.42 333.5 399.3 333.24 399.12 332.75C395.69 331.139 392.543 328.984 389.8 326.37C389.747 325.99 389.693 325.617 389.64 325.25C376.455 316.161 365.679 304.003 358.24 289.822C350.801 275.641 346.923 259.864 346.94 243.85V243.85Z" fill="url(#paint1_linear)" />
                                </g>
                                <g id="Group_4" opacity="0.5">
                                    <path id="Vector_8" opacity="0.5" d="M5 158.11V300.83H229.86C229.86 300.83 246.46 333.5 275 343C275 343 265.89 319.86 275.4 300.83H338V158.11H5Z" fill="url(#paint2_linear)" />
                                </g>
                                <g id="&#8;chat-left">
                                    <path id="Vector_9" d="M14 163V298H239C239 298 239 325 266 334C266 334 257 316 266 298H329V163H14Z" fill="#C2D1CE" />
                                    <path id="Vector_10" d="M221 190H41V208H221V190Z" fill="white" />
                                    <path id="Vector_11" d="M284 217H41V235H284V217Z" fill="white" />
                                    <path id="Vector_12" d="M257 244H41V262H257V244Z" fill="white" />
                                </g>
                                <g id="chat-rigth">
                                    <path id="Vector_13" d="M761 438V573H536C536 573 536 600 509 609C509 609 518 591 509 573H446V438H761Z" fill="#C2D1CE" />
                                    <path id="Vector_14" d="M663 465H483V483H663V465Z" fill="white" />
                                    <path id="Vector_15" d="M726 492H483V510H726V492Z" fill="white" />
                                    <path id="Vector_16" d="M699 519H483V537H699V519Z" fill="white" />
                                </g>
                                <g id="ins-icon" style={{ cursor: "pointer" }} onClick={() => window.open('https://www.instagram.com/chepco_vietnam/?hl=en', '_blank')}>
                                    <g id="Group 1">
                                        <path id="Vector_17" d="M463 193H421C415.435 193.016 410.104 195.234 406.169 199.169C402.234 203.103 400.016 208.435 400 214V256C400.016 261.565 402.234 266.897 406.169 270.831C410.104 274.766 415.435 276.984 421 277H463C468.565 276.984 473.897 274.766 477.831 270.831C481.766 266.896 483.984 261.564 484 256V214C483.984 208.436 481.766 203.104 477.831 199.169C473.897 195.234 468.565 193.016 463 193H463ZM442 260.2C437.016 260.2 432.144 258.722 428 255.953C423.855 253.184 420.626 249.248 418.718 244.644C416.811 240.039 416.312 234.972 417.284 230.084C418.257 225.195 420.657 220.705 424.181 217.181C427.705 213.657 432.195 211.257 437.084 210.284C441.972 209.312 447.039 209.811 451.644 211.718C456.248 213.626 460.184 216.856 462.953 221C465.722 225.144 467.2 230.016 467.2 235C467.198 241.683 464.543 248.092 459.817 252.817C455.092 257.543 448.683 260.198 442 260.2V260.2ZM469.3 214C468.054 214 466.836 213.63 465.8 212.938C464.764 212.246 463.956 211.262 463.48 210.111C463.003 208.96 462.878 207.693 463.121 206.471C463.364 205.249 463.964 204.126 464.845 203.245C465.726 202.364 466.849 201.764 468.071 201.521C469.293 201.278 470.56 201.403 471.711 201.88C472.862 202.356 473.846 203.164 474.538 204.2C475.23 205.236 475.6 206.454 475.6 207.7C475.602 208.528 475.44 209.348 475.124 210.113C474.809 210.879 474.345 211.574 473.759 212.159C473.174 212.745 472.478 213.209 471.713 213.525C470.948 213.84 470.128 214.002 469.3 214V214Z" fill="#5E9194" />
                                        <path id="Vector_18" d="M441 137C421.617 137 402.67 142.748 386.554 153.516C370.438 164.284 357.877 179.59 350.46 197.497C343.042 215.404 341.102 235.109 344.883 254.119C348.664 273.129 357.998 290.591 371.704 304.296C385.409 318.002 402.871 327.336 421.881 331.117C440.891 334.898 460.596 332.958 478.503 325.54C496.41 318.123 511.716 305.562 522.484 289.446C533.252 273.33 539 254.383 539 235C539 222.13 536.465 209.387 531.54 197.497C526.615 185.607 519.397 174.804 510.296 165.704C501.196 156.603 490.393 149.385 478.503 144.46C466.613 139.535 453.87 137 441 137V137ZM491.616 254.78C491.593 262.44 488.54 269.78 483.124 275.196C477.708 280.613 470.368 283.665 462.708 283.688H421.412C413.752 283.665 406.413 280.613 400.996 275.196C395.58 269.78 392.527 262.44 392.505 254.78V213.484C392.527 205.824 395.58 198.485 400.996 193.068C406.413 187.652 413.752 184.599 421.412 184.577H462.709C470.368 184.599 477.708 187.652 483.124 193.068C488.541 198.485 491.593 205.824 491.616 213.484L491.616 254.78Z" fill="#5E9194" />
                                        <path id="Vector_19" d="M442 250C450.837 250 458 242.837 458 234C458 225.163 450.837 218 442 218C433.163 218 426 225.163 426 234C426 242.837 433.163 250 442 250Z" fill="#5E9194" />
                                    </g>
                                </g>
                                <path id="fb-icon" style={{ cursor: "pointer" }} onClick={() => window.open('https://www.facebook.com/chepcovietnam', '_blank')} d="M328 415C308.617 415 289.67 420.748 273.554 431.516C257.438 442.284 244.877 457.59 237.46 475.497C230.042 493.404 228.102 513.109 231.883 532.119C235.664 551.129 244.998 568.591 258.704 582.296C272.409 596.002 289.871 605.336 308.881 609.117C327.891 612.898 347.596 610.958 365.503 603.54C383.41 596.123 398.716 583.562 409.484 567.446C420.252 551.33 426 532.383 426 513C426 500.13 423.465 487.387 418.54 475.497C413.615 463.607 406.397 452.804 397.296 443.704C388.196 434.603 377.393 427.385 365.503 422.46C353.613 417.535 340.87 415 328 415V415ZM358.901 474.299H346.356C337.791 474.299 336.156 478.35 336.156 484.321V497.008H356.555L353.89 516.909H336.156V570.927H313.412V516.909H297.1V497.008H313.412V482.295C313.412 464.668 325.637 455.073 341.381 455.073C348.915 455.073 357.017 455.641 358.901 455.89L358.901 474.299Z" fill="#5E9194" />
                            </g>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear" x1="244.766" y1="705.28" x2="527.664" y2="32.7068" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#808080" stop-opacity="0.25" />
                                <stop offset="0.54" stop-color="#808080" stop-opacity="0.12" />
                                <stop offset="1" stop-color="#808080" stop-opacity="0.1" />
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="118463" y1="85005.8" x2="118463" y2="45669.9" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#808080" stop-opacity="0.25" />
                                <stop offset="0.54" stop-color="#808080" stop-opacity="0.12" />
                                <stop offset="1" stop-color="#808080" stop-opacity="0.1" />
                            </linearGradient>
                            <linearGradient id="paint2_linear" x1="125380" y1="79198.6" x2="125380" y2="45014.3" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#808080" stop-opacity="0.25" />
                                <stop offset="0.54" stop-color="#808080" stop-opacity="0.12" />
                                <stop offset="1" stop-color="#808080" stop-opacity="0.1" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className="footer-img-bg">
                <img src={FooterBg} alt="footer pic" className="img-fluid" />
            </div>

        </div>
    )
}

export default Footer
