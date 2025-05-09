/**
 * Converte um número de 0 a 61 para um caractere
 * @param number Número de 0 a 61
 * @returns Caractere correspondente ao número
 */
const codeToChar = (number: number) => {
    if (number >= 0 && number <= 25) {
        number = number + 97; // a-z
    } else if (number >= 26 && number <= 51) {
        number = number + (65 - 26); // A-Z
    } else if (number >= 52 && number <= 61) {
        number = number + (48 - 52); // 0-9
    } else {
        return ""; // range error
    }
    return String.fromCharCode(number);
};

/**
 * Converte um caractere para um número de 0 a 61
 * @param char Caractere a ser convertido
 * @returns Número correspondente ao caractere
 */
const charToCode = (char: string) => {
    const code = char.charCodeAt(0);
    if (code >= 97 && code <= 122) {
        return code - 97; // a-z
    } else if (code >= 65 && code <= 90) {
        return code - 65 + 26; // A-Z
    } else if (code >= 48 && code <= 57) {
        return code - 48 + 52; // 0-9
    } else {
        return -1; // range error
    }
};

/**
 * Gera um caractere aleatório
 * @returns Caractere aleatório
 */
const randomChar = () => {
    return codeToChar(Math.floor(Math.random() * 62));
};

/**
 * Gera uma chave vetorial aleatória
 * @param length Tamanho da chave vetorial, multiplos de 4
 * @returns Chave vetorial aleatória
 *
 * @example
 * ```ts
 *  const key = randomVectorsKey(8); // "aB1cD2eF"
 * ```
 */
const randomVectorsKey = (length: number) => {
    const result: string[] = [];

    if (length < 4) {
        throw new Error("Length must be greater than 4");
    }

    if (length % 4 !== 0) {
        throw new Error("Length must be a multiple of 4");
    }

    for (let i = 0; i < length; i++) {
        result.push(randomChar());
    }

    return result.join("");
};

/**
 * Converte uma chave vetorial em um array de vetores
 * @param key Chave vetorial
 * @returns Array de vetores
 * @example
 * ```ts
 * const vectors = keyToVectors("aB1cD2eF"); // [[0, 1], [2, 3], [4, 5], [6, 7]]
 * ```
 */
const keyToVectors = (key: string) => {
    const vectors: [number, number][] = [];
    for (let i = 0; i < key.length; i += 2) {
        vectors.push([charToCode(key[i]), charToCode(key[i + 1])]);
    }
    return vectors;
};

const generateKey = (length: number) => {
    const privateKey = randomVectorsKey(length);
    const vectors = keyToVectors(privateKey);
};
