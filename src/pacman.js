//------ VARAIBLES -----
var worlds = [
    [// WORLD 0
        //01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23
        [ 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2 ], // 01
        [ 2, 2, 1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 2, 2 ], // 02
        [ 2, 2, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 2, 2 ], // 03
        [ 2, 2, 1, 0, 1, 1, 0, 1, 0, 1, 0, 3, 0, 1, 0, 1, 0, 1, 1, 0, 1, 2, 2 ], // 04
        [ 2, 2, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 2, 2 ], // 05
        [ 2, 2, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 2, 2 ], // 06
        [ 2, 2, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 2, 2 ], // 07
        [ 2, 2, 1, 0, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 0, 1, 2, 2 ], // 08
        [ 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2 ], // 09
        [ 2, 2, 1, 1, 0, 1, 1, 1, 2, 2, 1, 2, 1, 2, 2, 1, 1, 1, 0, 1, 1, 2, 2 ], // 10
        [ 2, 2, 2, 1, 0, 0, 0, 1, 2, 2, 1, 2, 1, 2, 2, 1, 3, 0, 0, 1, 2, 2, 6 ], // 11
        [ 2, 2, 2, 1, 0, 1, 0, 1, 2, 2, 1, 1, 1, 2, 2, 1, 0, 1, 0, 1, 2, 2, 2 ], // 12
        [ 2, 2, 2, 1, 0, 1, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 1, 0, 1, 2, 2, 2 ], // 13
        [ 2, 2, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 2, 2 ], // 14
        [ 5, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 6 ], // 15
        [ 2, 2, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 2, 2 ], // 16
        [ 2, 2, 1, 0, 0, 0, 0, 1, 0, 1, 0, 3, 0, 1, 0, 1, 0, 0, 0, 0, 1, 2, 2 ], // 17
        [ 2, 2, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 2, 2 ], // 18
        [ 2, 2, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 2, 2 ], // 19
        [ 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2 ], // 20
        [ 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2 ]  // 21
    ],
    [// WORLD 1
        //01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 
        [ 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2 ], // 01
        [ 2, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 1, 2, 2 ], // 02
        [ 2, 2, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 2, 2 ], // 03
        [ 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2 ], // 04
        [ 2, 2, 1, 1, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 2, 2 ], // 05
        [ 2, 2, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 2, 2 ], // 06
        [ 2, 2, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 2, 2 ], // 07
        [ 2, 2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, 0, 1, 2, 2 ], // 08
        [ 2, 1, 1, 1, 0, 1, 0, 1, 1, 2, 1, 2, 1, 2, 1, 1, 0, 1, 0, 1, 1, 1, 2 ], // 09
        [ 5, 2, 2, 0, 0, 0, 0, 1, 1, 2, 1, 2, 1, 2, 1, 1, 0, 0, 0, 0, 2, 2, 6 ], // 10
        [ 2, 1, 1, 1, 0, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 0, 1, 1, 1, 2 ], // 11
        [ 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2 ], // 12
        [ 2, 2, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 2, 2 ], // 13
        [ 2, 2, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 2, 2 ], // 14
        [ 2, 2, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 2, 2 ], // 15
        [ 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2 ], // 16
        [ 2, 2, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 2, 2 ], // 17
        [ 2, 2, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 2, 2 ], // 18
        [ 2, 2, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 2, 2 ], // 19
        [ 2, 2, 1, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 1, 2, 2 ], // 20
        [ 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2 ]  // 21
    ],
    [// WORLD 2
        //01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23
        [ 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2 ], // 01
        [ 2, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 1, 2, 2 ], // 02
        [ 2, 2, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 2, 2 ], // 03
        [ 2, 2, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 2, 2 ], // 04
        [ 2, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 2, 2 ], // 05
        [ 2, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 2, 2 ], // 06
        [ 2, 2, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 2, 2 ], // 07
        [ 2, 2, 1, 1, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 1, 1, 2, 2 ], // 08
        [ 2, 2, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 1, 1, 2, 2 ], // 09
        [ 2, 1, 1, 1, 2, 1, 0, 1, 1, 2, 1, 2, 1, 2, 1, 1, 0, 1, 2, 1, 1, 1, 2 ], // 10
        [ 5, 2, 2, 2, 2, 1, 0, 1, 1, 2, 1, 2, 1, 2, 1, 1, 0, 1, 2, 2, 2, 2, 6 ], // 11
        [ 2, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 2 ], // 12
        [ 5, 2, 2, 2, 2, 1, 0, 1, 1, 2, 2, 2, 2, 2, 1, 1, 0, 1, 2, 2, 2, 2, 6 ], // 13
        [ 2, 1, 1, 1, 2, 1, 0, 1, 2, 3, 1, 1, 1, 3, 2, 1, 0, 1, 2, 1, 1, 1, 2 ], // 14
        [ 2, 2, 1, 1, 0, 0, 0, 1, 2, 1, 1, 1, 1, 1, 2, 1, 0, 0, 0, 1, 1, 2, 2 ], // 15
        [ 2, 2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 2, 2 ], // 16
        [ 2, 2, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 2, 2 ], // 17
        [ 2, 2, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 2, 2 ], // 18
        [ 2, 2, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 2, 2 ], // 19
        [ 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2 ], // 20
        [ 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2 ]  // 21
    ],
    [// WORLD 3
        //01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23
        [ 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2 ], // 01
        [ 2, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 2, 2 ], // 02
        [ 2, 2, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 2, 2 ], // 03
        [ 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2 ], // 04
        [ 2, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 2 ], // 05
        [ 5, 2, 2, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 2, 6 ], // 06
        [ 2, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 2 ], // 07
        [ 2, 2, 1, 0, 0, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 0, 0, 1, 2, 2 ], // 08
        [ 2, 2, 1, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 1, 2, 2 ], // 09
        [ 2, 2, 1, 0, 0, 0, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 0, 0, 0, 1, 2, 2 ], // 10
        [ 5, 2, 1, 0, 1, 0, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 0, 1, 0, 1, 2, 6 ], // 11
        [ 2, 2, 1, 0, 1, 0, 0, 1, 1, 2, 1, 1, 1, 2, 1, 1, 0, 0, 1, 0, 1, 2, 2 ], // 12
        [ 5, 2, 1, 0, 1, 1, 0, 1, 0, 2, 2, 2, 2, 2, 0, 1, 0, 1, 1, 0, 1, 2, 2 ], // 13
        [ 2, 2, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 2, 2 ], // 14
        [ 2, 2, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 2, 2 ], // 15
        [ 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2 ], // 16
        [ 2, 2, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 2, 2 ], // 17
        [ 2, 2, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 2, 2 ], // 18
        [ 2, 2, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 2, 2 ], // 19
        [ 2, 2, 1, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3, 1, 2, 2 ], // 20
        [ 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2 ]  // 21
    ],
    [// WORLD 4
        //01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23
        [ 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2 ], // 01
        [ 2, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2 ], // 02
        [ 2, 2, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 2, 2 ], // 03
        [ 2, 2, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 2, 2 ], // 04
        [ 2, 1, 1, 0, 1, 0, 1, 1, 2, 1, 0, 1, 0, 1, 2, 1, 1, 0, 1, 0, 1, 1, 2 ], // 05
        [ 5, 2, 2, 0, 0, 0, 0, 1, 2, 1, 0, 1, 0, 1, 2, 1, 0, 0, 0, 0, 2, 2, 6 ], // 06
        [ 2, 1, 1, 0, 1, 1, 0, 1, 2, 1, 0, 3, 0, 1, 2, 1, 0, 1, 1, 0, 1, 1, 2 ], // 07
        [ 2, 2, 1, 0, 0, 1, 0, 1, 2, 1, 1, 1, 1, 1, 2, 1, 0, 1, 0, 0, 1, 2, 2 ], // 08
        [ 2, 2, 1, 1, 0, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1, 0, 1, 1, 2, 2 ], // 09
        [ 2, 2, 2, 1, 0, 1, 1, 0, 1, 2, 1, 2, 1, 2, 1, 0, 1, 1, 0, 1, 2, 2, 2 ], // 10
        [ 2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 1, 2, 1, 2, 1, 0, 0, 0, 0, 1, 2, 2, 2 ], // 11
        [ 2, 2, 2, 1, 0, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 0, 1, 2, 2,26 ], // 12
        [ 2, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 2 ], // 13
        [ 5, 2, 2, 2, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 2, 2, 2, 6 ], // 14
        [ 2, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 2 ], // 15
        [ 2, 2, 1, 0, 0, 0, 0, 1, 1, 0, 0, 3, 0, 0, 1, 1, 0, 0, 0, 0, 1, 2, 2 ], // 16
        [ 2, 2, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 2, 2 ], // 17
        [ 2, 2, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 2, 2 ], // 18
        [ 2, 2, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 2, 2 ], // 19
        [ 2, 2, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2 ], // 20
        [ 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2 ]  // 21
    ]
];
var maxScore = [1690,1880,1500,1720,1600];
var mapTiles = ["coin", "brick", "empty", "cherry", "empty", "empty", "empty", ]
var score = 0;
var pacmanPosition = {
    x: 3,
    y: 1
};
var ghostPositions = [
    {
        x:11,
        y:10
    },
    {
        x:11,
        y:10
    },
    {
        x:11,
        y:10
    },
    {
        x:11,
        y:10
    }
];
var pathChecker = {
    top: true,
    down: true,
    left: true,
    right: true
};

var pacmanMoveInterval;
var ghostMoveInterval = [];
var pacmanSpeed = 200;
var ghostSpeed = 200;

//------ END OF: VARIABLES -----

//------ FUNCTIONS -----
function randomWorld(){ //-- Generate Random World Number
    return Math.floor(Math.random() * 5);
}

function displayWorld(){ //-- Dispaly the Generated Random World
    var output = '';

    for(var i = 0; i < worlds[worldNumber].length; i++){
        output += "\n<div class='row'>\n";
        for(var j = 0; j < worlds[worldNumber][i].length; j++){
            var mapTileNumber = worlds[worldNumber][i][j];

            output += "<div class='"+mapTiles[mapTileNumber]+"'></div>";
        }
        output += "\n</div>";
    }
    document.getElementById("world").innerHTML = output;
}

function displayPacman(){
    document.getElementById("pacman").style.top = pacmanPosition.y*20 + "px";
    document.getElementById("pacman").style.left = pacmanPosition.x*20 + "px";
}
function pacmanPathCheck(){
    var top = worlds[worldNumber][pacmanPosition.y - 1][pacmanPosition.x];
    var down = worlds[worldNumber][pacmanPosition.y + 1][pacmanPosition.x];
    var left = worlds[worldNumber][pacmanPosition.y][pacmanPosition.x - 1];
    var right = worlds[worldNumber][pacmanPosition.y][pacmanPosition.x + 1];

    if(top == 1){   //checking top
        pathChecker.top = false;
    }
    else{
        pathChecker.top = true;
    }

    if(down == 1){  //checking down
        pathChecker.down = false;
    }
    else{
        pathChecker.down = true;
    }

    if(left == 1){  //checking left
        pathChecker.left = false;
    }
    else{
        pathChecker.left = true;
    }

    if(right == 1){ //checking right
        pathChecker.right = false;
    }
    else{
        pathChecker.right = true;
    }

}

function pacmanTeleport(direction){

    if(direction == "left"){
        if(worlds[worldNumber][pacmanPosition.y][pacmanPosition.x] == 5){
            pacmanPosition.x = 22;
        }
    }
    else if(direction == "right"){
        if(worlds[worldNumber][pacmanPosition.y][pacmanPosition.x] == 6){
            pacmanPosition.x = 0;
        }
    }
}

function ghostTeleport(ghostNumber, direction){

    if(direction == "left"){
        if(worlds[worldNumber][ghostPositions[ghostNumber].y][ghostPositions[ghostNumber].x] == 5){
            ghostPositions[ghostNumber].x = 22;
        }
    }
    else if(direction == "right"){
        if(worlds[worldNumber][ghostPositions[ghostNumber].y][ghostPositions[ghostNumber].x] == 6){
            ghostPositions[ghostNumber].x = 0;
        }
    }
}

function movePacman(code){
    var direction = "";
    if(code == 40){         // DOWN
        if(pathChecker.down == true){ //Check if DOWN is not a wall
            window.clearInterval(pacmanMoveInterval);

            pacmanMoveInterval = window.setInterval(function(){
                pacmanPosition.y++;
                document.getElementById("pacman").style.backgroundImage = "url(images/pacman-down.gif";
                direction = "down";

                pacmanWallCollision(direction);
                displayPacman();
                updateScore();      
            }, pacmanSpeed);
        }
    }
    else if(code == 38){    // TOP
        if(pathChecker.top == true){ //Check if TOP is not a wall
            window.clearInterval(pacmanMoveInterval);

            pacmanMoveInterval = window.setInterval(function(){
                pacmanPosition.y--; 
                document.getElementById("pacman").style.backgroundImage = "url(images/pacman-top.gif";
                direction = "top";

                pacmanWallCollision(direction);
                displayPacman();
                updateScore();  
            }, pacmanSpeed);
        }
    }
    else if(code == 39){    // RIGHT
        if(pathChecker.right == true){ //Check if RIGHT is not a wall
            window.clearInterval(pacmanMoveInterval);

            pacmanMoveInterval = window.setInterval(function(){
                pacmanPosition.x++;
                document.getElementById("pacman").style.backgroundImage = "url(images/pacman-right.gif";
                direction = "right";
    
                pacmanWallCollision(direction);
                pacmanTeleport(direction);
                displayPacman();
                updateScore();         
            }, pacmanSpeed);
        }
    }
    else if(code == 37){    // LEFT
        if(pathChecker.left == true){ //Check if LEFT is not a wall
            window.clearInterval(pacmanMoveInterval);

            pacmanMoveInterval = window.setInterval(function(){
                pacmanPosition.x--;
                document.getElementById("pacman").style.backgroundImage = "url(images/pacman-left.gif";
                direction = "left";

                pacmanWallCollision(direction);
                pacmanTeleport(direction);
                displayPacman();
                updateScore();     
            }, pacmanSpeed);
        }
    }
}

function updateScore(){
    if(worlds[worldNumber][pacmanPosition.y][pacmanPosition.x] == 0){
        worlds[worldNumber][pacmanPosition.y][pacmanPosition.x] = 2;
        score += 10;
        displayWorld();
        displayScore();
    }
    else if(worlds[worldNumber][pacmanPosition.y][pacmanPosition.x] == 3){
        worlds[worldNumber][pacmanPosition.y][pacmanPosition.x] = 2;
        score += 20;
        displayWorld();
        displayScore();
    }

    if(score == maxScore[worldNumber]){
        winMessage();
        stopAllMovements();
        /* collision = true;
        stopMove(); */
    }
}

function displayScore(){
    var printScore = score.toString();
    document.getElementById("score").innerHTML = "Score: "+printScore;
}

function winMessage(){
    document.getElementById("message").innerHTML = "YOU WIN!!";
    document.getElementById("message").style.color = "white";
}

function displayGhost(){
    for(var i = 0; i < ghostPositions.length; i++){
        document.getElementById("container").innerHTML += "<div id='ghost"+i+"' class='ghost'></div>";
        document.getElementById("ghost"+i+"").style.top = ghostPositions[i].y*20 + "px";
        document.getElementById("ghost"+i+"").style.left = ghostPositions[i].x*20 + "px";
    }

    for(var i = 0; i < ghostPositions.length; i++){
        moveGhost(i);
    }
}

function updateGhostLoc(ghostNumber){
    document.getElementById("ghost"+ghostNumber+"").style.top = ghostPositions[ghostNumber].y*20 + "px";
    document.getElementById("ghost"+ghostNumber+"").style.left = ghostPositions[ghostNumber].x*20 + "px";
}

function moveGhost(ghostNumber){
    var direction = "";

        direction = ghostDirection();

         if(direction == "top"){
            ghostMoveInterval[ghostNumber] = window.setInterval(function(){
                ghostPositions[ghostNumber].y--;

                ghostWallCollision(ghostNumber, direction);
                pacmanGhostCollision();
                updateGhostLoc(ghostNumber);
            }, ghostSpeed);
        }
        else if(direction == "down"){
            ghostMoveInterval[ghostNumber] = window.setInterval(function(){
                ghostPositions[ghostNumber].y++;

                ghostWallCollision(ghostNumber, direction);
                pacmanGhostCollision();
                updateGhostLoc(ghostNumber);
            }, ghostSpeed);
        }
        else if(direction == "left"){
            ghostMoveInterval[ghostNumber] = window.setInterval(function(){
                ghostPositions[ghostNumber].x--;

                ghostWallCollision(ghostNumber, direction);
                ghostTeleport(ghostNumber, direction);
                pacmanGhostCollision();
                updateGhostLoc(ghostNumber);
            }, ghostSpeed);
        }
        else if(direction == "right"){
            ghostMoveInterval[ghostNumber] = window.setInterval(function(){
                ghostPositions[ghostNumber].x++;

                ghostWallCollision(ghostNumber, direction);
                ghostTeleport(ghostNumber, direction);
                pacmanGhostCollision();
                updateGhostLoc(ghostNumber);
            }, ghostSpeed);
        } 
    
}

function ghostDirection(){
    var directions = ["top","down","left","right"];
    var selectedDirection = directions[Math.floor(Math.random() * 4)];

    return selectedDirection;
}

function gameOver(){
    document.getElementById("message").innerHTML = "GAME OVER!!";
    document.getElementById("message").style.color = "red";
}

function pacmanWallCollision(direction){
    var pacmanCurrentLoc = worlds[worldNumber][pacmanPosition.y][pacmanPosition.x];
    
        if(direction == "right"){
            if(pacmanCurrentLoc == 1){
                pacmanPosition.x --;
                window.clearInterval(pacmanMoveInterval);
            }
        }
        else if(direction == "left"){
            if(pacmanCurrentLoc == 1){
                pacmanPosition.x ++;
                window.clearInterval(pacmanMoveInterval);
            }
        }
        else if(direction == "top"){
            if(pacmanCurrentLoc == 1){
                pacmanPosition.y ++;
                window.clearInterval(pacmanMoveInterval);
            }
        }
        else if(direction == "down"){
            if(pacmanCurrentLoc == 1){
                pacmanPosition.y --;
                window.clearInterval(pacmanMoveInterval);
            }
        }
    
}

function pacmanGhostCollision(){
    for(var i = 0; i < ghostPositions.length; i++){
        if(pacmanPosition.x == ghostPositions[i].x && pacmanPosition.y == ghostPositions[i].y ){
            stopAllMovements();
            gameOver();
        }
    }
}

function ghostWallCollision(ghostNumber, direction){
    var ghostCurrentLoc = worlds[worldNumber][ghostPositions[ghostNumber].y][ghostPositions[ghostNumber].x];

    if(direction == "right"){
        if(ghostCurrentLoc == 1){
            ghostPositions[ghostNumber].x --;
            window.clearInterval(ghostMoveInterval[ghostNumber]);
            moveGhost(ghostNumber);
        }
    }
    else if(direction == "left"){
        if(ghostCurrentLoc == 1){
            ghostPositions[ghostNumber].x ++;
            window.clearInterval(ghostMoveInterval[ghostNumber]);
            moveGhost(ghostNumber);
        }
    }
    else if(direction == "top"){
        if(ghostCurrentLoc == 1){
            ghostPositions[ghostNumber].y ++;
            window.clearInterval(ghostMoveInterval[ghostNumber]);
            moveGhost(ghostNumber);
        }
    }
    else if(direction == "down"){
        if(ghostCurrentLoc == 1){
            ghostPositions[ghostNumber].y --;
            window.clearInterval(ghostMoveInterval[ghostNumber]);
            moveGhost(ghostNumber);
        }
    }
}

function stopAllMovements(){
    window.clearInterval(pacmanMoveInterval);
    for(i= 0; i <ghostPositions.length; i++){
        window.clearInterval(ghostMoveInterval[i]);
    }
    document.onkeydown = function(e){
        e.preventDefault();
    }
}
//------ END OF: FUNCTIONS -----

//----- START OF MAIN INITIALIZATION OF PROGRAM -----
var worldNumber = randomWorld();
displayWorld(worldNumber);
displayPacman();
if(worldNumber == 1){
    for(var i = 0; i < ghostPositions.length; i++){
        ghostPositions[i].y -= 1;
    }
}
displayGhost();
pacmanPathCheck();
displayScore();

//-> Start of PACAMAN MOVEMENTS
    document.onkeydown = function(event){
        pacmanPathCheck();
        movePacman(event.keyCode);
    }
//-> END OF PACMAN MOVEMENTS 

//----- END OF: MAIN INITIALIZATION OF PROGRAM -----

