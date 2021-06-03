let sortObject = {
    name: function(a, b) {
        

        if (a < b) {
            return -1;
        } else {
            return a > b ? 1 : 0;
        }
    },
    duration: function (a, b) {
        let tempA = a.split(':');   // holds mins and secs ad strings
        let tempB = b.split(':');   // holds mins and secs ad strings
        a = Number(tempA[0] * 60) + Number(tempA[1]);   // total of seconds
        b = Number(tempB[0] * 60) + Number(tempB[1]);   // total of seconds

        return a - b;
    },
    date: function(a, b) {
        a = new Date(a);
        b = new Date(b);
        
        return a - b;
    }
}