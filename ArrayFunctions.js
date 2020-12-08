    // Array Functions

    // Print odd numbers
    function odd (a) {
    b=[]
    c=a.length
    for (i=0; i<c; i++) {
        if (a[i]%2!==0) {b.push(a[i])}
    }
      console.log(b);
    }
    odd([5,6,8,1,2,3,4,9,7])


    (function (a) {
    b=[]
    c=a.length
    for (i=0; i<c; i++) {
        if (a[i]%2!==0) {b.push(a[i])}
    }
      console.log(b);
    })
    ([6,8,1,2,5,4,9,7,3])



    // Convert to title case

    function caps (a) {
    b=[]
    c=a.length
    for (i=0; i<c; i++) {
        b.push(a[i].slice(0,1).toUpperCase()+a[i].slice(1).toLowerCase())
    }
      console.log(b);
    }
    caps(['abc','DEF','pqr','xyz'])


    (function (a) {
    b=[]
    c=a.length
    for (i=0; i<c; i++) {
        b.push(a[i].slice(0,1).toUpperCase()+a[i].slice(1).toLowerCase())
    
      console.log(b);
    })
    (['abc','PQR','def','xyz'])


    // Sum of all numbers

    function sum (a) {
    b=a.length
    sum=0
    for (i=0; i<b; i++) {
        sum+=a[i]
    }
      console.log(sum);
    }
    sum([5,6,7,8,1,2,3,4])


    (function  (a) {
    b=a.length
    sum=0
    for (i=0; i<b; i++) {
        sum+=a[i]
    }
      console.log(sum);
    })
    ([5,6,7,8,1,5,2,3,4])


    // Return prime numbers

    function prm (a) {
    b=a.length
    c=[2, 3, 5, 7, 11, 13, 17, 19]
    d=c.length
    f=[]
    for (i=0; i<b; i++) {
        e=1
        for (j=0; j<d; j++) {
            if (a[i]%c[j]===0) {e=0}
    }
    if (e===1) {f.push(a[i])}
    }
      console.log(f);
    }
    prm([53,64,72,83,11,22,23,24])


    (function (a) {
    b=a.length
    c=[2, 3, 5, 7, 11, 13, 17, 19]
    d=c.length
    f=[]
    for (i=0; i<b; i++) {
        e=1
        for (j=0; j<d; j++) {
            if (a[i]%c[j]===0) {e=0}
    }
    if (e===1) {f.push(a[i])}
    }
      console.log(f);
    })
    ([53,64,72,83,11,22,23,24,31])


    // Return all palindromes

    function palin (a) {
    b=a.length
    e=[]
    
    for (i=0; i<b; i++) {
        c=a[i].split('')
        d=c.slice()
        d.reverse()
        if(JSON.stringify(c) === JSON.stringify(d)) 
        {e.push(c.join(''))}
    }
    console.log(e);
    }
    palin(['abc','cbc','DEF','DEED','pqr','xyz'])
    
    

    (function (a) {
    b=a.length
    e=[]
    for (i=0; i<b; i++) {
        c=a[i].split('')
        d=c.slice()
        d.reverse()
        if(JSON.stringify(c) === JSON.stringify(d)) 
        {e.push(c.join(''))}
    }
    console.log(e);
    })
    (['abc','pqrrqp','cbc','DEF','DEED','xyz'])


    // Return median of two sorted arrays of same size 

    function med (a,b) {
        c=a.concat(b)
    c1=c.sort((a,b)=>a-b)
    d=c.length
    e=d/2-1
    f=e+1
    console.log((c1[e]+c1[f])/2)
    }
    med([1,2,3,4,55,66,77],[11,22,33,44,5,6,7])
        
    
    (function  (a,b) {
        c=a.concat(b)
    c1=c.sort((a,b)=>a-b)
    d=c.length
    e=d/2-1
    f=e+1
    console.log((c1[e]+c1[f])/2)
    })    
    ([1,2,3,44,55,66,77],[13,22,33,4,5,6,7])


    // Remove duplicates from an array

    function dup (a) {
    b=a.length
    c=[]
    for (i=0; i<b; i++) {
        if (!c.includes(a[i])) {c.push(a[i])}
    }
    console.log(c)
    } 
    dup([1,2,3,3,4,5,6,6,7,7,7])
        
    (function (a) {
    b=a.length
    c=[]
    for (i=0; i<b; i++) {
        if (!c.includes(a[i])) {c.push(a[i])}
    }
    console.log(c)
    })
    ([8,2,3,3,4,5,6,6,7,7,7])


    // Rotate an array by k times and return the rotated array

    function rotate (a,b) {
    for (i=0;i<b;i++) {
    c=a.shift()
    a.push(c)
    }
    console.log(a);
    }
    rotate([1,2,3,4,5,6,7],4)
    
    (function (a,b) {
    for (i=0;i<b;i++) {
    c=a.shift()
    a.push(c)
    }
    console.log(a);
    })
    ([1,2,3,4,5,6,7],3)