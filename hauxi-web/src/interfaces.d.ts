interface IContactFormProps {
    test: string;
}

interface ISocialIconProps {
    name: string,
    link: string
}

interface IContactFormState {
    [x: string]: string, // Trick for being able to use dynamic keys when assigning to state.
    name: string,
    phone: string,
    email: string,
    message: string
}