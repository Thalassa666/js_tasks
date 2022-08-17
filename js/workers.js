const workers = [
    {"name":"John","salary":500},
            {"name":"Mike","salary":1300},
            {"name":"Linda","salary":1500}
        ];
    
    const result = [];
    for (const worker of workers) {
        if (worker.salary > 1000) {
            result.push(worker.name); 
        }
    }
    
    console.log(result);
