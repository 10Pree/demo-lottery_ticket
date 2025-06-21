import Swal from 'sweetalert2'

// จาก From
const rewardOne = document.getElementById('reward_One')
const sideRewardOne1 = document.getElementById('side_reward_One_1')
const sideRewardOne2 = document.getElementById('side_reward_One_2')
const rewardTwo1 = document.getElementById('reward_Two_1')
const rewardTwo2 = document.getElementById('reward_Two_2')
const rewardTwo3 = document.getElementById('reward_Two_3')
const lastreward = document.getElementById('last_reward')
const ButtonRandom = document.getElementById('btn_random_reward')
const ButtonCheckReward = document.getElementById('check_reward')

// show 
const showRewardOne = localStorage.getItem('rewardOne')
const showsideRewardOne1 = localStorage.getItem('sideRewardOne1')
const showsideRewardOne2 = localStorage.getItem('sideRewardOne2')
const showRewardTwo1 = localStorage.getItem('rewardTwo1')
const showRewardTwo2 = localStorage.getItem('rewardTwo2')
const showRewardTwo3 = localStorage.getItem('rewardTwo3')
const showLastReward = localStorage.getItem('last_reward')

// console.log(inputNumber.value)

if (showRewardOne && showsideRewardOne1 && showsideRewardOne2 && showRewardTwo1 && showRewardTwo2 && showRewardTwo3 && showLastReward) {
    rewardOne.textContent = showRewardOne
    sideRewardOne1.textContent = showsideRewardOne1
    sideRewardOne2.textContent = showsideRewardOne2
    rewardTwo1.textContent = showRewardTwo1
    rewardTwo2.textContent = showRewardTwo2
    rewardTwo3.textContent = showRewardTwo3
    lastreward.textContent = showLastReward
}

// สุ่มรางวัล
const randomReward = () => {
    // รางวัลที่ 1
    const randomRewardOne = Math.floor(Math.random() * (999 - 100 + 1)) + 100
    rewardOne.textContent = randomRewardOne
    localStorage.setItem('rewardOne', randomRewardOne)

    // รางวัลเลขข้างเคียงรางวัลที่ 1 
    const side1 = randomRewardOne + 1
    const side2 = randomRewardOne - 1
    sideRewardOne1.textContent = side1
    sideRewardOne2.textContent = side2
    localStorage.setItem('sideRewardOne1', side1)
    localStorage.setItem('sideRewardOne2', side2)

    // รางวัลที่ 2
    const randomRewardTwo1 = Math.floor(Math.random() * (999 - 100 + 1)) + 100
    const randomRewardTwo2 = Math.floor(Math.random() * (999 - 100 + 1)) + 100
    const randomRewardTwo3 = Math.floor(Math.random() * (999 - 100 + 1)) + 100

    rewardTwo1.textContent = randomRewardTwo1
    rewardTwo2.textContent = randomRewardTwo2
    rewardTwo3.textContent = randomRewardTwo3

    localStorage.setItem('rewardTwo1', randomRewardTwo1)
    localStorage.setItem('rewardTwo2', randomRewardTwo2)
    localStorage.setItem('rewardTwo3', randomRewardTwo3)

    //รางวัลเลขท้าย 2 ตัว
    const randomLastReward = Math.floor(Math.random() * (99 - 10 + 1)) + 10

    lastreward.textContent = randomLastReward

    localStorage.setItem('last_reward', randomLastReward)
}

// เช็ครางวัล
const checkReward = () => {
    const inputNumber = document.getElementById('input_reward').value;
    const rewardAll = [
        'rewardOne',
        'sideRewardOne1',
        'sideRewardOne2',
        'rewardTwo1',
        'rewardTwo2',
        'rewardTwo3',
        'last_reward'
    ]

    //ชื่อรางวัล
    const rewardNames = {
        rewardOne: 'รางวัลที่ 1',
        sideRewardOne1: 'รางวัลเลขข้างเคียงที่ 1',
        sideRewardOne2: 'รางวัลเลขข้างเคียงที่ 1',
        rewardTwo1: 'รางวัลที่ 2',
        rewardTwo2: 'รางวัลที่ 2',
        rewardTwo3: 'รางวัลที่ 2',
        last_reward: 'รางวัลเลขท้าย 2 ตัว'
    };

    // เก็บรางวัลที่ถูก
    const winRewards = []

    // หารางวัลที่ userInput === เลขที่สุ่ม
    for (const key of rewardAll) {
        const reward = localStorage.getItem(key)

        if (key === "last_reward") {
            const lastTwo = inputNumber.slice(-2);
            if (lastTwo === reward) {
                winRewards.push(rewardNames[key])
            }
        }

        if (reward === inputNumber) {
            winRewards.push(rewardNames[key])
        }
    }

    // เลขจากที่ถูกมา แสดง
    if (winRewards.length > 0) {
        // ถูกรางวัล 
        Swal.fire({
            title: '<h1 class="text-white text-2xl font-bold">🎊 ยินดีด้วย!</h1>',
            html: `<ul class="list-none space-y-2 text-white"> ${winRewards.map(name => `<li>🎉 ${name}</li>`).join('')}
         </ul>`,
            icon: 'success',
            confirmButtonText: 'ตกลง',
            background: 'transparent',
            showConfirmButton: true,
            buttonsStyling: false,
            customClass: {
                popup: `
                    bg-black/20 backdrop-blur-sm border border-white/50 rounded-lg
                    shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)]
                    p-6 text-white relative
                    before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br
                    before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none
                    after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-tl
                    after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none
                 `,
                confirmButton: `
                    inline-flex items-center justify-center border align-middle select-none font-sans text-center px-4 py-2 text-white text-sm font-medium rounded-lg bg-white/2.5  border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none  antialiased
                `
            },
        });

    } else {
        Swal.fire({
            title: `<h1 class="text-white text-2xl font-bold">เสียใจด้วยคุณไม่ถูกรางวัล!</h1>`,
            html: `<h1 class="text-white">เลขล็อกเตอรี่ ${inputNumber} ไม่ถูกรางวัล</h1>`,
            icon: 'error',
            confirmButtonText: 'ตกลง',
            background: 'transparent',
            showConfirmButton: true,
            buttonsStyling: false,
            customClass: {
                popup: `bg-black/20 backdrop-blur-sm border border-white/50 rounded-lg
                        shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)]
                        p-6 text-white relative
                        before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br
                        before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none
                        after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-tl
                        after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none
                 `,
                confirmButton: `
                         inline-flex items-center justify-center border align-middle select-none font-sans text-center px-4 py-2 text-white text-sm font-medium rounded-lg bg-white/2.5  border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none  antialiased
                `
            },
        });
    }
}

ButtonRandom.addEventListener('click', randomReward)
ButtonCheckReward.addEventListener('click', checkReward)