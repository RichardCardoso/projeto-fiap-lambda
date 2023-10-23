export function log (message) {
    console.log('Teste de commit com github actions');
    console.log(process.env.MINHA_VAR);
    console.log(`${message}`);
}