const generateUUID = () => {
    console.log('generating')
    return Date.now() + Math.floor(Math.random() * (1000 - 1) + 1)
}

module.exports = generateUUID;
