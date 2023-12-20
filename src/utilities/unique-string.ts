export default () => {
    const possibleCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < 32; i++) {
        const randomCharacter = possibleCharacters.charAt(
            Math.floor(Math.random() * possibleCharacters.length)
        );
        randomString+=randomCharacter;
    }
    return randomString;
}