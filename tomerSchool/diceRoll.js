const rollButton = document.getElementById("rollButton");
const cpuDiceResult = document.getElementById("cpuDiceResult");
const playerDiceResult = document.getElementById("playerDiceResult");

function rollDice() {
  cpuDiceResult.classList.remove("dice-dropped");
  playerDiceResult.classList.remove("dice-dropped");
  setTimeout(() => {
    cpuDiceResult.classList.add("dice-dropped");
    playerDiceResult.classList.add("dice-dropped");
  }, 10);
  const animationInterval = setInterval(() => {
    const randomFrame1 = Math.floor(Math.random() * 6) + 1;
    const randomFrame2 = Math.floor(Math.random() * 6) + 1;
    const randomFrame3 = Math.floor(Math.random() * 6) + 1;
    const randomFrame4 = Math.floor(Math.random() * 6) + 1;
    const rollingCpuHTML = `
      <img src="diceResult/animation${randomFrame1}.png" alt="Rolling Dice">
      <img src="diceResult/animation${randomFrame2}.png" alt="Rolling Dice">
    `;
    const rollingPlayerHTML = `
      <img src="diceResult/animation${randomFrame3}.png" alt="Rolling Dice">
      <img src="diceResult/animation${randomFrame4}.png" alt="Rolling Dice">
    `;
    cpuDiceResult.innerHTML = rollingCpuHTML;
    playerDiceResult.innerHTML = rollingPlayerHTML;
  }, 100);
  setTimeout(() => {
    clearInterval(animationInterval);

    //   const allDiceImages = document.querySelectorAll(".diceResult img");
    //   allDiceImages.forEach((img) => img.classList.remove("dice-dropped"));
    //   const animationInterval = setInterval(() => {
    //     const randomFrame1 = Math.floor(Math.random() * 6) + 1;
    //     const randomFrame2 = Math.floor(Math.random() * 6) + 1;
    //     const randomFrame3 = Math.floor(Math.random() * 6) + 1;
    //     const randomFrame4 = Math.floor(Math.random() * 6) + 1;
    //     const rollingCpuHTML = `
    //       <img src="diceResult/animation${randomFrame1}.png" alt="Rolling Dice">
    //       <img src="diceResult/animation${randomFrame2}.png" alt="Rolling Dice">
    //     `;
    //     const rollingPlayerHTML = `
    //       <img src="diceResult/animation${randomFrame3}.png" alt="Rolling Dice">
    //       <img src="diceResult/animation${randomFrame4}.png" alt="Rolling Dice">
    //     `;
    //     cpuDiceResult.innerHTML = rollingCpuHTML;
    //     playerDiceResult.innerHTML = rollingPlayerHTML;
    //   }, 100);
    //   setTimeout(() => {
    //     clearInterval(animationInterval);

    const cpuDie1 = Math.floor(Math.random() * 6) + 1;
    const cpuDie2 = Math.floor(Math.random() * 6) + 1;
    const playerDie1 = Math.floor(Math.random() * 6) + 1;
    const playerDie2 = Math.floor(Math.random() * 6) + 1;

    const finalCpuDiceHTML = `
        <img src="diceResult/dice${cpuDie1}.png" alt="Dice value ${cpuDie1}">
        <img src="diceResult/dice${cpuDie2}.png" alt="Dice value ${cpuDie2}">
      `;
    const finalPlayerDiceHTML = `
        <img src="diceResult/dice${playerDie1}.png" alt="Dice value ${playerDie1}">
        <img src="diceResult/dice${playerDie2}.png" alt="Dice value ${playerDie2}">
      `;
    cpuDiceResult.innerHTML = finalCpuDiceHTML;
    playerDiceResult.innerHTML = finalPlayerDiceHTML;
  }, 1000);
}
rollButton.addEventListener("click", rollDice);
//     const finalDiceImages = document.querySelectorAll(".diceResult img");
//     finalDiceImages.forEach((img) => img.classList.add("dice-dropped"));
//   }, 1300);
