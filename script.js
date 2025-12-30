            const input = document.getElementById("inp");
            const nordic = ["ö", "ä", "å", "ø", "æ", "þ", "ð"];

            function nordCheck(w){
                let index = 0;
                for (l of nordic){
                    for (le of w){
                        if (l.toLowerCase() === le.toLowerCase()){
                            index++
                        }
                    }
                }
                alert(index);
            }
