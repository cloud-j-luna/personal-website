var sChart = $('#skillsChart');
var lChart = $('#languagesChart');
var sweChart = $('#SWEChart');
var cChart = $('#competitionChart');

const globalOptions = {
    scale: {
        display: true,
        ticks: {
            display: false,
            beginAtZero: true
        },
        gridLines: {
            color: '#727272',
            lineWidth: 1
        },
        angleLines: {
            color: '#727272',
            lineWidth: 1
        },
        pointLabels: {
            fontSize: 11
        }
    },
    legend: {
        display: false
    },
    tooltips: {
        enabled: false
    },
};

var skillsChart = new Chart(sChart, {
    type: 'radar',
    data: {
        labels: ['Reference', 'Cybersecurity', 'Algorithmics', 'Networking', 'AI', 'Math', 'Soft-Skills'],
        font: {
            weight: 'bold',
            size: 16,
          },
        datasets: [{
            label: '',
            data: [100, 55, 80, 65, 60, 55, 75],
            backgroundColor: [
                'rgba(20, 167, 108, 0.2)',
            ],
            borderColor: [
                'rgba(20, 167, 108, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: globalOptions
});

var languagesChart = new Chart(lChart, {
    type: 'radar',
    data: {
        labels: ['Reference', 'C/C++', 'C#', 'JS/TS', 'Java', 'Python', 'Go'],
        font: {
            weight: 'bold',
            size: 16,
          },
        datasets: [{
            label: '',
            data: [100, 60, 90, 70, 70, 60, 45],
            backgroundColor: [
                'rgba(20, 167, 108, 0.2)',
            ],
            borderColor: [
                'rgba(20, 167, 108, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: globalOptions
});

var softChart = new Chart(sweChart, {
    type: 'radar',
    data: {
        labels: ['Projects', 'MVC', 'SOLID', 'TDD'],
        font: {
            weight: 'bold',
            size: 16,
          },
        datasets: [{
            label: '',
            data: [10, 4, 5, 2],
            backgroundColor: [
                'rgba(20, 167, 108, 0.2)',
            ],
            borderColor: [
                'rgba(20, 167, 108, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: globalOptions
});

var comps = {
    gj: 0,
    h: 3,
    cc: 14,
    ctf: 2,
    p: 10,
    names: {
        gj: 'Game Jams',
        h: 'Hackathons',
        cc: 'Coding Challenges',
        ctf: 'CTFs',
        p: 'Pentesting'
    },
    toLables: function() {
        return [
            this.names.gj + ' (' + this.gj + ')',
            this.names.h + ' (' + this.h + ')',
            this.names.cc + ' (' + this.cc + ')',
            this.names.ctf + ' (' + this.ctf + ')',
            this.names.p + ' (' + this.p + ')',
        ];
    }
};

var competitionChart = new Chart(cChart, {
    type: 'radar',
    data: {
        labels: comps.toLables(),
        font: {
            weight: 'bold',
            size: 16,
          },
        datasets: [{
            label: '',
            data: [comps.gj, comps.h, comps.cc, comps.ctf, comps.p],
            backgroundColor: [
                'rgba(20, 167, 108, 0.2)',
            ],
            borderColor: [
                'rgba(20, 167, 108, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: globalOptions
});