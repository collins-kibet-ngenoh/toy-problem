const benefits=1000
    const basicSalary=10000
    // let basicSalary = parseFloat(prompt("Enter Basic Salary:"));
    const TAX_RATES = [
        { limit: 24000, rate: 10 },
        { limit: 32000, rate: 15 },
        { limit: 40000, rate: 20 },
        { limit: 96000, rate: 25 },
        { limit: Infinity, rate: 30 }
    ];

    const NHIF_RATES = [
        { limit: 6000, deduction: 150 },
        { limit: 8000, deduction: 300 },
        { limit: 12000, deduction: 400 },
        { limit: 20000, deduction: 500 },
        { limit: Infinity, deduction: 600 }
    ];

    const NSSF_RATE = 6;

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE (Tax)
    let taxableIncome = grossSalary - 24000; // Initial tax relief
    let tax = 0;
    TAX_RATES.forEach(({ limit, rate }) => {
        if (taxableIncome <= 0) return;
        const taxableAmount = Math.min(taxableIncome, limit);
        tax += taxableAmount * (rate / 100);
        taxableIncome -= taxableAmount;
    });

    // Calculate NHIF deductions
    let nhifDeductions = 0;
    NHIF_RATES.some(({ limit, deduction }) => {
        if (grossSalary <= limit) {
            nhifDeductions = deduction;
            return true;
        }
        return false;
    });

    // Calculate NSSF deductions
    const nssfDeductions = Math.min(basicSalary * (NSSF_RATE / 100), 200);

    // Calculate net salary
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;
// Give output
    console.log("Net Salary: "+netSalary);