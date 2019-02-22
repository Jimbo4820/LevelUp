function game() {
    var step;
    function level_1(){
        for (step = 0; step < 15; step++) {
            east();
        } 
    }
    level_1();

    function level_2() {
        for(step = 0; step <= 10; step++){
            south();
        }

        for(step =0; step <=30; step++){
            east();
        }
    }
    level_2();

    function level_3() {
        for(step = 0; step < 41; step++){
            east();
        }

        for(step = 0; step < 41; step++){
            south();
        }
        for(step = 0; step <= 20; step++){
            west();
        }
    }
    level_3();

    function level_4() {
        for(step = 0; step < 51; step++){
            east();
        }

        for(step = 0; step < 61; step++){
            south();
        }
        for(step = 0; step <= 30; step++){
            west();
        }
        for(step = 0; step <=20; step++){
            north();
        }
    }
    level_4();
    
    function level_5() {
        for(step = 0; step < 51; step++){
            east();
        }

        for(step = 0; step < 61; step++){
            south();
        }
        for(step = 0; step <= 30; step++){
            east();
        }
        for(step = 0; step <=20; step++){
            north();
        }
        for (step = 0; step < 68; step++) {
            esst();
        }
    }
    level_5();

    function level_6() {
        for (step = 0; step < 51; step++) {
            east();
        }
        for (step = 0; step < 61; step++) {
            south();
        }
        for (step = 0; step <= 30; step++){
            east();
        }
        for (step = 0; step <= 20; step++) {
            north();
        }
        for (step = 0; step < 68; step++){
            east();
        }
        for (step = 0; step <= 200; step++){
            south();
        }
    }
    level_6();

    function level_7() {
        for (step = 0; step < 51; step++) {
            east();
        }
        for (step = 0; step < 61; step++) {
            south();
        }
        for (step = 0; step <= 30; step++){
            east();
        }
        for (step = 0; step <= 20; step++) {
            north();
        }
        for (step = 0; step < 68; step++){
            east();
        }
        for (step = 0; step <= 200; step++){
            south();
        }
        for (step = 0; step<= 80; step++){
            east();
        }
    }
    level_7();

    function level_8() {
        for (step = 0; step < 51; step++) {
            east();
        }
        for (step = 0; step < 61; step++) {
            south();
        }
        for (step = 0; step <= 30; step++){
            east();
        }
        for (step = 0; step <= 20; step++) {
            north();
        }
        for (step = 0; step < 68; step++){
            east();
        }
        for (step = 0; step <= 200; step++){
            south();
        }
        for (step = 0; step<= 80; step++){
            east();
        }
        for (step = 0; step <= 100; step++) {
            south();
        }
    }
    level_8();

    function level_9() {
        for (step = 0; step < 51; step++) {
            east();
        }
        for (step = 0; step < 61; step++) {
            south();
        }
        for (step = 0; step <= 30; step++){
            east();
        }
        for (step = 0; step <= 20; step++) {
            north();
        }
        for (step = 0; step < 68; step++){
            east();
        }
        for (step = 0; step <= 200; step++){
            south();
        }
        for (step = 0; step<= 80; step++){
            east();
        }
        for (step = 0; step <= 100; step++) {
            south();
        }
        for (step = 0; step < 300; step++) {
            west();
        }
    }
    level_9();

    function level_10() {
        for (step = 0; step < 51; step++) {
            east();
        }
        for (step = 0; step < 61; step++) {
            south();
        }
        for (step = 0; step <= 30; step++){
            east();
        }
        for (step = 0; step <= 20; step++) {
            north();
        }
        for (step = 0; step < 68; step++){
            east();
        }
        for (step = 0; step <= 200; step++){
            south();
        }
        for (step = 0; step<= 80; step++){
            east();
        }
        for (step = 0; step <= 100; step++) {
            south();
        }
        for (step = 0; step < 300; step++) {
            west();
        }
        for (let step = 0; step < 50; step++) {
            south();
        }
    }
    level_10();
}

game();