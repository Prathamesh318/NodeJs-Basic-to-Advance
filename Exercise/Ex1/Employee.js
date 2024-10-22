const employee=[
    {
        name:"Prathamesh",
        basicSalary:70000,
        bonus:6000
    },
    {
        name:"Damon",
        basicSalary:650000,
        bonus:6000
    }
]



function calculateGrossSalary(employee){
    return employee.basicSalary+employee.bonus;
}

function calculateNetSalary(employee){
    const deduction=employee.basicSalary*0.1;
    const grossSalary=calculateGrossSalary(employee);

    return grossSalary-deduction;
}

function displayDetails(){
    employee.forEach((employee)=>{
        const grossSalary=calculateGrossSalary(employee);
        const netSalary=calculateGrossSalary(employee);

        console.log("Employee NAme",employee.name);
        console.log("Gross salary",grossSalary);
        console.log("netSalaey",netSalary);

        console.log("-------------------")
    })
}

displayDetails()