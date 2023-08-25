const board_img = [
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '16.jpg',
    '17.jpg',
    '18.jpg',
    '19.png',
    '20.jpg',
    '21.jpg',
    '22.jpg',
    '23.jpg',
    '24.jpg',
    '25.jpg',
    '26.jpg',
    '27.jpg',
    '28.png',
    '29.jpg',
];

const board = [];
const gamer = [];

$(function () {
    board.fill(0);
    initBoard();
    draw();
    $('#setBt').click(setOpen);
    $('#dice_bt').click(dice_turn);

    t = setInterval(() => {
        if (gamer.length > 0) {
            // console.log(gamer);
            $('#dice_bt').attr((disabled = false));
            clearInterval(t);
        }
    }, 50);
});
