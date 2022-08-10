
function gradeCheck(marks) {
    if (marks > 100 || marks < 0) {
        return 'Invalid Marks';
    }
    else if (marks >= 80 && marks <= 100) {
        return 'Your Grade is: A+'
    }
    else if (marks >= 70) {
        return 'Your Grade is: A'
    }
    else if (marks >= 60) {
        return 'Your Grade is: A-'
    }
    else if (marks >= 50) {
        return 'Your Grade is: B'
    }
    else if (marks >= 40) {
        return 'Your Grade is: C'
    }
    else if (marks >= 33) {
        return 'Your Grade is: D'
    }
    else if (marks >= 0) {
        return 'Your Grade is: F'
    }
}
console.log(gradeCheck(98));