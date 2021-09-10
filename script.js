//Call Main function   
    function runApp () {
        
        //Declare shorter var names to improve readability
        let PV = document.getElementById('base-amount').value;
        let i = document.getElementById('interest-rate').value/100;
        let n = document.getElementById('period').value;
        let A = document.getElementById('deposit').value;
    
        //Compute functions for different Time periods
        function computeYearly () {
            let annuity = Math.round(A * (Math.pow(1 + i, n) - 1)/ i)
            let yearlyResult = Math.round(PV * Math.pow(1 + i, n)) + annuity;
            let interestValue = yearlyResult - document.getElementById('base-amount').value;
            
            //Display results and use Regex to include commas in numbers
            document.getElementById('total-value').textContent = "GH₵" + yearlyResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //
            document.getElementById('interest-earned').textContent = "GH₵" + interestValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
           
        }

        function computeQuarterly () {
            let quarterlyResult = Math.round(PV * Math.pow(1 + (i / 3), n * 3));
            let interestValue2 = quarterlyResult - PV;

            document.getElementById('total-value').textContent = "GH₵" + quarterlyResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
            document.getElementById('interest-earned').textContent = "GH₵" + interestValue2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
            
        }
        
        function computeMonthly () {
            let monthlyResult = Math.round(PV * Math.pow(1 + (i / 12), n * 12));
            let interestValue3 = monthlyResult - PV;

            document.getElementById('total-value').textContent = "GH₵" + monthlyResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            document.getElementById('interest-earned').textContent = "GH₵" + interestValue3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            
        }
        
        //Check which option is selected
        if (document.getElementById('yearly').checked == true) {
            computeYearly()
        } else if (document.getElementById('quarterly').checked == true) {
            computeQuarterly()
        } else if (document.getElementById('monthly').checked == true) {
            computeMonthly()
        } else {
            
        }

    }
    
