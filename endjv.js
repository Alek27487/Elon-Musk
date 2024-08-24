// All lems images
const images = [
    'head1.png', 
    'head3.png', 
    'head4.gif', 
    'head5.png'
];

// Animation settings
const numLems = 10,
    animSecs = 15,
    frames = 15;

// Min and max included random number
function randomFromRange(min, max)
{
    return Math.floor( Math.random() * (max - min + 1) + min );
}

function generate(waitSec, offset) 
{
    setTimeout(function() {
        //console.log( waitSec + ':' + offset );

        for ( var i=0; i < numLems; i++ ) {

            var rand = randomFromRange( 1, images.length ),
                animTime = Math.random() * animSecs,
                animationStr = 'anim' + randomFromRange(1, 3) + ' ' + animTime + 's',
                imgId = ( offset * numLems ) + i;

            //console.log(animationStr);

            // Remove previous image and replace with new
            if ( document.getElementById( 'img' + imgId ) != null ) {
                document.getElementById( 'img' + imgId ).remove();
            }

            // Create image and add to body
            var img = document.createElement('img');
            img.id = 'img' + imgId;
            img.alt = 'Lems ' + rand;

            img.style.top = randomFromRange(1, 100) + 'vh';
            img.style.left = '-11vw';
            img.style.animation = animationStr;

            img.src = images[ rand - 1 ];

            document.body.appendChild(img);

        }

        generate( 1000 * animSecs, offset );

    }, waitSec );

}

// Generate animation frames
for ( var i=0; i < frames; i++ ) {
    var secs = ( ( animSecs / frames ) * i * 1000 );

    generate(secs, i);
}
