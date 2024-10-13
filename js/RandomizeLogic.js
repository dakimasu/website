async function Randomize() {
    const Display = document.getElementById("Result");
    const delay = ms => new Promise(res => setTimeout(res, ms)); // Stolen off of Stack Overflow

    new Audio("../sound/Gamble.wav").play();

    const PoolOfExercises = await fetch("../pages/Exercises.json").then(result => result.json());

    for (let index = 0; index < PoolOfExercises.length; index++) {
        const RandomExerciseIndex = Math.floor(Math.random() * PoolOfExercises.length);
        const RandomExercise = PoolOfExercises[RandomExerciseIndex];
        Display.innerText = RandomExercise[0];
        Display.href = RandomExercise[1];
        await delay(100);
    }
}
