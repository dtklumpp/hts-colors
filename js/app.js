console.log('you are hearing me talk');
/* 
$( function() {
    $('.slider').slider();
});
 */


//reduce these three slider functions to a single one...

$( function() {
    let dial1 = $('#shade');

    $( "#holder1" ).slider({
        create: function() {
            $(this).slider('value', 50);
            dial1.text($(this).slider('value'));
        },
        slide: function(event, ui) {
            dial1.text(ui.value);
            $('.input2').val(ui.value);
            updateColors();
        }
    });
});

$( function() {
    let dial1 = $('#sat');

    $( "#holder2" ).slider({
        create: function() {
            $(this).slider('value', 50);
            dial1.text($(this).slider('value'));
        },
        slide: function(event, ui) {
            dial1.text(ui.value);
            $('.input3').val(ui.value);
            updateColors();
        }
    });
});


$( function() {
    let dial1 = $('#hue');

    $( "#holder3" ).slider({
        create: function() {
            $(this).slider('value', 50);
            dial1.text($(this).slider('value'));
        },
        slide: function(event, ui) {
            dial1.text(ui.value);
            $('.input1').val(ui.value);
            updateColors();
        }
    });
});

$('.convert').hide();



const buttonFxn = function(event){
    console.log('clicked it');
    $('.convert').show();

    let hue1 = $('.input1').val();
    let lite1 = $('.input2').val();
    let sat1 = $('.input3').val();


    $('#holder3').slider('value', hue1);
    $('#hue').text(hue1);
    $('#holder1').slider('value', lite1);
    $('#shade').text(lite1);
    $('#holder2').slider('value', sat1);
    $('#sat').text(sat1);

    // $('#hue').text($ ('.input1').val() );
    // $('#shade').text($ ('.input2').val() );
    // $('#sat').text($ ('.input3').val() );

    updateColors(event);
}



const updateColors = function(event) {

    //wait i already did this above
    // $('.input1').val( $('#holder3').text() );
    // $('.input2').val( $('#shade').text() );
    // $('.input3').val( $('#sat').text() );

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
    
    // console.log(hue2);
    // console.log(typeof hue2);
    // console.log(Number(hue2));
    // console.log(typeof Number(hue2));
    let lite = Number(lite2);
    let sat = Number(sat2);
    let hue = Number(hue2);
    if(hue < 0){
        hue = hue + Math.abs(Math.floor(hue/100)*100)
    }
    hue = hue % 100;
    

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
    //console.log('rgbString: '+rgbString);
    
    $('.display').css('background-color', 'rgb'+rgbString);

    $('.convert1').text('RGB: '+rgbString);

    const toHexString = function(colorObject){
        let hexVal = colorObject.rgb.toString(16);
        if(hexVal.length === 1){
            hexVal = '0'+hexVal;
        }
        return hexVal.toUpperCase();
    }

    red.hex = toHexString(red);
    green.hex = toHexString(green);
    blue.hex = toHexString(blue);

    let hexString = '#'+red.hex+green.hex+blue.hex;
    //console.log('hexString: '+hexString);

    //console.log(red.rgb.toString(16));


    $('.convert2').text('HEX: '+hexString);
    
}

$('.button1').on('click', buttonFxn);

const saveColor = function() {
    //note: copy-pasted from above, make fxn
    let hue3 = $('.input1').val();
    let lite3 = $('.input2').val();
    let sat3 = $('.input3').val();

    let newHolder = $('<div/>').addClass('sample-holder');
    let newSample = $('<div/>').addClass('sample');
    let newText = $('<p/>').addClass('sample-text');
    newText.text( $('.convert2').text() );
                  $('.convert2').text()

    newSample.css('background-color', $('.display').css('background-color'));
    $('.samples').append(newHolder);
    newHolder.append(newSample);
    newHolder.append(newText);
    
}

$('.saveit').on('click', saveColor);




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
