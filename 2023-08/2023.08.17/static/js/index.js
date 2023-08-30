var ctx = $('#mix_chart')[0];

const day = ['5월', '6월', '7월', '8월', '9월'];
const clove = [34, 56, 86, 43, 12];
const plove = [11, 24, 95, 35, 23];
const nlove = [8, 43, 100, 100, 100];
const hlove = [0, 5, 70, 89, 94, 14];

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: day,
        datasets: [
            {
                label: 'hlove',
                data: hlove,
                type: 'line',
                borderColor: '#faa98e',
                tension: 0.1,
                borderCapStyle: 'square',
                pointStyle: 'rect',
            },

            {
                label: 'clove',
                data: clove,
                backgroundColor: '#FFCDCC',
                indexAxis: 'x',
            },
            {
                label: 'plove',
                data: plove,
                backgroundColor: '#fbd0ad',
                indexAxis: 'x',
            },
            {
                label: 'nlove',
                data: nlove,
                backgroundColor: '#d6d5ea',
                indexAxis: 'x',
            },
        ],
    },
});
