class AverageStats {
    constructor() {
        this._numberOfProblems = $('table tr:eq(1) td').size() - 4;
        this._numberOfStudents = $('table tr').size() - 1;

        this._totalScore = 0;
        this._statsNode = $('<tr>')
            .addClass('text-center')
            .append($('<th colspan="3">')
                .text('Average stats:'));
    }

    run() {
        this._processColumns();
        this._appendColStats(this._totalScore / this._numberOfStudents);
        $('table thead').append(this._statsNode);
    }

    _processColumns() {
        const START_COL = 4;
        const END_COL = this._numberOfProblems + 3;
        for (let col = START_COL; col <= END_COL; col++) {
            this._appendColStats(this._aggregateColAverage(col));
        }
    }

    _appendColStats(colScore) {
        this._statsNode
            .append($('<th>', {'class': 'text-center'})
                .text((colScore).toFixed(2)));
    }

    _aggregateColAverage(colIndex) {
        let score = 0;
        $('td:nth-child(' + colIndex + ')')
            .each(function (i, e) {
                score += Number(($(this).text()))
            });

        this._totalScore += score;

        return (score / this._numberOfStudents);
    }
}