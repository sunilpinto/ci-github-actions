const { isExportDeclaration } = require('typescript');
const attack = require('./attack');

test('should return damage sentence when called correctly', () => {
    const result = attack('Smelly Ogre', 23)
    expect(result).toBe('Smelly Ogre dealt 23 damage!')
    expect(result).toMatch(/^Smelly Ogre(.*)23/)
    expect(result).toMatchInlineSnapshot('"Smelly Ogre dealt 23 damage!"')
})
test('should return damage second sentence when called correctly', () => {
    const result = attack('Nice Ogre', 22)
    expect(result).toMatch(/^N(.*)22/)
})
