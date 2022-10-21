function arrayRotation(array, rotations) {

    let swap = 0;

    while (0 < rotations) {
        swap = array.shift()
        rotations--;
        array.push(swap);
    }
    console.log(array.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);