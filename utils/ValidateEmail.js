function validateEmail(email) {
    return new RegExp(
        '[\\w.-]+@[\\w-]+(\\.[a-z]+)+'
    ).test(email);
}

export default validateEmail;
