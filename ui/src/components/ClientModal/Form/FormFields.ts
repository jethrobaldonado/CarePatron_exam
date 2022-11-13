export const PersonalDetailFields = {
	firstName: {
		required: true,
	},
	lastName: {
		required: true,
	},
};

export const ContactDetailFields = {
	email: {
		required: true,
		validate: 'email',
	},
	phoneNumber: {
		required: true,
		validate: 'phone',
	},
};