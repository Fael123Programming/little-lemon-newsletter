function validateEmail(email) {
    return new RegExp(
        '[\\w.-]+@[\\w-]+(\\.[a-z]+)+'
    ).test(email);
}

export default validateEmail;
// const emails = [
//     '1238@gmail.br.com.c',
//     'johnson@google.com',
//     'react-native@meta.com',
//     'rafaelfonseca1020@gmail.com',
//     'leafar.seara@gmail.com',
//     'rafael.fonseca@estudante.ifgoiano.edu.br',
//     'm314883@alunos.ipb.pt'
// ];

// emails.forEach(email => validateEmail(email) ? console.log(`${email} is valid!`) : console.log(`${email} is broken!`));
