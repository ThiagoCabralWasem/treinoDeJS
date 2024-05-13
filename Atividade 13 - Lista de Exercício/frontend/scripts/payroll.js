document.getElementById("calculate").addEventListener("click", function() {
    const employeeName = document.getElementById("employeeName").value;
    const grossSalary = parseFloat(document.getElementById("grossSalary").value);
    const inssRate = 0.08;

    const inssValue = grossSalary * inssRate;
    const netSalary = grossSalary - inssValue;

    console.log(`Employee Name: ${employeeName}`);
    console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);
    console.log(`INSS Value: ${inssValue.toFixed(2)}`);
    console.log(`Net Salary: ${netSalary.toFixed(2)}`);

    document.getElementById("inssValue").value = `INSS Value: R$ ${inssValue.toFixed(2)}`;
    document.getElementById("netSalary").value = `Net Salary: R$ ${netSalary.toFixed(2)}`;
});