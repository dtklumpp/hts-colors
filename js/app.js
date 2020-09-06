console.log('you are hearing me talk');

const buttonFxn = function(event) {
    let hue2 = $('.input1').val();
    let lite2 = $('.input2').val();
    let sat2 = $('.input3').val();
    
    //console.log(hue2);
    //console.log(lite2);
    //console.log(sat2);
    
    if(Number(hue2) != hue2
    || Number(lite2) != lite2
    || Number(sat2) != sat2){
        console.log('bad input reload page');
    }
    
    let hue = Number(hue2) % 100;
    let lite = Number(lite2);
    let sat = Number(sat2);
    
    let deSat = 100 - sat;
    
    class Color {
        constructor(){
            this.value = 0;
            this.rgb = 0;
            this.hex = '00';
        }
    }
    
    let red = new Color();
    let green = new Color();
    let blue = new Color();
    
    // let brightest;
    // let middle;
    // let darkest;
    
    let color = (hue * 3 / 100);
    // let color2 = (2* ((color + 0.5) % 3) );
    //why doesn't color2 system work?  maybe i'll never know
    let degree = color - Math.floor(color);
    let ratio = (1 - 2 * Math.abs(degree - 0.5));
    
    // console.log(color);
    //console.log(color2);
    // console.log(degree);
    // console.log(ratio);
    
    const assignRatio = function(primary, secondary, tertiary){
        let x = primary.value = lite;
        let y = tertiary.value = deSat/100 * lite;
        let z = secondary.value = y + (x - y) * ratio;
    }
    if(color < 0.5){assignRatio(blue, red, green)} else
    if(color < 1.0){assignRatio(red, blue, green)} else
    if(color < 1.5){assignRatio(red, green, blue)} else
    if(color < 2.0){assignRatio(green, red, blue)} else
    if(color < 2.5){assignRatio(green, blue, red)} else
    if(color <= 3){assignRatio(blue, green, red)}
    
    //0-0.5: (1-ratio)
    
    const assignRGB = function(colorObject) {
        let rgbVal = Math.floor(colorObject.value * 256/100);
        if(rgbVal === 256){
            rgbVal = 255;
        }
        colorObject.rgb = rgbVal;
    }
    
    assignRGB(red);
    assignRGB(green);
    assignRGB(blue);
    
    // console.log('Red: '+red.rgb);
    // console.log('Green: '+green.rgb);
    // console.log('Blue: '+blue.rgb);

    let rgbString = '('+red.rgb+', '+green.rgb+', '+blue.rgb+')'

    console.log('rgbString: '+rgbString);
    
    $('.display').css('background-color', 'rgb'+rgbString);

    $('.convert1').text('RGB: '+rgbString);

    const toHexString = function(colorObject){
        let hexVal = colorObject.rgb.toString(16);
        if(hexVal.length === 1){
            hexVal = '0'+hexVal;
        }
        return hexVal
    }

    red.hex = toHexString(red);
    green.hex = toHexString(green);
    blue.hex = toHexString(blue);

    console.log(red.rgb.toString(16));


    $('.convert2').text('HEX: #'+red.hex+green.hex+blue.hex);
    
}

$('.button1').on('click', buttonFxn);





// let hue2 = prompt('hue plz');
// let lite2 = prompt('lightness plz');
// let sat2 = prompt('saturation plz');



//so brightest color = lite
//sat is 1 minus ratio of white to color

//color is bit complicate
//scale 0 to 100
//ok wait divide by 100/3
//and do %3
//0 and 3 are blue
//1 is red, 2 is green
//so need 3 ifs to get ratio of which 2




//let color = (hue * 3 / 100) % 3;
// let color2 = (color - 0.5) % 3;
//let ratio = color - Math.floor(color);


// let red = 0;
// let green = 0;
// let blue = 0;
// if(color < 1 ){red = ratio; blue = (1-ratio)} else
// if(color < 2 ){green = ratio; red = (1-ratio)} else
// if(color < 3 ){blue = ratio; red = (1-ratio)}




//wait so
//brightest color = lite
//darkest color = deSat * lite
//middle color = (brightest - darkest) * ratio, + darkest

//brown e.g. is 70 90 41.67
//green-brown e.g. is 50 50 51
//or i dunno maybe 50 50 50
