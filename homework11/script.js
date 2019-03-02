var step;

// leve_l
for (step = 0; step <= 1; step++) {
    north();
}
// level_2
for (step = 0; step <= 15; step++) {
    east();
}
// level_3
for (step = 0; step <= 6; step++) {
    south();
    east();
}
// level_4
for (step = 0; step < 1; step++) {
    south();

    for(step = 0; step <= 2; step++){
        east();
    }
    for(step = 0; step <= 1; step++){
        south();
    }
    east();
    for(step = 0; step <= 2; step++){
        south();
    }
    for(step = 0; step < 2; step++){
        east();
    }
    south();
}
// level_5
    for(step = 0; step < 6; step++){
        east();
    }
    for(step = 0; step < 2; step++){
        south();
    }
    for(step = 0; step < 2; step++){
        west();
    }
    for(step = 0; step < 3; step++){
        south();
    }
    for(step = 0; step < 2; step++){
        west();
    }
    for(step = 0; step < 3; step++){
        north();
    }
    for(step = 0; step < 2; step++){
        west();
    }
    for(step = 0; step <= 4; step++){
        south();
    }
    for(step = 0; step < 6; step++){
        east();
    }
// level_6
for(step = 0; step < 5; step++){
    south();
}
for(step = 0; step < 2; step++){
    east();
}
for(step = 0; step < 3; step++){
    north();
}
east();
for(step = 0; step < 2; step++){
    north();
}
for(step = 0; step < 3; step++){
    east();
}
for(step = 0; step < 4; step++){
    south();
}
for(step = 0; step < 2; step++){
    west();
}
for(step = 0; step < 3; step++){
    south();
}
for(step = 0; step < 2; step++){
    east();
}
// level_7
for(step = 0; step < 11; step++){
    south();
}
for(step = 0; step < 4; step++){
    east();
}
for(step = 0; step < 11; step++){
    north();
}
east();
for (step = 0; step < 2; step++) {
    east();
    south();
}
for(step = 0; step < 4; step++){
    south();
}
west();
for(step = 0; step < 7; step++){
    south();
}
for(step = 0; step < 8; step++){
    east();
}
for(step = 0; step < 9; step++){
    south();
}
east();
//end