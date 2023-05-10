let avg;
let count = 0;
let finalGrades = [];
let pointer = 0;
let letters = ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"];
let scales = [4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.7, 1.3, 1.0, 0.7, 0.0];
let assignmentCount;
let rowCount = 0;
let ob = [];
let testString = "";
function findAvg() {
    count = 0;
    $('tr').each(function() {
        let totalmarks = 0;
        assignmentCount = 0;
        $(this).find('.assignments').each(function() {
            var marks = $(this).text(); {
                if ((/^[0-9][0-9]?$|^100$/.test(marks)) === false) {
                    count++;
                    $(this).css({"background-color": "yellow"});
                    $(this).html('-');
                    $(this).css({"text-align": "center"});
                }
                else {
                    totalmarks += parseInt(marks);
                    assignmentCount++;
                    $(this).css({"background-color": "initial"});
                    $(this).css({"text-align": "right"});
                }
            }
        });
        if(totalmarks !== 0) {
            avg = Math.round(totalmarks / assignmentCount);
        }
        else {
            avg = 0;
        }
        finalGrades.push(avg);
        $(this).find('.finalmark').html(avg);
        if(avg < 60) {
            $(this).find('.finalmark').css({"background-color": "red"});
        }
        else
        {
            $(this).find('.finalmark').css({"background-color": "initial"});
        }
    });
    document.getElementById("assignmentsSub").innerHTML = "Number of Assignments Not Submitted: " + count;
}

$(function() {
    $("#finalgrade").on('click', () => {
        switch (pointer) {
            case 0:
                pointer = 1;
                getGrade(pointer);
                break;
            case 1:
                pointer = 2;
                getGrade(pointer);
                break;
            case 2:
                $("#finalgrade").text("Average [%]");
                pointer = 0;
                findAvg();
                break;
        }

    });
});

function getGrade(pointer) {
    if (pointer === 1) {
        $("#finalgrade").text("Letter Grade");
        $('tr').each(function() {
            var totalmarks = 0;
            $(this).find('.assignments').each(function() {
                var marks = $(this).text(); {
                    if (marks !== "-") {
                        totalmarks += parseFloat(marks);
                        count++;
                    }
                }
            });
            avg = Math.round(totalmarks / 5);
            finalGrades.push(avg);
            if(avg > 92 && avg < 101) {
                $(this).find('.finalmark').html(letters[0]);
            }
            else if(avg > 89 && avg < 93) {
                $(this).find('.finalmark').html(letters[1]);
            }
            else if(avg > 85 && avg < 91) {
                $(this).find('.finalmark').html(letters[2]);
            }
            else if(avg > 82 && avg < 87) {
                $(this).find('.finalmark').html(letters[3]);
            }
            else if(avg > 79 && avg < 83) {
                $(this).find('.finalmark').html(letters[4]);
            }
            else if(avg > 76 && avg < 80) {
                $(this).find('.finalmark').html(letters[5]);
            }
            else if(avg > 72 && avg < 77) {
                $(this).find('.finalmark').html(letters[6]);
            }
            else if(avg > 69 && avg < 73) {
                $(this).find('.finalmark').html(letters[7]);
            }
            else if(avg > 66 && avg < 70) {
                $(this).find('.finalmark').html(letters[8]);
            }
            else if(avg > 62 && avg < 67) {
                $(this).find('.finalmark').html(letters[9]);
            }
            else if(avg > 59 && avg < 63) {
                $(this).find('.finalmark').html(letters[10]);
            }
            else {
                $(this).find('.finalmark').html(letters[11])
            }
        });

        //}
    } else if (pointer === 2) {
        $("#finalgrade").text("4.0 Grade Average");
        $('tr').each(function() {
            var totalmarks = 0;
            $(this).find('.assignments').each(function() {
                var marks = $(this).text(); {
                    if (marks !== "-") {
                        totalmarks += parseFloat(marks);
                        count++;
                    }
                }
            });
            avg = Math.round(totalmarks / 5);
            finalGrades.push(avg);
            if(avg > 92 && avg < 101) {
                $(this).find('.finalmark').html(scales[0] + ".0");
            }
            else if(avg > 89 && avg < 93) {
                $(this).find('.finalmark').html(scales[1]);
            }
            else if(avg > 85 && avg < 91) {
                $(this).find('.finalmark').html(scales[2]);
            }
            else if(avg > 82 && avg < 87) {
                $(this).find('.finalmark').html(scales[3] + ".0");
            }
            else if(avg > 79 && avg < 83) {
                $(this).find('.finalmark').html(scales[4]);
            }
            else if(avg > 76 && avg < 80) {
                $(this).find('.finalmark').html(scales[5]);
            }
            else if(avg > 72 && avg < 77) {
                $(this).find('.finalmark').html(scales[6] + ".0");
            }
            else if(avg > 69 && avg < 73) {
                $(this).find('.finalmark').html(scales[7]);
            }
            else if(avg > 66 && avg < 70) {
                $(this).find('.finalmark').html(scales[8]);
            }
            else if(avg > 62 && avg < 67) {
                $(this).find('.finalmark').html(scales[9] +".0");
            }
            else if(avg > 59 && avg < 63) {
                $(this).find('.finalmark').html(scales[10]);
            }
            else {
                $(this).find('.finalmark').html(scales[11] + ".0")
            }
        });
    }
    else {

    }
}

function addRow() {
    switch(rowCount) {
        case 0:
            $('#table').append('<tr>' +
                '<td>Ellen Ripley</td>' +
                '<td>18342345</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="finalmark" align="right"></tr>');
            rowCount++;
            break;
        case 1:
            $('#table').append('<tr>' +
                '<td>Han Solo</td>' +
                '<td>14313808</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="finalmark" align="right"></tr>');
            rowCount++;
            break;
        case 2:
            $('#table').append('<tr>' +
                '<td>Norman Bates</td>' +
                '<td>52913824</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="finalmark" align="right"></tr>');
            rowCount++;
            break;
        case 3:
            $('#table').append('<tr>' +
                '<td>Vito Coreone</td>' +
                '<td>81656055</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="finalmark" align="right"></tr>');
            rowCount++;
            break;
        case 4:
            $('#table').append('<tr>' +
                '<td>Emmet Brown</td>' +
                '<td>18871288</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="finalmark" align="right"></tr>');
            rowCount++;
            break;
        case 5:
            $('#table').append('<tr>' +
                '<td>Keyser Söze</td>' +
                '<td>90652973</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="finalmark" align="right"></tr>');
            rowCount++;
            break;
        case 6:
            $('#table').append('<tr>' +
                '<td>Marty McFly</td>' +
                '<td>51633831</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="finalmark" align="right"></tr>');
            rowCount++;
            break;
        case 7:
            $('#table').append('<tr>' +
                '<td>Obi-Wan Kenobi</td>' +
                '<td>08929991</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="finalmark" align="right"></tr>');
            rowCount++;
            break;
        case 8:
            $('#table').append('<tr>' +
                '<td>Atticus Finch</td>' +
                '<td>89719327</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="finalmark" align="right"></tr>');
            rowCount++;
            break;
        case 9:
            $('#table').append('<tr>' +
                '<td>Peter Venkman</td>' +
                '<td>98093001</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="finalmark" align="right"></tr>');
            rowCount++;
            break;
        case 10:
            $('#table').append('<tr>' +
                '<td>James T. Kirk</td>' +
                '<td>15818025</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>' +
                '<td class="finalmark" align="right"></tr>');
            rowCount = 0;
            break;
    }
    findAvg();
}

function addColumn() {
    assignmentCount++;
    $('#table').find('tr').each(function(){ $(this).find('th').eq(-1 -1).after('<th contenteditable="true"><h3>Assignment</h3></th>');
        $(this).find('td').eq(-1 -1).after('<td class= "assignments" align="right" contenteditable="true" onkeyup="findAvg()" onclick="this.textContent=\'\'">-</td>');
    });
    findAvg();
}

function saveTable() {
    ob = $('#table tr').map(function() {
        return $(this).find('td').map(function() {
            return $(this).text();
        }).get();
    }).get();
    console.log(ob);
    testString = JSON.stringify(ob);
    console.log(testString);
    // document.getElementById('check').innerHTML = ob;


}

function restoreTable() {
    $('#table tr').each(function(){
        $(this).find('td').each(function(){
            $(this).html(testString);
        })
    })
   
}


function removeRow() {
    $('#table tr:not(:nth-child(1))' && '#table tr:last').remove();
    findAvg();
}