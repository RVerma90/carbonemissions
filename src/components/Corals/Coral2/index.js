import React, { Component } from 'react';
import './style.css';

class Coral2 extends Component {

    constructor(props) {
        super(props);
    
        this.state = { color1: '#8d25e8' };
        this.state = { color2: '#aeaeae' };
    }    

    render() {
        return (
            <div class="container">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="404.000000pt" height="404.000000pt" viewBox="0 0 3064.000000 3064.000000">
                    <g transform="translate(0.000000,2048.000000) scale(0.100000,-0.100000)"
                    fill={this.state.color1} stroke="none">
                        <path d="M12108 12720 c-44 -34 -52 -69 -39 -173 6 -50 15 -164 21 -252 7 -88
                        38 -347 71 -575 32 -228 68 -492 79 -586 11 -95 25 -195 30 -224 10 -52 10
                        -53 -91 -294 -56 -132 -140 -333 -186 -446 -87 -212 -496 -1161 -498 -1157 -1
                        1 2 40 6 87 4 47 13 195 19 330 6 135 17 335 25 445 8 110 17 262 20 337 l7
                        137 77 42 c190 104 241 152 241 229 0 110 -116 162 -238 105 -30 -14 -56 -25
                        -59 -25 -6 0 4 213 13 270 5 33 14 42 107 100 169 108 367 274 419 352 41 62
                        40 134 -3 183 -51 58 -122 65 -209 20 -32 -16 -113 -79 -247 -193 l-52 -43 2
                        338 c1 186 -2 359 -6 386 -7 38 -18 57 -56 96 -55 56 -101 73 -158 61 -51 -12
                        -88 -56 -102 -121 -30 -137 -42 -261 -48 -472 -6 -222 -7 -228 -23 -200 -10
                        15 -103 165 -208 331 l-191 304 59 116 c43 83 60 127 60 155 0 147 -190 189
                        -261 57 -11 -19 -47 -98 -80 -175 -34 -77 -98 -212 -144 -300 -45 -88 -104
                        -215 -130 -282 l-48 -122 -54 111 c-29 60 -53 112 -53 113 0 2 -49 107 -109
                        233 -60 126 -137 293 -171 370 -74 168 -99 197 -169 197 -61 0 -97 -24 -123
                        -83 -57 -131 -32 -254 119 -590 30 -68 53 -125 51 -127 -2 -3 -96 27 -208 65
                        -113 38 -219 70 -236 70 -68 0 -109 -90 -68 -149 32 -46 257 -127 581 -211 49
                        -12 35 13 203 -375 59 -137 122 -280 139 -317 16 -38 28 -68 26 -68 -3 0 -55
                        30 -117 67 -150 88 -337 188 -371 197 -32 8 -84 -12 -110 -42 -29 -32 -32 -91
                        -7 -130 16 -27 45 -45 128 -84 59 -27 226 -109 371 -181 l264 -132 59 -130
                        c59 -129 233 -532 362 -838 37 -87 98 -225 137 -305 38 -81 66 -142 61 -137
                        -5 6 -78 93 -163 195 -84 102 -213 256 -286 343 -184 220 -383 479 -383 497 0
                        8 18 85 40 170 50 194 50 212 5 257 -33 33 -39 35 -86 31 -72 -7 -94 -33 -114
                        -133 -9 -44 -18 -86 -21 -94 -5 -16 -34 21 -279 364 -98 138 -248 341 -333
                        452 -159 210 -438 543 -486 580 -43 34 -106 39 -160 13 -58 -28 -88 -75 -88
                        -139 0 -62 7 -74 122 -211 53 -63 169 -211 259 -328 183 -242 183 -232 6 -165
                        -159 61 -593 193 -632 193 -45 0 -77 -20 -98 -60 -39 -75 -6 -134 100 -179 41
                        -17 80 -31 86 -31 29 0 391 -105 487 -141 58 -22 149 -51 201 -65 53 -14 131
                        -37 174 -51 l78 -25 136 -176 c75 -98 181 -233 235 -301 54 -68 97 -125 95
                        -127 -2 -3 -249 66 -255 71 -2 2 -17 50 -33 106 -34 115 -68 186 -115 236 -27
                        28 -38 33 -78 33 -39 0 -53 -5 -77 -29 -25 -25 -29 -37 -29 -82 0 -29 5 -81
                        11 -116 6 -35 9 -66 7 -69 -3 -2 -24 3 -48 11 -53 19 -74 19 -114 0 -63 -30
                        -84 -108 -46 -170 29 -48 38 -50 440 -140 330 -74 561 -131 571 -143 4 -4 51
                        -61 105 -127 54 -66 194 -235 313 -375 118 -140 222 -263 230 -274 11 -12 0
                        -9 -35 12 -114 67 -531 296 -734 402 -235 124 -603 325 -886 483 l-181 102
                        -27 155 c-39 217 -84 415 -110 479 -27 67 -63 96 -118 95 -31 -1 -47 -9 -72
                        -33 -29 -29 -31 -36 -29 -94 0 -34 15 -143 32 -241 17 -99 29 -181 27 -183 -7
                        -8 -406 216 -534 300 -101 65 -132 81 -172 85 -111 10 -198 -93 -169 -203 15
                        -57 44 -84 219 -200 272 -181 776 -463 1137 -637 l164 -79 -75 -59 c-102 -83
                        -213 -204 -225 -246 -17 -62 26 -144 77 -144 8 0 13 -3 9 -6 -3 -4 -71 2 -150
                        11 l-144 18 -57 116 c-123 247 -210 363 -281 377 -79 15 -167 -40 -181 -112
                        -13 -70 -4 -92 120 -267 27 -37 46 -70 43 -73 -2 -3 -110 11 -239 31 -129 19
                        -252 35 -275 35 -86 0 -162 -95 -148 -186 7 -51 49 -105 92 -122 51 -20 870
                        -163 1230 -216 l222 -32 -92 -69 c-125 -96 -248 -202 -269 -234 -26 -38 -23
                        -110 5 -152 29 -43 60 -59 121 -59 41 0 62 8 134 52 48 29 157 105 244 169 86
                        65 183 135 215 155 32 21 67 46 78 55 19 16 32 16 245 -17 124 -19 407 -59
                        630 -89 633 -85 682 -93 706 -116 50 -47 107 -45 337 11 67 16 264 59 437 95
                        l315 64 30 -28 c31 -29 346 -173 534 -244 162 -61 237 -53 275 28 20 42 20 78
                        0 121 -20 42 -46 56 -262 145 -159 66 -180 76 -171 82 2 2 96 27 209 56 113
                        30 279 76 369 103 l165 50 70 -33 c39 -19 111 -61 161 -93 68 -45 101 -60 136
                        -64 110 -11 181 93 135 201 -7 18 -38 52 -69 77 -37 29 -52 47 -44 51 6 4 89
                        33 182 64 179 60 215 82 241 142 31 73 6 169 -57 214 -18 13 -52 24 -79 27
                        -49 4 -64 1 -565 -140 -99 -28 -188 -53 -198 -56 -14 -4 -5 22 42 116 73 146
                        126 273 135 325 16 85 -33 147 -115 147 -82 0 -97 -20 -280 -382 -90 -176
                        -167 -321 -173 -323 -6 -2 -110 -33 -231 -69 -121 -36 -292 -88 -380 -116
                        -191 -61 -397 -121 -402 -117 -2 2 34 32 79 67 44 35 163 131 262 215 1022
                        854 1073 895 1115 895 14 0 86 -4 161 -10 74 -5 223 -14 330 -20 107 -6 266
                        -15 353 -22 178 -13 215 -7 261 41 58 60 39 167 -35 204 -40 19 -202 36 -540
                        58 l-196 12 116 85 c271 197 478 376 532 461 65 101 16 219 -97 236 -83 13
                        -226 -67 -489 -274 -60 -48 -150 -116 -200 -151 -141 -100 -351 -261 -455
                        -348 -52 -44 -96 -79 -97 -78 -2 1 6 52 17 114 37 220 35 333 -8 391 -49 66
                        -143 90 -216 56 -78 -37 -99 -101 -121 -365 -15 -174 -40 -360 -65 -477 l-11
                        -52 -222 -172 c-276 -215 -446 -352 -609 -491 -69 -59 -128 -108 -131 -108 -3
                        0 19 55 50 123 102 228 495 1165 517 1232 6 21 122 112 373 290 84 60 228 169
                        320 242 149 119 171 134 198 129 17 -3 103 -8 192 -12 l162 -7 36 36 c27 27
                        35 43 35 72 0 76 -46 117 -150 130 l-54 7 52 47 c343 302 392 356 392 434 0
                        127 -140 213 -252 155 -10 -5 -59 -46 -110 -91 -51 -45 -158 -137 -238 -204
                        -179 -149 -368 -320 -579 -522 -89 -84 -161 -151 -161 -148 0 2 12 36 26 73
                        14 38 54 150 88 249 77 220 176 462 269 655 211 440 278 613 279 717 0 56 -27
                        99 -77 123 -49 24 -74 25 -118 6 -50 -21 -74 -54 -102 -144 -14 -45 -70 -172
                        -124 -281 -112 -228 -130 -268 -257 -596 -82 -212 -93 -235 -98 -205 -3 19
                        -15 109 -26 200 -11 91 -27 203 -35 250 -8 47 -15 93 -15 102 0 9 46 54 103
                        101 114 94 183 165 197 203 32 84 -24 164 -114 164 -28 0 -48 -11 -97 -52
                        -128 -110 -129 -110 -133 -96 -2 7 -12 92 -21 188 -19 211 -27 241 -66 274
                        -39 33 -113 36 -151 6z m-1405 -1017 c20 -32 92 -159 162 -283 70 -124 148
                        -256 173 -295 25 -38 80 -153 123 -255 l79 -185 0 -113 0 -114 -82 78 c-116
                        109 -189 154 -247 154 -53 0 -84 -18 -106 -60 -43 -84 -4 -149 241 -403 187
                        -193 192 -199 188 -235 -9 -86 -24 -362 -24 -451 l0 -96 -99 245 c-54 135
                        -115 281 -136 325 -20 44 -73 163 -117 265 -44 102 -135 307 -203 455 -67 149
                        -146 322 -174 386 l-52 115 71 165 c76 174 161 359 166 359 1 0 18 -26 37 -57z
                        m-828 -2676 c341 -173 773 -409 757 -415 -5 -1 -146 24 -313 57 -428 85 -736
                        136 -1009 169 -184 23 -227 31 -198 37 26 5 60 28 112 76 99 89 298 238 321
                        238 6 0 154 -73 330 -162z"/>
                         <animate attributeType="CSS" attributeName="fill" 
                            from="#8d25e8" to="#aeaeae" dur="5s" repeatCount="once" />
                    </g>
                </svg>
            </div>
        );
    }
}

export default Coral2;
