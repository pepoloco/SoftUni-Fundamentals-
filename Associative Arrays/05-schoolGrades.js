function schoolGrades(input) {

    const grades = new Map();

    for (const el of input) {
        let data = el.split(' ');
        let name = data[0];
        let grade = 0;
        for (let i = 1; i <= data.length - 1; i++) {
            grade += Number(data[i]);
        }
        let avgGrade = grade / (data.length - 1);
        if (!grades.has(name)) {
            grades.set(name, avgGrade);
        } else {
            let oldAvg = grades.get(name);
            let newAvg = (oldAvg + avgGrade) / 2;
            grades.set(name, newAvg);

        }
    }
    let sorted = Array.from(grades.entries()).sort(([a, b], [c, d]) => {
        return a.localeCompare(c);
    })

    for (let [k, v] of sorted) {
        console.log(`${k}: ${v.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);

//////////////////////////////

function schoolGrades(students) {
    let studentList = students.reduce((acc, curr, index) => {
        let [name, ...grades] = curr.split(' ');
        grades = grades.map((g) => Number(g));
        let currentStudent = acc.find((s) => s.name === name);

        if (currentStudent) {
            currentStudent.grades.push(...grades);
        } else {
            currentStudent = {
                name,
                grades,
                average: 0,
            };

            acc.push(currentStudent);
        }

        const totalGrades = currentStudent.grades.reduce((acc, curr) => { acc += curr; return acc; }, 0);
        currentStudent.average = (totalGrades / currentStudent.grades.length).toFixed(2);

        return acc;
    }, []);

    studentList = studentList.sort((a, b) => a.name.localeCompare(b.name));
    studentList.forEach((stu) => console.log(`${stu.name}: ${stu.average}`));
} schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);
