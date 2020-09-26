import fs from 'fs';

import directoryConfig from './config/directory';

function readFile() {
  try {
    const promse = fs.readFileSync(directoryConfig, 'utf-8');

    return promse;
  } catch (error) {
    return error;
  }
}

const result = readFile();

if (result instanceof Error) {
  console.log('Ops, um error ocorreu');
  throw new Error('Um');
}

console.log(result);
