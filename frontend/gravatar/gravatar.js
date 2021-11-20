var md5 = require('md5');

// Documentation: http://en.gravatar.com/site/implement/images/
function getHash(email){
    const lowerCaseEmail = email.toLowerCase();
    return md5(lowerCaseEmail);
}

/*  CALL THIS FUNCTION
    INPUT: users email and desired size of image (up to 2048 px)
    **enter email and size BOTH AS STRINGS**
    OUTPUT: the image link of the gravatar in string form */
function getGravatar(email,size) {
    const hash = getHash(email);
    const gravatarURL = "https://www.gravatar.com/avatar/";
    const rating = "?r=g";
    const imgSize = "&s=" + size;
    const gravatarImageUrl = gravatarURL + hash + rating + imgSize;

    return gravatarImageUrl;
}

exports.getGravatar = getGravatar;