(function () {
    let numberOfProblems = $('table tr:eq(1) td').size() - 4;
    let numberOfStudents = $('table tr').size() - 1;

    let row = $('<tr>')
        .addClass('text-center')
        .append($('<th colspan="3">')
            .text('Average stats:'));

    let allProblemsScore = 0;
    for (let i = 4; i <= numberOfProblems + 3; i++) {
        let score = calculateAverage(i);
        allProblemsScore += score;
        let col = $('<th>', {'class': 'text-center'})
            .text((score / numberOfStudents).toFixed(2));

        row.append(col);
    }

    row.append($('<th>', {'class': 'text-center'})
        .text((allProblemsScore / numberOfStudents).toFixed(2)));

    $('table thead').append(row);

    function calculateAverage(testNum) {
        let totalScore = 0;
        $('td:nth-child(' + testNum + ')')
            .each(function (i, e) {
                totalScore += Number(($(this).text()))
            });

        return totalScore;
    }
})();