// Dạng phương trình: căn tam thức = căn tam thức và căn tam thức = nhị thức.
// Các dạng trắc nghiệm, đúng sai, trả lời ngắn:
// 1. Hỏi nghiệm, 
// 2. số nghiệm,
// 3. tổng nghiệm,
// 4. tích nghiệm,
// 5. nghiệm lớn/nhỏ trừ/chia nghiệm nhỏ/lớn.
// 6. tổng bình phương các nghiệm.

function gcd(a,b) {
    let num=1;
    if (a!==0 && b!==0) {
        let num1=Math.abs(a);
        let num2=Math.abs(b);
        if (num1<num2){
            num =gcd(num2,num1);
        }else{
            if (num1%num2===0) {
                num=num2;
            }else{
                num=gcd(num2,num1%num2);
            }
        }
    }else{
        if (a+b!=0){
            num = Math.abs(a)+Math.abs(b);
        }
    }
    return num;
};

class Fraction {
    constructor(n,d){
        let uoc=gcd(n,d);
        n=n/uoc;
        d=d/uoc;
        this.numer=n;
        this.denom=d;
        if (this.denom<0){
            this.denom = -this.denom;
            this.numer = -this.numer;
        }
    }
}

function randomSign(){
    let sign = 1;
    if (Math.round(Math.random())===0) {
        sign=-1;
    };
    return sign;
}

function trinomial(a,b,c) {
    let string=``;
    if (a===1){
        string+=`x^2`;
    }else{
        if (a==-1) {
            string+='-x^2';
        }else{
            if (a!=0){
                string+=`${a}x^2`;
            }
        }
    }
    if (b===-1){
        string+=`-x`;
    }else{
        if (b===1){
            string+=`+x`;
        }else{
            if (b>1){
                string+=`+${b}x`;
            }else{
                if (b<-1) {
                    string+=`${b}x`;
                }
            }
        }
    }
    if (c>0){
        string+=`+${c}`;
    }else{
        if (c<0){
            string+=`${c}`;
        }
    }
    return string;
}

function binomial(a,b){
    let string=``;
    if (a===1){
        string+=`x`;
    }else{
        if (a===-1){
            string+=`-x`;
        }else{
            if (a!=0){
                string+=`${a}x`;
            }
        }
    }
    if (b>0){
        string+=`+${b}`;
    }else{
        if (b<0){
            string+=`${b}`;
        }
    }
//trường hợp đặc biệt ghi dạng b+ax:
    if(a<0 && b>0){
        string=``;
        string+=`${b}`;
        if (a===1){
            string+=`+x`;
        }else{
            if (a===-1){
                string+=`-x`;
            }else{
                if (a<1){
                    string+=`${a}x`;
                }else{
                    if (a>1){
                        string += `+${a}`;
                    }
                }
            }
        }
    }
    
// hết trường hợp đặc biệt
    return string;
}

function square_cd(a,b,c){
    let num=gcd(a,gcd(b,c));
    let scd=1;
    for (let i=2 ; i < Math.floor(Math.sqrt(num)) ; i++){
        if (num%(i*i)===0){
            scd=i*i;
        }
    }
    return scd;
}

function taoPhuongTrinh_CanBangCan() {// Tạo các phương trình khi biến đổi thì ra 2 nghiệm hữu tỉ khác nhau (chưa biết nhận hay không).
    let nice=0;
    let a=0, b=0, c=0, d=0, e=0, f=0;
    let x1= new Fraction(1,1), x2 = new Fraction(1,1);
    let zeroindex=0;
    while (nice!=1) {
        a=(Math.round(Math.random()*10)+1)*randomSign();
        b=(Math.round(Math.random()*40))*randomSign();
        c=(Math.round(Math.random()*80))*randomSign();
        d=(Math.round(Math.random()*10)+1)*randomSign();
        e=(Math.round(Math.random()*40))*randomSign();
        f=(Math.round(Math.random()*80))*randomSign();
        let A=a-d;
        let B=b-e;
        let C=c-f;
        if (A!=0) {
            let Delta=B*B-4*A*C;
            if (Delta>0){
                Delta = Math.sqrt(Delta);
                if (Delta === Math.floor(Delta)) {
                    let x_1 = (-B + Delta)/(2*A);
                    let x_2 = (-B - Delta)/(2*A);
                    let zeroindex=0;
                    if (a*x_1*x_1+b*x_1+c >= 0 && d*x_1*x_1+e*x_1+f >=0) {
                        zeroindex+=1;
                    }
                    if (a*x_2*x_2+b*x_2+c >= 0 && d*x_2*x_2+e*x_2+f >=0) {
                        zeroindex+=2;
                    }
                    x1 = new Fraction( -B + Delta , 2*A );
                    x2 = new Fraction( -B - Delta , 2*A );
                    nice=1;//đã lấy được bộ số cho phương trình. 
                }                
            }
        }
    }
    return [a,b,c,d,e,f,x1,x2,zeroindex];
};

function taoPhuongTrinh_CanBangNhiThuc() {// Tạo các phương trình khi biến đổi thì ra 2 nghiệm hữu tỉ khác nhau (chưa biết nhận hay không).
    let nice=0;
    let a=0, b=0, c=0, d=0, e=0;
    let x1= new Fraction(1,1), x2 = new Fraction(1,1);
    let zeroindex=0;
    while (nice!=1) {
        a=(Math.round(Math.random()*10)+1)*randomSign();
        b=(Math.round(Math.random()*40)+1)*randomSign();
        c=(Math.round(Math.random()*80)+1)*randomSign();
        d=(Math.round(Math.random()*10)+1)*randomSign();
        e=(Math.round(Math.random()*40)+1)*randomSign();
        let A=a-d*d;
        let B=b-2*d*e;
        let C=c-e*e;
        if (A!=0) {
            let Delta=B*B-4*A*C;
            if (Delta>0){ // có 2 nghiệm.
                Delta = Math.sqrt(Delta);
                if (Delta === Math.floor(Delta)) {
                    let x_1 = (-B + Delta)/(2*A);
                    let x_2 = (-B - Delta)/(2*A);
                    if (a*x_1*x_1+b*x_1+c >= 0 && d*x_1+e >=0) {
                        zeroindex+=1;
                    }
                    if (a*x_2*x_2+b*x_2+c >= 0 && d*x_2+e>=0) {
                        zeroindex+=2;
                    }
                    x1 = new Fraction( -B + Delta , 2*A );
                    x2 = new Fraction( -B - Delta , 2*A );
                    nice=1;//đã lấy được bộ số cho phương trình.        
                }
            }
        }
    }
    return [a,b,c,d,e,x1,x2,zeroindex];
};

function taoPhuongTrinh(){// Tạo các phương trình khi biến đổi thì ra 2 nghiệm hữu tỉ khác nhau (chưa biết nhận hay không).
    if (Math.round(Math.random())===0){
        return taoPhuongTrinh_CanBangCan();
    }else{
        return taoPhuongTrinh_CanBangNhiThuc();
    }
}

function ghiPhuongTrinh(eq){// trả về chuỗi phương trình dạng MathML dùng KaTeX
    let a=b=c=d=e=f=1;
    let mathstring=``;
    if (eq.length===8){ // phương trình dạng căn bằng nhị thức.
        a=eq[0], b=eq[1], c=eq[2], d=eq[3], e=eq[4];
        let scd=square_cd(a,b,c);
        gcdde=gcd(d,e);
        if (scd>1){
            mathstring = katex.renderToString(`${Math.sqrt(scd)}\\sqrt{${trinomial(a/scd,b/scd,c/scd)}}=${binomial(d,e)}`, {
                throwOnError: false // Optional: prevent errors from halting script execution
            });
        }else{
            if (gcdde>1){
                if (d<0 && e<0){ gcdde=-gcdde;}
                mathstring = katex.renderToString(`\\sqrt{${trinomial(a,b,c)}}=${gcdde}(${binomial(d/gcdde,e/gcdde)})`, {
                    throwOnError: false // Optional: prevent errors from halting script execution
                });
            }else{
                mathstring = katex.renderToString(`\\sqrt{${trinomial(a,b,c)}}=${binomial(d,e)}`, {
                    throwOnError: false // Optional: prevent errors from halting script execution
                });
            }
        }
    }else{
        if (eq.length===9){ // phương trình dạng căn bằng căn.
            a=eq[0], b=eq[1], c=eq[2], d=eq[3], e=eq[4], f=eq[5];
            let scd=square_cd(a,b,c);
            if (scd>1){
                mathstring = katex.renderToString(`${Math.sqrt(scd)}\\sqrt{${trinomial(a/scd,b/scd,c/scd)}}=\\sqrt{${trinomial(d,e,f)}}`, {
                    throwOnError: false // Optional: prevent errors from halting script execution
                });
            }else{
                mathstring = katex.renderToString(`\\sqrt{${trinomial(a,b,c)}}=\\sqrt{${trinomial(d,e,f)}}`, {
                    throwOnError: false // Optional: prevent errors from halting script execution
                });
            }
        }
    }
    return mathstring;
}


// CÁC DẠNG CÂU HỎI

// 1. TRẮC NGHIỆM HỎI NGHIỆM:

function taoTracNghiem_HoiNghiem(){// câu hỏi trắc nghiệm dạng hỏi nghiệm phương trình.
    console.log(`Hỏi nghiệm`);
    let eq=taoPhuongTrinh();// tạo phương trình tùy ý ra 2 nghiệm hữu tỉ (chưa nhận loại).
    console.log(eq);
    let x_1=``, x_2=``, zeroindex=0;
    let x1= new Fraction(1,1), x2 = new Fraction(1,1);
    if (eq.length===8){
        x1=eq[5], x2=eq[6], zeroindex=eq[7];
    }else{
        if (eq.length===9){
            x1=eq[6], x2=eq[7], zeroindex=eq[8];
        }
    }

    content.innerHTML = 'Tìm <b>tất cả</b> các nghiệm của phương trình dưới đây?';
    question.innerHTML = ghiPhuongTrinh(eq); 

    choices = [];

    choices.push("Vô nghiệm");

    if (x1.denom===1){
        x_1=`${x1.numer}`;
    }else{
        x_1=`\\frac{${x1.numer}}{${x1.denom}}`;
    };
    choices.push(katex.renderToString(`${x_1}`));

    if (x2.denom===1){
       x_2=`${x2.numer}`;
    }else{
        x_2=`\\frac{${x2.numer}}{${x2.denom}}`;
    };
    choices.push(katex.renderToString(`${x_2}`));

    choices.push(katex.renderToString(`${x_1}`)+`  và  `+katex.renderToString(`${x_2}`));

    choicesElement.innerHTML = '';
    let i=0;
    for (const choice of choices){
        choicesElement.innerHTML += `<button class="choice" id="choice${i}"><li>${choice}</li></button><br>`;
        i++;
    }
    const correctAnswer = document.getElementById('choice'+zeroindex);// chỉ số của lựa chọn đúng nghiệm.
    resultButton.addEventListener('click', () => {
        correctAnswer.classList.add('correct');
    });
}


// 2. TRẮC NGHIỆM HỎI TỔNG:

function taoTracNghiem_HoiTong(){// câu hỏi trắc nghiệm dạng hỏi Tổng các nghiệm phương trình.
    console.log(`Hỏi tổng`);
    let eq = [];
    let x_1=``, x_2=``, sumindex=0;
    let x1= new Fraction(1,1), x2 = new Fraction(1,1);

    //tìm phương trình có 2 nghiệm khác nhau, khác 0 và nhận ít nhất 1 nghiệm.
    let nice=0;
    while (nice!=1){
        eq =taoPhuongTrinh();
        console.log(eq);
        // lấy nghiệm và số nghiệm thỏa.
        if (eq.length===8){
            x1=eq[5], x2=eq[6], sumindex=eq[7];
        }else{
            if (eq.length===9){
                x1=eq[6], x2=eq[7], sumindex=eq[8];
            }
        }
        if (x1.numer*x2.numer!=0 && x1.numer*x2.denom!=x2.numer*x1.denom && sumindex>0){
        // phương trình thỏa yêu cầu tạo đề khi ra 2 nghiệm khác nhau, khác 0 và nhận ít nhất 1 nghiệm.
            nice=1; // tìm thấy pt thỏa.
            console.log(eq);
        }
    }
    
    // ghi phương trình.
    question.innerHTML = ghiPhuongTrinh(eq); 

    choices = [];

    choices.push("Không có");

    if (x1.denom===1){
        x_1=`${x1.numer}`;
    }else{
        x_1=`\\frac{${x1.numer}}{${x1.denom}}`;
    };
    choices.push(katex.renderToString(`${x_1}`));

    if (x2.denom===1){
       x_2=`${x2.numer}`;
    }else{
        x_2=`\\frac{${x2.numer}}{${x2.denom}}`;
    };
    choices.push(katex.renderToString(`${x_2}`));

    let sum = new Fraction( x1.numer*x2.denom + x2.numer*x1.denom , x1.denom*x2.denom );
    if (sum.denom===1){
        sum=`${sum.numer}`;
     }else{
         sum=`\\frac{${sum.numer}}{${sum.denom}}`;
     };
    choices.push(katex.renderToString(`${sum}`));

    content.innerHTML = '<b>Tổng</b> các nghiệm của phương trình dưới đây bằng bao nhiêu?';
    choicesElement.innerHTML = '';
    let i=0;
    for (const choice of choices){
        choicesElement.innerHTML += `<button class="choice" id="choice${i}"><li>${choice}</li></button><br>`;
        i++;
    }
    const correctAnswer = document.getElementById('choice'+sumindex);// chỉ số của lựa chọn đúng tổng nghiệm.
    resultButton.addEventListener('click', () => {
        correctAnswer.classList.add('correct');
    });
}

let content = document.querySelector(".content");
let question = document.querySelector(".question");
let choicesElement = document.querySelector(".choices");
let resultButton = document.querySelector('#result');

let restartButton = document.querySelector("#restart");
restartButton.addEventListener("click", () => {
    switch (Math.floor(Math.random()*2)) { //nhân 2 do mới có 2 câu hỏi. DÙNG FLOOR ĐỂ LÀM TRÒN XUỐNG
        case 0:
            taoTracNghiem_HoiNghiem();
            break;
        case 1:
            taoTracNghiem_HoiTong();        
    }
});