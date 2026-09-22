let exp = "";
 
        function insert(val) {
            exp = exp + val;
            document.getElementById("dis").value = exp;
        }
 
 
        function calculate() {
            try {
                if (exp === "") {
                    return;
                }
 
                exp = eval(exp);
 
                document.getElementById("dis").value = exp;
 
            } catch (error) {
                document.getElementById("dis").value = "Error";
                exp = "";
            }
        }
 
 
        function clearall() {
            exp = "";
            document.getElementById("dis").value = "";
        }
 
 
        function deleteLast() {
            exp = exp.slice(0, -1);
            document.getElementById("dis").value = exp;
        }
 
 
        function percentage() {
            try {
                if (exp === "") {
                    return;
                }
 
                exp = eval(exp) / 100;
 
                document.getElementById("dis").value = exp;
 
            } catch (error) {
                document.getElementById("dis").value = "Error";
                exp = "";
            }
        }
